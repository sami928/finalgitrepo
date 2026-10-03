# Replace Photos

Drop your own photos into this folder to replace the stock images used
throughout the site. **Match the filename exactly** to the slot you want
to replace — the app auto-detects any matching file and uses it instead
of the default stock photo.

## Supported formats
`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`

## Hero / page background images (wide, 1600×800+)

| File name                        | Used on            | What it shows                |
|----------------------------------|--------------------|------------------------------|
| `home-hero.jpg`                  | Home page hero     | Portland skyline / cityscape |
| `agent-photo.jpg`                | Guide contact cards | Portrait of Catherine       |
| `home-portrait.jpg`              | Home about section | Portrait of Catherine (falls back to `agent-photo.jpg`) |
| `home-family.jpg`                | Home CTA section   | Family receiving keys        |
| `listings-hero.jpg`              | Listings page hero | Portland home / neighborhood |
| `testimonials-hero.jpg`          | Testimonials hero  | Happy client / handshake     |
| `resources-hero.jpg`             | Resources hero     | Desk / guides / paperwork    |
| `contact-hero.jpg`               | Contact page hero  | Portland scene / office      |

## Listing photos (4:3 landscape, 900×600+)

| File name          | Listing address                  |
|--------------------|----------------------------------|
| `listing-01.jpg`   | 2847 SE Hawthorne Blvd           |
| `listing-02.jpg`   | 1120 NW Lovejoy St #402          |
| `listing-03.jpg`   | 6521 SW Hall Blvd                |
| `listing-04.jpg`   | 18905 SW Boones Ferry Rd         |
| `listing-05.jpg`   | 330 NE Hancock St                |
| `listing-06.jpg`   | 2215 NE Halsey St                |
| `listing-07.jpg`   | 4400 SE 128th Ave                |
| `listing-08.jpg`   | 5601 NE 14th Ave                 |

## Testimonial avatars (square, 300×300+)

| File name              | Client name              |
|------------------------|--------------------------|
| `testimonial-01.jpg`   | Jennifer & Mark Travis   |
| `testimonial-02.jpg`   | Daniel Okafor            |
| `testimonial-03.jpg`   | Priya Nair               |
| `testimonial-04.jpg`   | The Holloway Family      |
| `testimonial-05.jpg`   | Scott Whitman            |
| `testimonial-06.jpg`   | Amara Bello              |

## How it works

1. Drop a photo into this folder with the matching name (e.g. `home-hero.jpg`).
2. Save / the dev server reloads automatically.
3. The stock photo for that slot disappears — your photo takes its place.
4. Remove the file and the stock photo comes back as a fallback.

Only the slots you replace change. Everything else keeps the stock photos.

## Pre-sized copies (faster loading on phones)

The home page photos ship as several widths so each device downloads only
what it needs: `home-hero@800.webp`, `home-hero@1280.webp`, `home-hero@1920.webp`,
`home-portrait@480/960.webp`, `home-family@480/960.webp`. Name new copies
`<slot>@<width>.webp` and the page builds a responsive `srcset` from them.

Dropping in a plain file (e.g. `home-hero.jpg`) still works and overrides the
copies, but phones then download the full file. Resize it to at most ~1920px
wide (hero) or ~960px (other photos) and export at ~70% quality first.
