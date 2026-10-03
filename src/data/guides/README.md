# Resource guides

Catherine's 15 printable guides, rendered as pages under `/resources`:

```
/resources                          all categories (the Resources tab)
/resources/<category>               one category
/resources/<category>/<guide>       a guide; sections are #anchors
/guides/pdfs/<nn>-<guide>.pdf       the original printable PDF
```

| Category id | Guides |
| --- | --- |
| `relocation` | 01 Relocating to Portland · 02 Relocating to Oregon |
| `area-overviews` | 03 SW Portland at a Glance · 04 Four Neighborhoods, Two Jurisdictions · 05 Lake Oswego, Beaverton & Highland |
| `portland-neighborhoods` | 06 Multnomah Village · 07 Goose Hollow · 08 Council Crest · 09 Bridlemile · 10 Sylvan Highlands · 11 Forest Heights |
| `washington-county` | 12 West Slope · 13 Raleigh Hills |
| `clackamas-county` | 14 Lake Oswego · 15 West Linn |

- **Content** — one file per guide in this folder, typed by `types.ts`. Text is transcribed from
  the PDFs. The contact card and compliance footer come from `src/config/site.ts` / `seo.ts`.
- **Categories** — names, order and blurbs are in `index.ts` (`guideCategories`).
- **Adding a guide** — add the file, import it in `index.ts`, add its slots to `images.json`,
  put the PDF in `public/guides/pdfs/`, and add its URL to `public/sitemap.xml`.
- **Market figures** are dated in each guide's `statsNote`; refresh them before a new season.

## Photos

Each photo position is a **slot** (e.g. `gabriel-park`) listed in `images.json` with its aspect
ratio and suggested subject. Files live in `public/guides/images/<guide>/<slot>.jpg`. Guides 08–15
had no photos in their PDFs, so their slots show "Photo coming soon" until filled.

```bash
npm run guide-photos -- path/to/folder --dry-run   # preview
npm run guide-photos -- path/to/folder             # copy in + update images.json
```

Name files after the slot (`Gabriel Park.jpg` works). Ids that repeat across guides (`lake-oswego`,
`west-slope`) need a sub-folder named after the guide, or `--guide <slug>`. Pages crop to the slot
with CSS, so photos don't need pre-cropping; the script warns about anything small or far off-aspect.
