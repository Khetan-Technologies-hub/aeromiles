# Handoff — Ticket #3

**Ticket:** #3 — [M3] Content engine: Markdown/MDX collections + zod schemas + loaders

## Summary
Built the content engine so site copy lives as data, not hardcoded markup. Content is Markdown files with typed frontmatter under `website/content/`, grouped into five collections (products, team, labs, defence, testimonials). `src/lib/content.ts` is a **server-only** module that reads each file, parses the frontmatter with gray-matter, and validates it with **zod at build time** — invalid frontmatter throws an error naming the file and the failing fields, which fails the build. Typed loaders (`getProducts` and category/featured/slug variants, `getTeam`, `getLabPrograms`, `getDefenceCapabilities`, `getTestimonials`) return fully-typed data (no `any`) with `slug` derived from the filename and items sorted by `order`. Sample placeholder content is provided for every collection (matching the homepage design), and `content/README.md` documents the fields for editors.

## Files changed
- `website/src/lib/content.ts` *(new)* — zod schemas + `loadCollection` helper + typed loaders. `import "server-only"` guards against client import. Throws a file-named error on invalid frontmatter.
- `website/content/README.md` *(new)* — per-collection frontmatter field reference for content editors.
- `website/content/products/{aerowing-x1,vector-quad,sentinel-vtol}.md` *(new)* — sample products (plane/drone/defence), matching the homepage.
- `website/content/team/{founder,co-founder}.md` *(new)* — placeholder founders.
- `website/content/labs/{k12-program,college-program}.md` *(new)* — sample lab programs.
- `website/content/defence/{isr-survey,quality-compliance,modular-payloads,lifecycle-support}.md` *(new)* — capability cards from the homepage.
- `website/content/testimonials/greenfield-school.md` *(new)* — sample testimonial.
- `website/content/.gitkeep` *(removed)* — no longer needed; the folder now has real content.
- `website/package.json`, `website/package-lock.json` — added `zod` and `gray-matter`.

## How to test
```bash
cd website
npm install
npm run lint && npm run typecheck && npm run build   # all clean
```
- **Loaders are consumed by pages from #4 onward** — there is no standalone page in this PR (the temporary `content-check` page used to verify was removed). To confirm the loaders directly, temporarily import one in a page or a script and log the result.
- **Failure path (the key AC):** create `website/content/products/_bad.md` with `category: planes` and `order: not-a-number`, run `npm run build`, and confirm it fails with:
  `Invalid frontmatter in content/products/_bad.md:` + the two field issues. Delete the file afterward.

## Acceptance criteria
- ✅ **Invalid frontmatter fails the build with a clear zod error** — verified with a bad file; error names `content/products/_bad.md` and each failing field (`content.ts:100-107`).
- ✅ **Loaders return typed data; no `any`** — types via `z.infer` (`content.ts:66-75`); `npm run typecheck` clean.
- ✅ **Sample content renders in a test page** — verified in-browser via a temporary `content-check` page (all five loaders listed correctly), then removed so nothing junk ships.
- ✅ **Content shape documented** — `content/README.md`.

## Deviations / decisions
- **Frontmatter-only (no body rendering).** Collections hold structured fields; the Markdown body under the frontmatter is not rendered yet (no page needs prose). If a collection later needs rich text, add a body-render step. Documented in `content/README.md`.
- **Images are optional data fields.** Sample content omits real image paths; actual product/team photos arrive later (PRD O7/O6). Pages will show styled placeholders.
- **Server-only.** `content.ts` uses the filesystem and is guarded with `import "server-only"` — import it in Server Components only, never client components.
- **Temporary verification page removed.** The `content-check` route existed only to verify and was deleted before this PR; the final build has only `/` and `/_not-found`.
- **Line-ending note:** unrelated #2 files showed no-op CRLF churn from tooling; those were kept out of this commit (only the 17 intended files are included).

## Open questions / follow-ups
- **Validation runs when a page consumes a loader** — from #4 onward every build re-validates all content. Until then there is no page exercising it (by design).
- Real content (copy, specs, photos, bios, defence copy) will replace the placeholders as delivered (PRD §7).
- Optional: add a `.gitattributes` (`* text=auto eol=lf`) to stop recurring CRLF churn on Windows.
