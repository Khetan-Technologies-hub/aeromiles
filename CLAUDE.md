# CLAUDE.md — Aeromiles Marketing Website

> Read this before working any ticket. It captures the architecture and the rules that
> aren't obvious from the code alone. The authority on scope & decisions is **`docs/PRD.md`**.

## What this project is

A professional content/marketing website for **Aeromiles** — an Indian company that builds **RC planes and drones**, sets up **K–12 & college aeromodelling/STEM labs**, and delivers **drone capability for defence/government**. The site's job is to **generate qualified inquiries** and **establish credibility** across three equal audiences (schools/colleges, defence/government, hobbyists). It is inquiry-driven marketing — **not** e-commerce, no accounts, no LMS.

## Architecture

**Stack:** Astro (static-first) + Tailwind CSS + Astro Content Collections (Markdown/MDX) → deployed to **Netlify** with **Netlify Forms**. Analytics: GA4. Package manager: **npm**. See `docs/PRD.md` §4 for the full architecture, sitemap, and content-model diagrams.

**Data flow:** Content lives as typed Markdown/MDX in `src/content/` → Astro builds static HTML → served from Netlify's CDN. Form submissions POST to Netlify Forms → email notification + submissions dashboard. No runtime backend, no database.

**Expected layout** (once code lands — keep to this):
```
src/
  pages/        # routes: index, products, products/[slug], education, defence, about, contact
  layouts/      # BaseLayout (head, GA4, header, footer)
  components/   # reusable islands & sections (Hero, StatCounter, ProductCard, Nav, Footer…)
  content/      # Content Collections: products/, team/, labs/, defence/, testimonials/
  content/config.ts  # zod schemas — the source of truth for content shape
  styles/       # Tailwind entry + brand tokens
  assets/       # images/video processed by Astro's asset pipeline
public/         # static passthrough (favicon, robots.txt, poster fallback)
```

**Rules a developer must follow:**
- **Static-first.** Prefer zero-JS. Add an interactive island (`client:visible`/`client:idle`) only where motion/behaviour truly needs it. Never ship a heavy framework for a static section.
- **Content is data, not markup.** Products, team, labs, defence capabilities, testimonials come from Content Collections with zod schemas in `src/content/config.ts` — never hardcode this content into components.
- **Brand tokens, not magic values.** Navy `#0e2a4d`, blue `#1b8ee6`, saffron `#ff7a1a`, green `#1f9e4a`. Define once in the Tailwind theme / CSS variables; reference tokens everywhere.
- **Motion follows `Aeromiles_Animation_Spec.md`.** CSS + IntersectionObserver first; Swiper for carousels; CountUp for stats; GSAP only where CSS/IO genuinely can't. **Every animation needs a `prefers-reduced-motion` fallback**, animates only `opacity`/`transform` (no layout shift), and reveals **once**.
- **Defence section stays restrained** — subtle reveals only; no publishing of classified/export-controlled detail (general capability copy only).
- **Images optimized** (WebP/AVIF via Astro assets), lazy-loaded; hero video muted + `playsinline` + poster fallback, mobile-conscious.
- **Mobile-first & accessible.** WCAG 2.1 AA: semantic headings, alt text, keyboard-operable nav/carousels, visible focus. Verified from ~360px up.
- **SEO on every page:** unique `<title>` + meta description, Open Graph, plus `sitemap.xml` and `robots.txt`.
- **Placeholders are expected in v1.** Use sample data/styled placeholders where real content (photos, specs, bios, defence copy, footage) isn't delivered yet — keep it obviously swappable and note it in the handoff.

## Key rules

- **No secrets in the repo or in this file.** Form recipient email, GA4 measurement ID, and any API keys live in **environment variables / Netlify's dashboard**, referenced via `import.meta.env` — never committed. `.env` is gitignored.
- **Never publish classified or export-controlled defence content.** When a ticket's content is unclear on this, stop and ask.
- **No PII in URLs/query strings.** Forms POST; GA4 configured with appropriate consent handling.
- **Don't add e-commerce, auth/login, a CMS admin, i18n, or a blog** without a PRD change — they are explicit v1 non-goals.
- **Match the surrounding code** — component naming, structure, and Tailwind idioms. Prefer editing existing components over spawning near-duplicates.
- **If a ticket clashes with this file or `docs/PRD.md`, stop and ask** — don't guess.

## How we work (ticket workflow)

> Full playbook for managers and new joiners: **`docs/PROCESS.md`**.
- **Default branch is `main`.** Always `git checkout main && git pull` before starting a ticket so every `ticket-N` branch builds on the latest merged work. (`/start-ticket` handles this.)
- **Managers draft tickets** with **`/draft-ticket <what to build>`** — it interviews the manager on the decisions a developer would otherwise chase, then produces a ready-to-create issue. Optionally a Product Owner seeds intent first with **`/draft-brief <feature>`**.
- A developer opens a ticket with **`/start-ticket <#>`** — reads the ticket + this file + the spec, gives a plain-language walkthrough, offers Q&A (training mode), then **plans and confirms before writing any code.**
- When done, run **`/handoff <#>`** to write `handoffs/ticket-<#>.md` from the **real diff**, then open a PR (the PR template links the handoff).
- The manager reviews with **`/manager-review <PR#>`**.

## References

- **`docs/PRD.md`** — product spec, architecture, content model, decision log (authority).
- **`Aeromiles_Animation_Spec.md`** — motion catalog + per-section mapping + a11y/perf rules.
- **`Aeromiles_One_Page_Documentation.docx`** — original client brief.
- **`prototype/`** — parked WIP homepage; visual reference for the motion patterns only, **not** the production build.
- **`Logo/`** — brand assets (wordmark, emblem, lockups).
- Reference sites (motion inspiration): [aerobay.in](https://aerobay.in/), [vayumandalinnovations.com](https://www.vayumandalinnovations.com/).
- External systems: **Netlify** (hosting + Forms), **Google Analytics 4**, client-owned domain (likely `aeromiles.in` — to confirm).
