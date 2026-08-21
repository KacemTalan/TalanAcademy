# Talan Academy — deployment guide

An internal learning platform for Talan consultants. Business Central curriculum
with per-user progress tracking, admin-approved sign-up restricted to
`@talan.com`, and admin-only video publishing from SharePoint.

```
web/     static frontend  → Vercel
server/  Express + Postgres API → Railway
```

---

## What you get

**For consultants**
- Sign up with a `@talan.com` address, wait for your approval
- 7 curricula, 61 lessons, 89 code samples
- Mark lessons complete; progress saved to their account, visible on any device
- Private notes per lesson (only they can read them — not even you)
- Watch the videos you publish

**For you as admin**
- Approve or reject every sign-up request
- See every consultant's progress: completion count, percentage, last seen
- Drill into any consultant to see exactly which lessons they finished and when
- Publish a video to any lesson by pasting a SharePoint link
- Suspend access, promote someone to admin, reset a password, delete an account
- Audit trail of every administrative action

Consultants cannot publish, replace, or remove videos. The controls are not
rendered for them, and the API rejects the request regardless.

---

## Step 1 — Deploy the API to Railway

1. Push this repository to GitHub.
2. In Railway: **New Project → Deploy from GitHub repo**, and set the root
   directory to `server`.
3. Add a database: **New → Database → Add PostgreSQL**. Railway creates it and
   exposes `DATABASE_URL`.
4. Open your service → **Variables** and set:

   | Variable | Value |
   |----------|-------|
   | `DATABASE_URL` | Add Reference → Postgres → `DATABASE_URL` |
   | `JWT_SECRET` | Run `openssl rand -base64 48` and paste the result |
   | `ADMIN_EMAIL` | Your own `@talan.com` address |
   | `ALLOWED_EMAIL_DOMAIN` | `talan.com` |
   | `CORS_ORIGIN` | Your Vercel URL (fill in after step 2) |

5. **Settings → Networking → Generate Domain**. Copy the URL — something like
   `talan-academy-production.up.railway.app`.

Tables are created automatically on first boot. Check
`https://your-api.up.railway.app/health` — it should return
`{"ok":true,"domain":"talan.com"}`.

## Step 2 — Deploy the frontend to Vercel

1. In Vercel: **Add New → Project**, import the same repository.
2. Set **Root Directory** to `web`.
3. Framework preset: **Other**. No build command, no output directory — it is
   plain static files.
4. Deploy, then copy your Vercel URL.

## Step 3 — Connect the two

1. Edit `web/config.js` and set `apiBase` to your Railway URL:

   ```js
   window.TALAN_CONFIG = {
     apiBase: "https://talan-academy-production.up.railway.app",
     emailDomain: "talan.com"
   };
   ```

   Commit and push — Vercel redeploys automatically.

2. Back in Railway, set `CORS_ORIGIN` to your Vercel URL, with no trailing
   slash. The API will reject browser requests from anywhere else.

## Step 4 — Create your admin account

Open the Vercel URL, click **Request access**, and sign up with the address you
set as `ADMIN_EMAIL`. That account is approved instantly and gets the admin role.
Everyone who signs up afterwards lands in your approval queue.

If you forget to set `ADMIN_EMAIL`, the very first account to register becomes
the admin instead — so register before sharing the link.

---

## Publishing videos

Videos are **not uploaded to this platform**. It stores links, and the file stays
in SharePoint under your control.

1. Upload the video to SharePoint as you normally would.
2. Get the share link — **Share → Copy link**, or **⋯ → Embed** for a cleaner
   player.
3. In the Academy, open the lesson, scroll to **Video**, click
   **Attach video link**, paste, and save.

Accepted: SharePoint, Microsoft Stream, YouTube, Vimeo, or a direct `.mp4`/`.webm`
URL. The API rejects anything else, and rejects plain `http`.

**Two separate permission layers.** Publishing a link here makes it visible to
approved consultants in the Academy. It does **not** grant them access to the
file. Set the SharePoint sharing on the video itself — "People in Talan" is
usually right. If a consultant lacks access, they will see the player frame but
cannot play it.

---

## Day-to-day administration

Everything lives under the **Admin** tab, top right.

**Approving people.** New requests appear at the top in a highlighted panel.
Approve or Reject. Rejected users can neither sign in nor re-register with the
same address until you delete the account.

**Tracking progress.** The consultant table shows status, a progress bar, the
completion count and when they were last active. **Detail** opens a breakdown by
curriculum showing which lessons they finished and when.

**The ⋯ menu** on each row: suspend access, promote or demote admin, reset
password, delete account.

Suspension is immediate — it is checked on every request, so an already
signed-in consultant loses access on their next action rather than when their
token expires.

**Resetting a password** generates a temporary one shown to you exactly once.
Send it to them over a secure channel; they are prompted to change it on sign-in.

---

## Security notes

- Passwords hashed with bcrypt, cost 12. Never stored or logged in plain text.
- The `@talan.com` restriction is enforced server-side, so it cannot be bypassed
  by editing the page. Suffix-spoofing (`talan.com.attacker.io`) is rejected.
- Login returns an identical error for an unknown address and a wrong password,
  so the endpoint cannot be used to discover who has an account.
- Rate limiting is layered: a generous per-IP ceiling so a whole office behind
  one NAT gateway is not locked out by one colleague, plus a strict per-email
  limit on failed attempts that targets the account actually under attack.
- Account status is re-checked on every request, not just at login.
- Admins cannot suspend, demote, or delete themselves — this prevents locking
  the last administrator out.
- Consultant notes are private. There is no API path that returns another
  user's notes, including for admins.
- Tokens expire after 12 hours by default (`TOKEN_TTL`).

**One thing this does not do:** there is no email delivery. Approvals, rejections
and password resets are not emailed — you tell the person directly. Adding a
mail provider would be the natural next step if the group grows beyond a size
where that is practical.

---

## Local development

```bash
# API
cd server
npm install
DATABASE_URL=postgresql://localhost:5432/academy \
JWT_SECRET=any-long-random-string-for-local-dev \
ADMIN_EMAIL=you@talan.com \
npm run dev

# Frontend, in another terminal
cd web
python3 -m http.server 8098
# set apiBase in config.js to http://localhost:8099
```

---

## Editing the curriculum

All lesson content is in `web/curriculum.js` — `CURRICULUM_A` (business,
platform, executive), `CURRICULUM_B` (developer), and `CODE_LIBRARY` for code
samples keyed by lesson id.

To add a lesson, append to a series' `lessons` array:

```js
{
  id: "bcs-08",           // must be unique across the whole file
  n: "08",
  title: "Lesson title",
  dur: "5 min read",
  summary: "Shown as the pull quote.",
  concepts: [ { h: "Heading", p: "Explanation." } ],
  why: "Why this matters in practice.",
  check: { q: "A question.", a: "The answer." }
}
```

Progress rows reference lesson ids, so **do not rename an id** once people have
completed it — their progress would be orphaned. Adding and removing lessons is
otherwise safe.
