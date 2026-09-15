# CLAUDE.md — Aeromiles Marketing Website

> Read this before working any ticket. It captures the architecture and the rules that
> aren't obvious from the code alone. The authority on scope & decisions is **`docs/PRD.md`**.

## What this project is

A professional content/marketing website for **Aeromiles** — an Indian company that builds **RC planes and drones**, sets up **K–12 & college aeromodelling/STEM labs**, and delivers **drone capability for defence/government**. The site's job is to **generate qualified inquiries** and **establish credibility** across three equal audiences (schools/colleges, defence/government, hobbyists). It is inquiry-driven marketing — **not** e-commerce, no accounts, no LMS.

## Architecture

**Stack:** **Next.js (App Router) + React + TypeScript** + Tailwind CSS, **static export** (`output: 'export'`), content as **in-repo Markdown/MDX** (typed frontmatter) → deployed to the client's **Hostinger** hosting (upload `out/` to `public_html`); contact form via **Web3Forms** (or a PHP+SMTP mailer). Analytics: GA4. Package manager: **npm**. See `docs/PRD.md` §4 for the full architecture and content-model diagrams.

**Repo shape:** the Next.js app lives in **`website/`** (run all `npm` commands there). Project docs stay at the repo root: `CLAUDE.md`, `docs/`, `Logo/`, `handoffs/`, `.github/`, `prototype/`.

**Data flow:** Content lives as typed Markdown/MDX under `website/content/` → statically generated at build into `website/out/` → uploaded to Hostinger `public_html` → served as plain static files. The contact form POSTs directly to Web3Forms (or a PHP mailer on Hostinger) → email. **No SSR, no Node server, no API routes, no database** — shared hosting can't run them.

**Expected layout** (App Router — once code lands, keep to this):
```
website/
  src/
    app/
      layout.tsx            # root layout (fonts, GA4, <head> metadata)
      globals.css           # Tailwind entry + brand tokens (@theme)
      page.tsx              # Home
      products/page.tsx     # listing + filter
      products/[slug]/page.tsx
      education/page.tsx
      defence/page.tsx
      about/page.tsx
      contact/page.tsx      # form → Web3Forms (NO api route — static export)
      sitemap.ts, robots.ts # SEO (emitted as static files)
    components/             # React components/sections (Hero, StatCounter, ProductCard, Nav, Footer…)
    lib/                    # content loaders, schema (zod), utils
  content/                 # Markdown/MDX: products/, team/, labs/, defence/, testimonials/
  public/                  # static assets (favicon, robots poster, hero video, og images)
```

**Rules a developer must follow:**
- **Static export — no server code.** The site builds with `output: 'export'`. Do **not** add API routes, Route Handlers, Server Actions, middleware, ISR, or any code that needs a running Node server — none of it works on the static host. Server Components are fine (they render at build); prefer them and add `"use client"` only where interaction/motion needs it.
- **TypeScript strict, no `any`.** Type props and content. Content shape is validated with **zod** in `website/src/lib`.
- **Content is data, not markup.** Products, team, labs, defence capabilities, testimonials come from `website/content/` (parsed + zod-validated) — never hardcode this content into components.
- **Brand tokens, not magic values.** Navy `#0e2a4d`, blue `#1b8ee6`, saffron `#ff7a1a`, green `#1f9e4a`. Define once in the Tailwind theme / CSS variables; reference tokens everywhere.
- **Motion follows `Aeromiles_Animation_Spec.md`.** Framer Motion / IntersectionObserver for reveals; Swiper for carousels; CountUp for stats; GSAP only where those genuinely can't. **Every animation needs a `prefers-reduced-motion` fallback**, animates only `opacity`/`transform` (no layout shift), and reveals **once**. Motion lives in small client components, not whole pages.
- **Defence section stays restrained** — subtle reveals only; no publishing of classified/export-controlled detail (general capability copy only).
- **Images:** `next/image` runs with `unoptimized: true` (no image server on static hosting) — so provide **pre-optimized WebP/AVIF** assets, sized correctly, lazy-loaded; hero video muted + `playsinline` + poster fallback, mobile-conscious.
- **Mobile-first & accessible.** WCAG 2.1 AA: semantic headings, alt text, keyboard-operable nav/carousels, visible focus. Verified from ~360px up.
- **SEO on every page:** use the Next **Metadata API** for unique `<title>` + description + Open Graph; `sitemap.ts` and `robots.ts` emit static files at export.
- **Placeholders are expected in v1.** Use sample data/styled placeholders where real content (photos, specs, bios, defence copy, footage) isn't delivered yet — keep it obviously swappable and note it in the handoff.

## Key rules

- **No secrets in the repo or in this file.** The Web3Forms **access key** is domain-restricted and public-safe (it may live in `NEXT_PUBLIC_*`). If a PHP+SMTP mailer is used instead, its SMTP credentials live in server-side PHP config on Hostinger, never in this repo. GA4 measurement ID is public. `website/.env.local` is gitignored.
- **Never publish classified or export-controlled defence content.** When a ticket's content is unclear on this, stop and ask.
- **No PII in URLs/query strings.** Forms POST; GA4 configured with appropriate consent handling.
- **Don't add e-commerce, auth/login, a CMS admin, i18n, or a blog** without a PRD change — they are explicit v1 non-goals.
- **Keep secrets server-side.** Only expose values via `NEXT_PUBLIC_*` when they're genuinely public (e.g. GA4 id); never the Resend key.
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
- External systems: **Hostinger** (client's hosting + domain — static upload to `public_html`), **Web3Forms** (or PHP+SMTP) for the contact form, **Google Analytics 4**. Domain likely `aeromiles.in` — to confirm.
