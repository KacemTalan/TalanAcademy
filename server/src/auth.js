import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { q } from './db.js';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET || JWT_SECRET.length < 24) {
  console.error('FATAL: JWT_SECRET must be set to a random string of at least 24 characters.');
  process.exit(1);
}

// Which email domain may register. Defaults to talan.com.
export const ALLOWED_DOMAIN = (process.env.ALLOWED_EMAIL_DOMAIN || 'talan.com').toLowerCase();

const TOKEN_TTL = process.env.TOKEN_TTL || '12h';

export const normaliseEmail = (email) => String(email || '').trim().toLowerCase();

export function isAllowedEmail(email) {
  const e = normaliseEmail(email);
  // Basic shape check, then a strict domain match on the final segment.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return false;
  return e.endsWith('@' + ALLOWED_DOMAIN);
}

export function passwordProblem(pw) {
  const p = String(pw || '');
  if (p.length < 10) return 'Password must be at least 10 characters.';
  if (!/[a-z]/.test(p)) return 'Password must contain a lowercase letter.';
  if (!/[A-Z]/.test(p)) return 'Password must contain an uppercase letter.';
  if (!/[0-9]/.test(p)) return 'Password must contain a number.';
  return null;
}

export const hashPassword = (pw) => bcrypt.hash(pw, 12);
export const verifyPassword = (pw, hash) => bcrypt.compare(pw, hash);

export const signToken = (user) =>
  jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: TOKEN_TTL });

export const publicUser = (u) => ({
  id: u.id,
  email: u.email,
  name: u.name,
  role: u.role,
  status: u.status,
  mustReset: u.must_reset,
  createdAt: u.created_at
});

/** Requires a valid token AND an approved account. */
export async function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Not signed in.' });

  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch {
    return res.status(401).json({ error: 'Your session has expired. Please sign in again.' });
  }

  const { rows } = await q('SELECT * FROM users WHERE id = $1', [payload.sub]);
  const user = rows[0];
  if (!user) return res.status(401).json({ error: 'Account no longer exists.' });

  // Status is checked on every request, so revoking access takes effect immediately.
  if (user.status !== 'approved') {
    return res.status(403).json({
      error: user.status === 'pending'
        ? 'Your account is still awaiting approval.'
        : 'Your access has been revoked. Contact your administrator.',
      status: user.status
    });
  }

  req.user = user;
  // Fire-and-forget; a failed timestamp update should never block a request.
  q('UPDATE users SET last_seen_at = now() WHERE id = $1', [user.id]).catch(() => {});
  next();
}

export function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Administrator access required.' });
  }
  next();
}
