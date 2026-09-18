# BC Academy (BCA) — video mapping

The BC Academy series went from 6 lessons to 7 on 2026-09-18 (Purchase
Management inserted as lesson 02). Lesson ids were **renumbered in place**
(`bca-01`…`bca-07`, matching the new position), not given fresh topic-based
ids — see **Progress impact** below before you publish anything.

Videos are not stored in this codebase. There is no local file path anywhere
in `web/curriculum.js` — attach each video from the Academy **Admin** panel
(open the lesson → Video → Attach video link) after uploading it to
SharePoint or Stream and copying its share link. Do not paste a
`C:\Users\...` path; the app runs on Vercel and cannot read your machine.

## Mapping — lesson id → title → video file → link

| Lesson id | Title | Video file (from `BC Academy updated`) | Share link |
|---|---|---|---|
| `bca-01` | Sales & Service Management | BC Sales Service Training | _(paste here)_ |
| `bca-02` | Purchase Management | BC Purchase Management Training | _(paste here)_ |
| `bca-03` | Financial Management | BC Financial Management Training | _(paste here)_ |
| `bca-04` | Operations Management | BC Operations Management Training | _(paste here)_ |
| `bca-05` | Supply Chain Management | BC Supply Chain Management Training | _(paste here)_ |
| `bca-06` | Project Management | BC Project Management Training | _(paste here)_ |
| `bca-07` | Reporting & Analytics | BC Reporting Analytics Training | _(paste here)_ |

Suggested label to save alongside each link in Admin (shown under the
player): the video file's own title, e.g. "BC Sales Service Training".

## What to do with the old videos

Because `bca-02` through `bca-06` now point at **different lesson content**
than before (see below), any video previously attached to those ids is now
attached to the wrong topic and needs to be reviewed:

1. Open each of `bca-02`…`bca-06` in Admin and check what's currently attached.
2. If it's the *old* video for that id's *old* topic, click **Remove**, then
   attach the correct new file from the table above.
3. `bca-07` is a brand-new id — nothing was attached there before.
4. `bca-01` is unchanged (same id, same topic) — its existing video, if any,
   is still correctly attached and doesn't need touching.

There's no bulk/SQL step required — the app only ever reads whatever is
currently attached per id, so reviewing and re-attaching through Admin is
the whole fix.

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
