# Handoff — Ticket #1

**Ticket:** #1 — [M1] Scaffold Next.js + TypeScript + Tailwind + static export to Hostinger

## Summary
Stood up the project foundation: a Next.js 16 (App Router) + React 19 + TypeScript app with Tailwind CSS v4, configured for **static export** (`output: 'export'`) so `npm run build` emits a plain static site to `website/out/` for upload to Hostinger `public_html` — no SSR/API routes. Brand colours (navy, blue, saffron, green + backgrounds) are defined once as tokens in `globals.css` and exposed as Tailwind utilities via `@theme`; a branded placeholder home page renders using them. The whole app lives under **`website/`**, kept separate from project docs at the repo root. Lint, typecheck, and a static build all pass, and the output was smoke-tested locally (home 200, CSS asset 200, unknown route 404).

## Files changed

**App scaffold (`website/`)**
- `website/package.json` — app manifest; scripts `dev/build/start/lint/typecheck/format`; deps Next 16, React 19, Tailwind v4, Prettier.
- `website/package-lock.json` — locked dependency tree (generated).
- `website/next.config.ts` — **static export**: `output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true` (clean URLs on Apache).
- `website/tsconfig.json`, `website/eslint.config.mjs`, `website/postcss.config.mjs` — TS (strict), ESLint (next core-web-vitals + TS), Tailwind v4 PostCSS plugin.
- `website/.prettierrc.json`, `website/.prettierignore` — Prettier config + ignores.
- `website/AGENTS.md` — Next 16's auto-generated agent-rules note (kept; re-added by `next dev`).
- `website/.gitignore` — app build artifacts (`.next/`, `out/`, `node_modules`, `next-env.d.ts`, env files).

**App source**
- `website/src/app/layout.tsx` — root layout; Aeromiles `<title>`/description metadata; Geist fonts; explicit `{ children: ReactNode }` prop type.
- `website/src/app/globals.css` — brand tokens (`--color-navy/blue/saffron/green/...`) in `:root` + exposed via `@theme`; body font stack.
- `website/src/app/page.tsx` — branded placeholder home (navy bg, blue eyebrow, AEROMILES wordmark, tricolour gradient bar) using tokens.
- `website/src/app/favicon.ico` — default favicon (placeholder).
- `website/content/.gitkeep`, `website/src/components/.gitkeep`, `website/src/lib/.gitkeep`, `website/public/.gitkeep` — folder structure per `CLAUDE.md`.

**Project docs / root**
- `CLAUDE.md` — updated architecture (static export, `website/` layout, no API routes, brand-token paths).
- `README.md` — brand-tokens table, Development commands (`cd website`), Hostinger deploy steps, status → in development.
- `.gitignore` — trimmed to project-level (app has its own).

## How to test
```bash
cd website
npm install
npm run typecheck   # expect: no output / no errors
npm run lint        # expect: no output / no errors
npm run build       # expect: static export, "out/" generated, all routes ○ (Static)

# preview the production output:
npx serve out       # open the shown URL — placeholder should render
# or dev mode:
npm run dev         # http://localhost:3000
```
Expected: navy page with "ENGINEERED IN INDIA · BUILT FOR PRECISION", the AEROMILES wordmark, and a saffron→white→green bar. `website/out/index.html` exists after build.

## Acceptance criteria
- ✅ **`npm run build` produces a static `out/` with no type errors** — build emits `website/out/` with all routes prerendered; typecheck clean.
- ✅ **Tailwind brand tokens usable and documented** — tokens in `globals.css` via `@theme`; documented in `README.md`.
- ✅ **No secrets in the repo; `.env*` gitignored** — no env files committed; ignored in both `.gitignore`s.
- ✅ **Build+upload steps documented** — `README.md` "Deploy to Hostinger" + this handoff.
- ⏳ **Uploaded `out/` serves correctly on Hostinger** — **NOT met yet:** requires hPanel/FTP credentials (not available to the developer). Build + local serve verified as a proxy; live upload is a follow-up.

## Deviations / decisions
- **Scaffolded in a temp dir, then merged into the repo** — `create-next-app` refuses to run in a folder with existing files (our docs), so the app was generated separately and copied in; the tool's own `CLAUDE.md` stub and default `vercel.svg`/placeholder SVGs were discarded.
- **App relocated to `website/`** (post-scaffold, per follow-up request) — separates the app from project docs; all moves done with `git mv` (history preserved).
- **`LayoutProps<"/">` → explicit `{ children: ReactNode }`** — the Next 16 generated global type only exists after a build, which broke a standalone `tsc --noEmit`; explicit typing is build-order-independent.
- **Next 16 + Tailwind v4** — `create-next-app@latest` pulled these (newer than expected). Tailwind v4 has no `tailwind.config.js`; tokens live in CSS via `@theme`.
- **Geist font retained** for the placeholder; final typography (geometric sans per the design) is a later ticket (#2/#4).

## Open questions / follow-ups
- **Hostinger credentials** needed to complete the live-upload acceptance criterion (hPanel/FTP, via team password manager). Also confirm the plan type (shared vs VPS) and Node availability.
- **CI auto-deploy** intentionally out of scope for v1 (manual upload). Revisit if Hostinger Git deploy is available.
- `website/AGENTS.md` (and possibly a `CLAUDE.md` block) may be re-touched by `next dev` — expected/harmless.
