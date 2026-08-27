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

---

## Editing the BC Dictionary

The bilingual (English ↔ French) Business Central term reference lives in
`web/dictionary.js` as `BC_DICTIONARY` — an array of modules, each with a
`terms` array. It has no backend and no dependency on progress tracking, so
editing it is always safe.

```js
{
  id: "dict-finance",           // must be unique across the file
  module: "Finance",            // English module name
  moduleFr: "Finances",         // French module name
  accent: "blue",                // blue | lime | magenta | teal (cycled across modules)
  terms: [
    {
      en: "General Ledger",
      fr: "Grand Livre",
      desc: "Main accounting ledger storing all financial transactions.",
      ids: "T17 · P20",          // optional — Table/Page reference, omit if unknown
      notes: "Extra detail worth a second line, if any."   // optional
    }
  ]
}
```

To add a term, append an object to the relevant module's `terms` array — only
`en`, `fr`, and `desc` are required. To add a whole new module, append a new
object to `BC_DICTIONARY` with a unique `id` and pick one of the four existing
`accent` values; the hub's mind-map and the sidebar entry pick it up
automatically, no other file needs to change.

Object/page IDs (`ids`) are standard W1 base-application references and can
vary by localization or extension — verify in your own BC environment before
treating them as exact.

---

## Adding a lab simulation

Any lesson — currently used on the Sandbox Labs (`LAB`) series — can carry an
optional `sim` object that renders a small, offline, BC-inspired practice
form below its Key Concepts. It never connects to a real Business Central
environment; it's a simplified simulation with its own validation.

```js
sim: {
  type: "card",              // "card" | "document" | "journal" | "match"
  title: "Customer Card — LAB-C001",
  intro: "One sentence telling the learner what to do.",
  gateComplete: true,        // optional — if true, "Mark as read" stays locked until this sim passes
  fields: [                  // card: the whole form. document/journal: the header, above the lines.
    { key: "no", label: "No.", type: "text", required: true, expect: "LAB-C001", placeholder: "e.g. LAB-C001" },
    { key: "custPostingGroup", label: "Customer Posting Group", type: "select", required: true,
      options: ["DOMESTIC", "EU", "FOREIGN"], expect: "DOMESTIC", help: "Shown under the field." }
  ],
  success: "One or two sentences: what this would post in real Business Central.",
  hints: ["Shown one at a time after the first failed Check answers.", "A second hint if the first isn't enough."]
}
```

**Field types:** `text`, `number`, `date`, `select` (needs `options`), `checkbox`.
Add `required: true` for a field that can't be blank, `expect` for the value
the exercise grades against (case/whitespace-insensitive for text, exact for
number), `min` for a number floor (defaults to `0` — use it to reject
negative quantities/prices), and `placeholder`/`help` for on-screen guidance.
A field with no `expect` is still validated for `required`/`number`, just not
graded against a specific answer.

**Document and journal sims** add a `lines` array — this is the *column*
schema for the editable line table (each entry has the same shape as a
`fields` entry), not literal row data. The learner gets one blank row to
start and can add more with "+ Add line"; only the **first row** is graded
against each column's `expect` — additional rows are free practice space, not
scored. Add a top-level `expectTotal` (a number) to also validate the sum of
`qty × price`-style columns across every row — the engine finds those columns
by matching `qty`/`quantity` and `price`/`cost` in the column `key`s, so name
your quantity and price/cost columns accordingly.

**Match sims** (apply a payment to an invoice, reconcile a line) use
`match: { leftLabel, rightLabel, pairs: [{ left, right }] }` instead of
`fields`. The right column is shuffled on every reset so position alone
never gives the answer away; a pair is correct when the learner links a
`left` item to its own `right` item specifically.

**Journal sims** use the exact same shape as `document` (`fields` optional,
`lines` required) — the only difference today is that document sims are
expected to always show `expectTotal`, while a journal typically won't.

**Progress gating.** Set `gateComplete: true` to lock "Mark as read" behind a
pass, the same way a quiz locks it — the button's label switches to "Pass the
simulation to continue". A sim's pass/fail result is **not** sent to the
server: it's written to `localStorage` keyed by the signed-in user's email
and the lesson id (`talan_sim_<email>_<lessonId>`), the same "client-side
gate, documented here" approach the spec allowed in place of a backend change.
That means passing a sim is per-browser, not per-account — if that ever needs
to follow the user across devices, the natural next step is a `PUT
/api/sim/:lessonId` endpoint mirroring the existing `/api/quiz/:lessonId`
one, plus a `simResults` column alongside `quizResults` in `/api/state`.

Nothing else needs to change to add a sim — `renderLesson` already checks for
`l.sim` and renders the panel automatically once the lesson object has it.
