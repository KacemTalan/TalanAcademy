# BC Academy (BCA) — video mapping

The BC Academy series went from 6 lessons to 7 on 2026-09-18, adding a
Purchase Management lesson. It was first inserted as lesson 02, then moved
to lesson 07 (last) the same day per a follow-up request. Final order:

1. `bca-01` Sales & Service Management
2. `bca-02` Financial Management
3. `bca-03` Operations Management
4. `bca-04` Supply Chain Management
5. `bca-05` Project Management
6. `bca-06` Reporting & Analytics
7. `bca-07` Purchase Management

Lesson ids were **renumbered in place** to match this order (not given
fresh topic-based ids) — see **Progress impact** below.

**Status: done.** Videos are not stored in this codebase — normally you'd
attach each one from the Academy **Admin** panel (open the lesson → Video →
Attach video link) after uploading to SharePoint/Stream and copying its
share link. For this batch, all 7 files were instead uploaded directly to
the app's Supabase Storage bucket via a one-off maintenance script
(2026-09-18), using `uploadVideoBuffer()` / `server/src/storage.js` — the
same storage path the app's own upload endpoint
(`POST /api/videos/:lessonId/upload-url` → `/confirm`) uses, just run
server-side with the service-role key instead of through the browser. When
Purchase Management moved from lesson 02 to lesson 07 the same day, a
second script rotated each `videos` row's `storage_path`/`label` to follow
its content to the new id. Neither script was committed to the repo; this
file is the permanent record of what was uploaded and moved.

## Mapping — lesson id → title → video file → status

| Lesson id | Title | Video file (from `BC Academy updated`) | Status |
|---|---|---|---|
| `bca-01` | Sales & Service Management | BC Sales Service Training | ✅ uploaded |
| `bca-02` | Financial Management | BC Financial Management Training | ✅ uploaded |
| `bca-03` | Operations Management | BC Operations Management Training | ✅ uploaded |
| `bca-04` | Supply Chain Management | BC Supply Chain Management Training | ✅ uploaded |
| `bca-05` | Project Management | BC Project Management Training | ✅ uploaded |
| `bca-06` | Reporting & Analytics | BC Reporting Analytics Training | ✅ uploaded |
| `bca-07` | Purchase Management | BC Purchase Management Training | ✅ uploaded |

Each `videos` row has `storage_path` set (not `url`) and a label matching
its file's own title, e.g. "BC Financial Management Training" — visible in
Admin exactly as if it had been attached by hand. Verified live, both
before and after the reorder: a file's signed playback URL returns HTTP 200
with the correct `video/mp4` content type and byte size.

To replace one later (a re-edited version of a video, for instance), use
Admin as normal — **Replace** clears the old storage object automatically
before attaching the new one; there's nothing special about how these got
here.

## Progress impact — read before publishing

Lesson ids were renumbered **in place** twice in one day (no migration map
was available either time), which means:

- **`bca-01`** (Sales & Service) — id unchanged throughout, content
  unchanged. No impact.
- **`bca-02` through `bca-06`** — after both changes, these ids ended up
  holding the *same* content they held before Purchase Management was ever
  inserted (Financial, Operations, Supply Chain, Project, Reporting, in
  that order) — so anyone whose progress predates 2026-09-18 is fine.
  Anyone who happened to interact with the app during the brief window
  *between* the two changes that day (when `bca-02` was briefly Purchase
  Management) may see a stray mismatched checkmark from that window.
- **`bca-07`** — now Purchase Management, a genuinely new lesson. Nobody
  has meaningful prior progress here regardless of which change is being
  considered.

In short: this second reorder actually **undoes** most of the original
mismatch risk, since five of the six pre-existing lessons are back at their
original ids. The only lasting oddity is `bca-07`, which is simply new
content nobody had seen before either change.
