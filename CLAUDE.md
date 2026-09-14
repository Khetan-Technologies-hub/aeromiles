# CLAUDE.md — Aeromiles Marketing Website

> Read this before working any ticket. It captures the architecture and the rules that
> aren't obvious from the code alone. The authority on scope & decisions is **`docs/PRD.md`**.

## What this project is

A professional content/marketing website for **Aeromiles** — an Indian company that builds **RC planes and drones**, sets up **K–12 & college aeromodelling/STEM labs**, and delivers **drone capability for defence/government**. The site's job is to **generate qualified inquiries** and **establish credibility** across three equal audiences (schools/colleges, defence/government, hobbyists). It is inquiry-driven marketing — **not** e-commerce, no accounts, no LMS.

## Architecture

**Stack:** **Next.js (App Router) + React + TypeScript** + Tailwind CSS, content as **in-repo Markdown/MDX** (typed frontmatter) → deployed to **Vercel**; contact forms via a **Next.js Route Handler + Resend**. Analytics: GA4. Package manager: **npm**. See `docs/PRD.md` §4 for the full architecture, sitemap, and content-model diagrams.

**Data flow:** Content lives as typed Markdown/MDX under `content/` → statically generated at build (SSG) → served from Vercel's edge. Form submissions POST to `/api/contact` (Route Handler) → validated → emailed via Resend. No database.

**Expected layout** (App Router — once code lands, keep to this):
```
src/
  app/
    layout.tsx            # root layout (fonts, GA4, <head> metadata)
    page.tsx              # Home
    products/page.tsx     # listing + filter
    products/[slug]/page.tsx
    education/page.tsx
    defence/page.tsx
    about/page.tsx
    contact/page.tsx
    api/contact/route.ts  # form handler → Resend
    sitemap.ts, robots.ts # SEO
  components/             # React components/sections (Hero, StatCounter, ProductCard, Nav, Footer…)
  lib/                    # content loaders, schema (zod), utils
  styles/                # Tailwind entry + brand tokens
content/                 # Markdown/MDX: products/, team/, labs/, defence/, testimonials/
public/                  # static assets (favicon, robots poster, hero video, og images)
```

**Rules a developer must follow:**
- **Server Components by default.** Keep components server-rendered for SEO/perf; add `"use client"` only where interaction/motion needs it. Never make a whole page a client component to animate one section.
- **TypeScript strict, no `any`.** Type props, content, and API payloads. Content shape is validated with **zod** in `src/lib`.
- **Content is data, not markup.** Products, team, labs, defence capabilities, testimonials come from `content/` (parsed + zod-validated) — never hardcode this content into components.
- **Brand tokens, not magic values.** Navy `#0e2a4d`, blue `#1b8ee6`, saffron `#ff7a1a`, green `#1f9e4a`. Define once in the Tailwind theme / CSS variables; reference tokens everywhere.
- **Motion follows `Aeromiles_Animation_Spec.md`.** Framer Motion / IntersectionObserver for reveals; Swiper for carousels; CountUp for stats; GSAP only where those genuinely can't. **Every animation needs a `prefers-reduced-motion` fallback**, animates only `opacity`/`transform` (no layout shift), and reveals **once**. Motion lives in small client components, not whole pages.
- **Defence section stays restrained** — subtle reveals only; no publishing of classified/export-controlled detail (general capability copy only).
- **Images optimized** via `next/image` (WebP/AVIF), lazy-loaded; hero video muted + `playsinline` + poster fallback, mobile-conscious.
- **Mobile-first & accessible.** WCAG 2.1 AA: semantic headings, alt text, keyboard-operable nav/carousels, visible focus. Verified from ~360px up.
- **SEO on every page:** use the Next **Metadata API** for unique `<title>` + description + Open Graph; generate `sitemap.ts` and `robots.ts`.
- **Placeholders are expected in v1.** Use sample data/styled placeholders where real content (photos, specs, bios, defence copy, footage) isn't delivered yet — keep it obviously swappable and note it in the handoff.

## Key rules

- **No secrets in the repo or in this file.** Resend API key, form recipient email, and GA4 measurement ID live in **environment variables / Vercel's dashboard** (`process.env`, server-side only for secrets) — never committed. `.env.local` is gitignored.
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
- External systems: **Vercel** (hosting), **Resend** (transactional email for forms), **Google Analytics 4**, client-owned domain (likely `aeromiles.in` — to confirm).
