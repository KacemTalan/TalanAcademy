import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import crypto from 'node:crypto';

import { q, audit } from './db.js';
import { createSignedUploadUrl, createSignedPlaybackUrl, removeVideo } from './storage.js';
import {
  ALLOWED_DOMAIN, normaliseEmail, isAllowedEmail, passwordProblem,
  hashPassword, verifyPassword, signToken, publicUser,
  requireAuth, requireAdmin
} from './auth.js';

const app = express();
app.set('trust proxy', 1); // Railway/Vercel sit behind a proxy

app.use(helmet());
app.use(express.json({ limit: '256kb' }));

/* ---------------- CORS ---------------- */
// Comma-separated list, e.g. "https://academy.talan.com,https://talan-academy.vercel.app"
const origins = (process.env.CORS_ORIGIN || '')
  .split(',').map(s => s.trim()).filter(Boolean);

app.use(cors({
  origin(origin, cb) {
    if (!origin) return cb(null, true);              // curl, health checks
    if (!origins.length) return cb(null, true);      // unset = allow (dev only)
    if (origins.includes(origin)) return cb(null, true);
    // Allow Vercel preview deployments of the same project if opted in
    if (process.env.ALLOW_VERCEL_PREVIEWS === 'true' && /\.vercel\.app$/.test(new URL(origin).hostname)) {
      return cb(null, true);
    }
    cb(new Error('Origin not allowed by CORS'));
  },
  credentials: false
}));

/* ---------------- Rate limits ---------------- */
// An entire office often shares one public IP, so a strict per-IP limit would
// lock out colleagues. Two layers instead: a generous per-IP ceiling to blunt
// bulk abuse, and a strict per-email limit that targets the account actually
// being guessed at.
const RL = (n) => parseInt(process.env.RATE_LIMIT_SCALE || '1', 10) * n;

const ipAuthLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: RL(80),
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many attempts from this network. Please wait a few minutes.' }
});

const emailAuthLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: RL(8),
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => normaliseEmail(req.body?.email) || req.ip,
  // Only failures should count toward the limit.
  skipSuccessfulRequests: true,
  message: { error: 'Too many failed attempts for this account. Please wait 15 minutes.' }
});

const authLimiter = [ipAuthLimiter, emailAuthLimiter];

const writeLimiter = rateLimit({ windowMs: 60 * 1000, max: RL(120) });

/* ---------------- Health ---------------- */
app.get('/health', async (_req, res) => {
  try {
    await q('SELECT 1');
    res.json({ ok: true, domain: ALLOWED_DOMAIN });
  } catch {
    res.status(503).json({ ok: false });
  }
});

/* ---------------- Auth ---------------- */

app.post('/api/auth/signup', authLimiter, async (req, res) => {
  const email = normaliseEmail(req.body?.email);
  const name = String(req.body?.name || '').trim();
  const password = String(req.body?.password || '');

  if (!name || name.length < 2) return res.status(400).json({ error: 'Please enter your full name.' });
  if (!isAllowedEmail(email)) {
    return res.status(400).json({ error: `Sign-up is limited to @${ALLOWED_DOMAIN} email addresses.` });
  }
  const pwErr = passwordProblem(password);
  if (pwErr) return res.status(400).json({ error: pwErr });

  try {
    const hash = await hashPassword(password);

    // The very first account, or one matching ADMIN_EMAIL, becomes an approved admin.
    const { rows: countRows } = await q('SELECT COUNT(*)::int AS n FROM users');
    const isFirst = countRows[0].n === 0;
    const isDesignatedAdmin = normaliseEmail(process.env.ADMIN_EMAIL) === email;
    const bootstrapAdmin = isFirst || isDesignatedAdmin;

    const { rows } = await q(
      `INSERT INTO users (email, name, password_hash, role, status, approved_at)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [
        email, name, hash,
        bootstrapAdmin ? 'admin' : 'consultant',
        bootstrapAdmin ? 'approved' : 'pending',
        bootstrapAdmin ? new Date() : null
      ]
    );

    const user = rows[0];
    await audit(user.id, bootstrapAdmin ? 'admin_bootstrap' : 'signup', email);

    if (bootstrapAdmin) {
      return res.status(201).json({ token: signToken(user), user: publicUser(user) });
    }
    res.status(201).json({
      pending: true,
      message: 'Account created. An administrator needs to approve it before you can sign in.'
    });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ error: 'An account with that email already exists.' });
    }
    console.error('signup', err);
    res.status(500).json({ error: 'Could not create the account.' });
  }
});

app.post('/api/auth/login', authLimiter, async (req, res) => {
  const email = normaliseEmail(req.body?.email);
  const password = String(req.body?.password || '');

  try {
    const { rows } = await q('SELECT * FROM users WHERE email = $1', [email]);
    const user = rows[0];

    // Same generic message whether the account is missing or the password is wrong,
    // so this endpoint cannot be used to enumerate valid addresses.
    const ok = user && await verifyPassword(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Email or password is incorrect.' });

    if (user.status === 'pending') {
      return res.status(403).json({ error: 'Your account is still awaiting administrator approval.', status: 'pending' });
    }
    if (user.status !== 'approved') {
      return res.status(403).json({ error: 'Your access has been revoked. Contact your administrator.', status: user.status });
    }

    await q('UPDATE users SET last_seen_at = now() WHERE id = $1', [user.id]);
    res.json({ token: signToken(user), user: publicUser(user) });
  } catch (err) {
    console.error('login', err);
    res.status(500).json({ error: 'Could not sign in.' });
  }
});

app.get('/api/me', requireAuth, (req, res) => res.json({ user: publicUser(req.user) }));

app.post('/api/me/password', requireAuth, writeLimiter, async (req, res) => {
  const current = String(req.body?.current || '');
  const next = String(req.body?.next || '');
  const pwErr = passwordProblem(next);
  if (pwErr) return res.status(400).json({ error: pwErr });

  if (!await verifyPassword(current, req.user.password_hash)) {
    return res.status(401).json({ error: 'Your current password is incorrect.' });
  }
  await q('UPDATE users SET password_hash = $1, must_reset = false WHERE id = $2',
    [await hashPassword(next), req.user.id]);
  await audit(req.user.id, 'password_change');
  res.json({ ok: true });
});

/* ---------------- Learner state ---------------- */

app.get('/api/state', requireAuth, async (req, res) => {
  const [prog, notes, vids] = await Promise.all([
    q('SELECT lesson_id, completed_at FROM progress WHERE user_id = $1', [req.user.id]),
    q('SELECT lesson_id, body FROM notes WHERE user_id = $1', [req.user.id]),
    q('SELECT lesson_id, url, storage_path, label FROM videos')
  ]);

  const videos = await Promise.all(vids.rows.map(async (r) => {
    if (r.storage_path) {
      try {
        const url = await createSignedPlaybackUrl(r.storage_path);
        return [r.lesson_id, { url, label: r.label }];
      } catch (err) {
        console.error('signed url failed for', r.lesson_id, err.message);
        return [r.lesson_id, { url: null, label: r.label }];
      }
    }
    return [r.lesson_id, { url: r.url, label: r.label }];
  }));

  res.json({
    progress: prog.rows.map(r => r.lesson_id),
    notes: Object.fromEntries(notes.rows.map(r => [r.lesson_id, r.body])),
    videos: Object.fromEntries(videos)
  });
});

app.put('/api/progress/:lessonId', requireAuth, writeLimiter, async (req, res) => {
  const lessonId = String(req.params.lessonId).slice(0, 64);
  if (req.body?.completed) {
    await q(`INSERT INTO progress (user_id, lesson_id) VALUES ($1, $2)
             ON CONFLICT (user_id, lesson_id) DO NOTHING`, [req.user.id, lessonId]);
  } else {
    await q('DELETE FROM progress WHERE user_id = $1 AND lesson_id = $2', [req.user.id, lessonId]);
  }
  res.json({ ok: true });
});

app.put('/api/notes/:lessonId', requireAuth, writeLimiter, async (req, res) => {
  const lessonId = String(req.params.lessonId).slice(0, 64);
  const body = String(req.body?.body ?? '').slice(0, 20000);
  if (!body.trim()) {
    await q('DELETE FROM notes WHERE user_id = $1 AND lesson_id = $2', [req.user.id, lessonId]);
  } else {
    await q(`INSERT INTO notes (user_id, lesson_id, body) VALUES ($1, $2, $3)
             ON CONFLICT (user_id, lesson_id)
             DO UPDATE SET body = EXCLUDED.body, updated_at = now()`,
      [req.user.id, lessonId, body]);
  }
  res.json({ ok: true });
});

/* ---------------- Videos (admin writes, everyone reads) ---------------- */

const VIDEO_HOSTS = /(sharepoint\.com|microsoftstream\.com|stream\.office\.com|youtube\.com|youtu\.be|vimeo\.com|\.mp4$|\.webm$)/i;

app.put('/api/videos/:lessonId', requireAuth, requireAdmin, writeLimiter, async (req, res) => {
  const lessonId = String(req.params.lessonId).slice(0, 64);
  const url = String(req.body?.url || '').trim();
  const label = String(req.body?.label || '').trim().slice(0, 200);

  let parsed;
  try { parsed = new URL(url); } catch {
    return res.status(400).json({ error: 'That is not a valid link. It should start with https://' });
  }
  if (parsed.protocol !== 'https:') {
    return res.status(400).json({ error: 'The link must use https.' });
  }
  if (!VIDEO_HOSTS.test(url)) {
    return res.status(400).json({
      error: 'Link must point to SharePoint, Stream, YouTube, Vimeo, or a direct .mp4/.webm file.'
    });
  }

  // Switching to an external link drops any previously uploaded file for this lesson.
  const { rows: prevRows } = await q('SELECT storage_path FROM videos WHERE lesson_id = $1', [lessonId]);
  if (prevRows[0]?.storage_path) {
    await removeVideo(prevRows[0].storage_path).catch(err => console.error('cleanup failed', err.message));
  }

  await q(`INSERT INTO videos (lesson_id, url, storage_path, label, updated_by, updated_at)
           VALUES ($1, $2, NULL, $3, $4, now())
           ON CONFLICT (lesson_id) DO UPDATE
           SET url = EXCLUDED.url, storage_path = NULL, label = EXCLUDED.label,
               updated_by = EXCLUDED.updated_by, updated_at = now()`,
    [lessonId, url, label, req.user.id]);

  await audit(req.user.id, 'video_set', `${lessonId} -> ${parsed.hostname}`);
  res.json({ ok: true });
});

// Step 1 of a file upload: the browser gets a short-lived URL to upload straight to
// storage, bypassing this server (and its request-size limits) entirely.
app.post('/api/videos/:lessonId/upload-url', requireAuth, requireAdmin, writeLimiter, async (req, res) => {
  const lessonId = String(req.params.lessonId).slice(0, 64);
  try {
    const { signedUrl, path, token } = await createSignedUploadUrl(`${lessonId}/${Date.now()}.mp4`);
    res.json({ signedUrl, path, token });
  } catch (err) {
    console.error('upload-url', err);
    res.status(500).json({ error: 'Could not prepare an upload slot.' });
  }
});

// Step 2: called after the browser has finished uploading directly to storage,
// to record the result against the lesson.
app.post('/api/videos/:lessonId/confirm', requireAuth, requireAdmin, writeLimiter, async (req, res) => {
  const lessonId = String(req.params.lessonId).slice(0, 64);
  const path = String(req.body?.path || '').trim();
  const label = String(req.body?.label || '').trim().slice(0, 200);
  if (!path.startsWith(`${lessonId}/`)) {
    return res.status(400).json({ error: 'Upload path does not match this lesson.' });
  }

  const { rows: prevRows } = await q('SELECT storage_path FROM videos WHERE lesson_id = $1', [lessonId]);
  if (prevRows[0]?.storage_path && prevRows[0].storage_path !== path) {
    await removeVideo(prevRows[0].storage_path).catch(err => console.error('cleanup failed', err.message));
  }

  await q(`INSERT INTO videos (lesson_id, url, storage_path, label, updated_by, updated_at)
           VALUES ($1, NULL, $2, $3, $4, now())
           ON CONFLICT (lesson_id) DO UPDATE
           SET url = NULL, storage_path = EXCLUDED.storage_path, label = EXCLUDED.label,
               updated_by = EXCLUDED.updated_by, updated_at = now()`,
    [lessonId, path, label, req.user.id]);

  await audit(req.user.id, 'video_set', `${lessonId} -> uploaded file`);
  res.json({ ok: true });
});

app.delete('/api/videos/:lessonId', requireAuth, requireAdmin, writeLimiter, async (req, res) => {
  const lessonId = String(req.params.lessonId).slice(0, 64);
  const { rows } = await q('DELETE FROM videos WHERE lesson_id = $1 RETURNING storage_path', [lessonId]);
  if (rows[0]?.storage_path) {
    await removeVideo(rows[0].storage_path).catch(err => console.error('cleanup failed', err.message));
  }
  await audit(req.user.id, 'video_remove', lessonId);
  res.json({ ok: true });
});

/* ---------------- Admin ---------------- */

app.get('/api/admin/users', requireAuth, requireAdmin, async (_req, res) => {
  const { rows } = await q(`
    SELECT u.id, u.email, u.name, u.role, u.status,
           u.created_at, u.approved_at, u.last_seen_at,
           COALESCE(p.done, 0)  AS completed,
           COALESCE(n.notes, 0) AS notes_count
    FROM users u
    LEFT JOIN (SELECT user_id, COUNT(*)::int AS done  FROM progress GROUP BY user_id) p ON p.user_id = u.id
    LEFT JOIN (SELECT user_id, COUNT(*)::int AS notes FROM notes    GROUP BY user_id) n ON n.user_id = u.id
    ORDER BY
      CASE u.status WHEN 'pending' THEN 0 ELSE 1 END,
      u.created_at DESC
  `);
  res.json({ users: rows });
});

app.get('/api/admin/users/:id/progress', requireAuth, requireAdmin, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id)) return res.status(400).json({ error: 'Bad id.' });
  const { rows } = await q(
    'SELECT lesson_id, completed_at FROM progress WHERE user_id = $1 ORDER BY completed_at DESC',
    [id]
  );
  res.json({ progress: rows });
});

app.post('/api/admin/users/:id/status', requireAuth, requireAdmin, writeLimiter, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const status = String(req.body?.status || '');
  if (!['approved', 'pending', 'rejected', 'suspended'].includes(status)) {
    return res.status(400).json({ error: 'Unknown status.' });
  }
  if (id === req.user.id) {
    return res.status(400).json({ error: 'You cannot change your own status.' });
  }

  const { rows } = await q(
    `UPDATE users SET status = $1,
       approved_at = CASE WHEN $1 = 'approved' THEN now() ELSE approved_at END,
       approved_by = CASE WHEN $1 = 'approved' THEN $2 ELSE approved_by END
     WHERE id = $3 RETURNING email`,
    [status, req.user.id, id]
  );
  if (!rows[0]) return res.status(404).json({ error: 'User not found.' });

  await audit(req.user.id, 'status_change', `${rows[0].email} -> ${status}`);
  res.json({ ok: true });
});

app.post('/api/admin/users/:id/role', requireAuth, requireAdmin, writeLimiter, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const role = String(req.body?.role || '');
  if (!['admin', 'consultant'].includes(role)) return res.status(400).json({ error: 'Unknown role.' });
  if (id === req.user.id) return res.status(400).json({ error: 'You cannot change your own role.' });

  const { rows } = await q('UPDATE users SET role = $1 WHERE id = $2 RETURNING email', [role, id]);
  if (!rows[0]) return res.status(404).json({ error: 'User not found.' });
  await audit(req.user.id, 'role_change', `${rows[0].email} -> ${role}`);
  res.json({ ok: true });
});

app.post('/api/admin/users/:id/reset-password', requireAuth, requireAdmin, writeLimiter, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  // Readable temporary password, shown to the admin exactly once.
  const temp = 'Talan-' + crypto.randomBytes(4).toString('hex').toUpperCase() + '-' + Math.floor(10 + Math.random() * 89);
  const { rows } = await q(
    'UPDATE users SET password_hash = $1, must_reset = true WHERE id = $2 RETURNING email',
    [await hashPassword(temp), id]
  );
  if (!rows[0]) return res.status(404).json({ error: 'User not found.' });
  await audit(req.user.id, 'password_reset', rows[0].email);
  res.json({ ok: true, temporaryPassword: temp, email: rows[0].email });
});

app.delete('/api/admin/users/:id', requireAuth, requireAdmin, writeLimiter, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id === req.user.id) return res.status(400).json({ error: 'You cannot delete your own account.' });
  const { rows } = await q('DELETE FROM users WHERE id = $1 RETURNING email', [id]);
  if (!rows[0]) return res.status(404).json({ error: 'User not found.' });
  await audit(req.user.id, 'user_delete', rows[0].email);
  res.json({ ok: true });
});

app.get('/api/admin/stats', requireAuth, requireAdmin, async (_req, res) => {
  const [users, completions, popular, recent] = await Promise.all([
    q(`SELECT
         COUNT(*)::int                                        AS total,
         COUNT(*) FILTER (WHERE status='pending')::int        AS pending,
         COUNT(*) FILTER (WHERE status='approved')::int       AS approved,
         COUNT(*) FILTER (WHERE role='admin')::int            AS admins,
         COUNT(*) FILTER (WHERE last_seen_at > now() - interval '7 days')::int AS active_7d
       FROM users`),
    q('SELECT COUNT(*)::int AS n FROM progress'),
    q(`SELECT lesson_id, COUNT(*)::int AS n FROM progress
       GROUP BY lesson_id ORDER BY n DESC LIMIT 10`),
    q(`SELECT a.action, a.detail, a.created_at, u.name AS actor
       FROM audit_log a LEFT JOIN users u ON u.id = a.actor_id
       ORDER BY a.created_at DESC LIMIT 20`)
  ]);

  res.json({
    users: users.rows[0],
    totalCompletions: completions.rows[0].n,
    popularLessons: popular.rows,
    recentActivity: recent.rows
  });
});

/* ---------------- Errors ---------------- */
app.use((err, _req, res, _next) => {
  if (err?.message === 'Origin not allowed by CORS') {
    return res.status(403).json({ error: 'Origin not allowed.' });
  }
  console.error(err);
  res.status(500).json({ error: 'Something went wrong.' });
});

export default app;
