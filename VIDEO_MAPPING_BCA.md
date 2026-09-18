# BC Academy (BCA) — video mapping

The BC Academy series went from 6 lessons to 7 on 2026-09-18 (Purchase
Management inserted as lesson 02). Lesson ids were **renumbered in place**
(`bca-01`…`bca-07`, matching the new position), not given fresh topic-based
ids — see **Progress impact** below before you publish anything.

**Status: done.** Videos are not stored in this codebase — normally you'd
attach each one from the Academy **Admin** panel (open the lesson → Video →
Attach video link) after uploading to SharePoint/Stream and copying its
share link. For this batch, all 7 files were instead uploaded directly to
the app's Supabase Storage bucket and attached via a one-off maintenance
script (2026-09-18), using `uploadVideoBuffer()` /
`server/src/storage.js` — the same storage path the app's own upload
endpoint (`POST /api/videos/:lessonId/upload-url` → `/confirm`) uses, just
run server-side with the service-role key instead of through the browser.
The script was not committed to the repo; this table is the permanent record
of what was uploaded.

## Mapping — lesson id → title → video file → status

| Lesson id | Title | Video file (from `BC Academy updated`) | Status |
|---|---|---|---|
| `bca-01` | Sales & Service Management | BC Sales Service Training | ✅ uploaded |
| `bca-02` | Purchase Management | BC Purchase Management Training | ✅ uploaded |
| `bca-03` | Financial Management | BC Financial Management Training | ✅ uploaded |
| `bca-04` | Operations Management | BC Operations Management Training | ✅ uploaded |
| `bca-05` | Supply Chain Management | BC Supply Chain Management Training | ✅ uploaded |
| `bca-06` | Project Management | BC Project Management Training | ✅ uploaded |
| `bca-07` | Reporting & Analytics | BC Reporting Analytics Training | ✅ uploaded |

Each `videos` row has `storage_path` set (not `url`) and a label matching
its file's own title, e.g. "BC Sales Service Training" — visible in Admin
exactly as if it had been attached by hand. Verified live: each file's
signed playback URL returns HTTP 200 with the correct `video/mp4` content
type and byte size.

To replace one later (a re-edited version of a video, for instance), use
Admin as normal — **Replace** clears the old storage object automatically
before attaching the new one, whether the original came from Admin or from
this script; there's nothing special about how these got here.

## Progress impact — read before publishing

Lesson ids were renumbered **in place** to match the spec exactly (no
migration map was available), which means:

- **`bca-01`** (Sales & Service) — id unchanged, content unchanged. No impact.
- **`bca-02`** — used to be Financial Management; now it's the new Purchase
  Management lesson. Anyone who had completed the old `bca-02` will see
  Purchase Management marked complete on their dashboard, even though they
  never read it.
- **`bca-03` through `bca-06`** — each now holds the content that used to be
  one slot earlier (old `bca-03` Operations → new `bca-04`, etc.). Same
  effect: a completion checkmark, quiz result, or note from before this
  change will appear to belong to a different topic than the one the user
  actually engaged with.
- **`bca-07`** — brand new id; nobody has prior progress here.

In short: **every BC Academy consultant's progress on this series will look
mismatched after this change**, except anyone who had only completed (or
not started) `bca-01`. This is a one-time, unavoidable consequence of
inserting a lesson in the middle of a sequentially-numbered series without a
migration script. If that's not acceptable, the fix would be a one-off
database migration remapping old `progress`/`notes`/`quiz_results` rows by
id before this content ships — ask if you want that written instead.
