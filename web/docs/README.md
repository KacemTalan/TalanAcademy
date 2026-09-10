# Documents & Cheatsheets

Downloadable PDF reference sheets for Talan Academy, branded with the Talan
visual theme (deep blue header/footer chrome, four-color accent strip, Talan
logo on the cover). Both are A4, print-friendly, English.

| File | Title | Pages | Tags |
|---|---|---|---|
| [al-objects-cheatsheet.pdf](al-objects-cheatsheet.pdf) | AL Objects Cheat Sheet | 7 | `developer`, `AL`, `extensions`, `reference` |
| [functional-cheatsheet.pdf](functional-cheatsheet.pdf) | Functional Processes Cheat Sheet | 11 | `functional`, `consultant`, `business-central`, `reference` |

## AL Objects Cheat Sheet

For AL developers and technical consultants. Covers the object map
(Data/UI/Logic layers), all 13 AL object types (Table, Table extension, Enum,
Enum extension, Page, Page extension, Codeunit, Report, Report extension,
Query, XMLport, Profile, Permission set) each with what it is, when to use it,
a minimal code sample, and a pitfall callout — plus a properties & triggers
quick-reference page (DataClassification, ApplicationArea, Access,
ObsoleteState, SourceTable and friends, plus the common trigger names per
object type) — closing with a naming, ID-range, and extension-model checklist.

## Functional Processes Cheat Sheet

For functional consultants and business users. Covers eight core BC
processes (Order to Cash, Procure to Pay, Inventory movements, Warehouse
lite, Finance essentials, Projects/Jobs, Service lite, Fixed Assets), each with
its stages, the Tell Me pages to open, a posting-impact table, and its most
common mistake — closing with a consultant checkpoints-before-go-live
checklist.

## Path note

The spec asked for `/public/docs/`. This repo has no `public/` folder —
`web/` is the actual Vercel-served static root (see `web/vercel.json`), so
these PDFs live in `web/docs/` to be genuinely downloadable from the live
Academy at `<site>/docs/<filename>.pdf`.

## Wiring

Linked from the app UI: a "Documents & Cheatsheets" button in the sidebar
(next to BC Dictionary, see `web/app.js` — `openDocs`/`renderDocsHub`/the
`DOCS` array) opens a hub page listing both PDFs as download cards. Add a
new file here and a matching entry to `DOCS` in `app.js` to publish another
cheatsheet.

## Regenerating

Both PDFs are built with a small reportlab-based toolkit (not part of this
repo — kept in a scratch/build location). Source: `talan_style.py` (shared
theme/components) plus `doc1_al_objects.py` and `doc2_functional.py`
(one builder script per document). Re-run the relevant script and it
overwrites the PDF in this folder.
