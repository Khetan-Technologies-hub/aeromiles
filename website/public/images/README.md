# Image placeholders

Every `.webp` in this folder is a **generated placeholder**, not real content.
They exist so the site never renders a broken image while the client's photos
and hero footage are still outstanding (see CLAUDE.md — "Placeholders are
expected in v1").

To swap one in, drop the real asset over the file using the **same filename**
and the same aspect ratio — no code changes are needed:

| File | Used by | Aspect |
|------|---------|--------|
| `hero-poster.webp` | `hero.tsx` — poster behind the looping video | 16:9 |
| `placeholder-product.webp` | `featured-products.tsx`, `product-grid.tsx` — fallback when a product's `image` frontmatter is empty | 4:3 |
| `labs-teaser.webp` | `education-teaser.tsx` | 1:1 |
| `defence-teaser.webp` | `defence-teaser.tsx` | 16:9 |

Real assets must be pre-optimized WebP/AVIF and sized for the slot —
`next/image` runs with `unoptimized: true` on static export, so nothing is
resized at build time.
