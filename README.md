# Aeromiles

Marketing / content website for **Aeromiles** — RC planes, drones, education & aeromodelling labs, and defence-related drone capability.

## Status

In development. Foundation scaffolded (Next.js static export → Hostinger). See GitHub issues for the ticket backlog.

## Contents

| Path | What it is |
|---|---|
| `Aeromiles_One_Page_Documentation.docx` | Original project brief (objectives, audiences, structure, requirements) |
| `Aeromiles_Animation_Spec.md` | Animation & interaction spec, benchmarked against reference sites |
| `Logo/` | Brand assets (wordmark, emblem, lockups) |
| `prototype/` | Parked WIP animated homepage prototype — reference only, not the final build |

## Reference sites (motion inspiration)

- [aerobay.in](https://aerobay.in/) — education / skill-lab polish
- [vayumandalinnovations.com](https://www.vayumandalinnovations.com/) — indigenous UAV / defence (closest business match)

## Stack

Next.js (App Router) + React + TypeScript + Tailwind CSS, **static export** (`output: 'export'`), deployed to the client's **Hostinger** hosting; contact form via **Web3Forms** (or a PHP+SMTP mailer). See `docs/PRD.md` for architecture and `Aeromiles_Animation_Spec.md` for the animation approach.

## Brand

Navy `#0e2a4d` · Bright blue `#1b8ee6` · Tricolour accents — saffron `#ff7a1a`, green `#1f9e4a`.

### Brand tokens (in code)

Defined once in `src/app/globals.css` and exposed as Tailwind utilities via `@theme` (Tailwind v4). **Reference these — never raw hex** (see `CLAUDE.md`):

| Token | Value | Example utility |
|---|---|---|
| `navy` / `navy-900` | `#0e2a4d` / `#081b34` | `bg-navy`, `text-navy` |
| `blue` / `blue-600` | `#1b8ee6` / `#1478c7` | `text-blue`, `bg-blue` |
| `saffron` | `#ff7a1a` | `text-saffron` (small accents only) |
| `green` | `#1f9e4a` | `text-green` (small accents only) |
| `ink` / `slate` / `line` | `#0c1830` / `#5a6b82` / `#e6ecf4` | text + hairlines |
| `bg` / `bg-soft` | `#ffffff` / `#f4f8fd` | section backgrounds |

## Development

```bash
npm install       # install dependencies
npm run dev        # local dev server (http://localhost:3000)
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run format     # Prettier
npm run build      # static export → out/
```

The app is a **static export** (`next.config.ts` → `output: 'export'`): `npm run build` writes a plain static site to `out/`. There is **no server** — no API routes, SSR, or middleware (Hostinger shared hosting can't run Node).

### Deploy to Hostinger

1. `npm run build` → produces `out/`.
2. Upload the **contents of `out/`** into `public_html` on Hostinger (hPanel → File Manager, or FTP). Replace existing files.
3. Ensure the domain points at the hosting and SSL is enabled (hPanel).

> The live-upload step for this scaffold is **pending Hostinger credentials** (hPanel/FTP, via the team password manager). The build + local serve are verified; see the ticket #1 handoff.
