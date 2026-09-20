# Handoff — Ticket #21

**Ticket:** #21 — [M3.5] 3D foundation: React Three Fiber + reusable `<ModelViewer>` (lazy + fallback)

## Summary
Built the reusable 3D building block for the site's focused/hybrid 3D. `<ModelViewer src? fallback>` renders an interactive, rotatable 3D model **only** on capable devices (WebGL + motion allowed + non-phone viewport + multi-core) and shows a static image/video **fallback** everywhere else. The 3D engine (Three.js + React Three Fiber) is **dynamically imported (`ssr:false`)** so it's a separate chunk that never lands in first-load JS, and it only mounts once scrolled into view. A `use3dCapable` hook drives the gate fallback-first (starts `false` on the server → upgrades to 3D on capable clients), which is SSR-safe for the static export. The scene ships a brand-toned **procedural placeholder aircraft**; the real **GLB (+Draco)** path is wired for when models arrive (O11). This ticket builds only the component — the hero (#22) and product pages (#7) consume it.

## Files changed
- `website/src/lib/use-3d-capable.ts` *(new)* — client hook; returns true only when 3D is appropriate (WebGL test + `prefers-reduced-motion` + min-width + `hardwareConcurrency`). Fallback-first, listens for media-query changes.
- `website/src/components/model-viewer.tsx` *(new)* — public component; capability gate + IntersectionObserver in-view mount + `next/dynamic(ssr:false)` lazy-load; renders `fallback` otherwise. `role="img"` + `aria-label` when 3D is shown.
- `website/src/components/model-scene.tsx` *(new)* — the heavy, dynamically-imported scene: R3F `<Canvas>`, lights, drei `<OrbitControls>` (drag + slow auto-rotate, zoom optional), `<Center>`; loads GLB via drei `useGLTF(src, "/draco/")` or renders the procedural placeholder aircraft.
- `website/public/draco/**` *(new)* — Draco decoder (wasm + js) served locally, so compressed GLBs never depend on an external CDN. ~478 KB; unused until real GLBs land.
- `website/eslint.config.mjs` — ignore `public/**` (vendored decoder JS must not be linted; this was producing 18 spurious errors).
- `website/package.json`, `website/package-lock.json` — added `three`, `@react-three/fiber`, `@react-three/drei`.

## How to test
```bash
cd website
npm install
npm run lint && npm run typecheck && npm run build   # clean; static out/
npm run dev                                          # http://localhost:3000
```
There is no standalone page in this PR (the temporary `model-check` page used to verify was removed). To exercise `<ModelViewer>` directly, temporarily add a page that renders it, e.g.:
```tsx
<ModelViewer className="h-[460px] w-full"
  fallback={<div className="h-[460px] bg-navy" />} />
```
- **Desktop (WebGL + motion, ≥768px):** interactive placeholder aircraft — drag to rotate, auto-rotates. The 3D JS loads as a separate chunk (blank → model appears).
- **Mobile width (<768px) / reduced-motion / no-WebGL:** the static `fallback` renders; no Three.js is loaded.

## Acceptance criteria
- ✅ **`<ModelViewer src fallback>` renders an interactive rotatable model on desktop** — verified in-browser (procedural aircraft, OrbitControls drag + auto-rotate).
- ✅ **Falls back under reduced-motion / no-WebGL / narrow-mobile** — verified at 375px (fallback shown, 3D not loaded); same code path covers reduced-motion + missing WebGL.
- ✅ **Canvas lazy-loaded (not in first-paint JS); content never inside the canvas** — `next/dynamic(ssr:false)` + in-view mount; the component holds no page text.
- ✅ **No `any`; lint/typecheck/build clean; static `out/` produced** — ticket-21 files lint clean (fixed `public/` ignore); typecheck + build clean.
- ⏳ **Lighthouse ≥ 90** — designed for it (lazy + fallback-first, no first-load 3D). A formal Lighthouse run belongs to #13 once pages consume the viewer; not run in this env.

## Deviations / decisions
- **Procedural placeholder instead of a committed `.glb`.** The real GLB `src` path (`useGLTF` + local Draco) is wired but **not exercised** until real models arrive (O11) — generating a throwaway GLB in Node added no value over the procedural placeholder, which fully demonstrates interaction + fallback.
- **Draco decoders committed locally** (`public/draco/`, ~478 KB) rather than fetched from a CDN — keeps us off external hosts (CSP/offline). Dead weight until real GLBs use them.
- **Fallback-first pattern:** the server always renders the `fallback`; the browser upgrades to 3D if capable. Deliberate (SSR-safe, best perf) — expect a brief fallback flash before 3D appears even on desktop.
- **ESLint now ignores `public/`** — the copied decoder JS was producing 18 errors; static assets should never be linted.

## Open questions / follow-ups
- **Real GLB assets (O11)** — optimized/Draco-compressed drone + plane models to replace the placeholder; then verify the `src` path end-to-end.
- **Consumers:** #22 (hero) and #7 (product detail) drop `<ModelViewer>` in.
- **Pre-existing debt (not this ticket):** 2 lint warnings in #5 code (`stats.tsx`, `education-teaser.tsx` unused vars), and broader CRLF/prettier churn on merged files — worth a small cleanup pass and a `.gitattributes` (`* text=auto eol=lf`).
