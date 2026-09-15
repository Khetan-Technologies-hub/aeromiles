# Handoff — Ticket #2

**Ticket:** #2 — [M2] App shell: transforming header, footer, brand tokens & motion primitives

## Summary
Built the global app shell that every page inherits via the root layout: a fixed **header** that is transparent over the hero and turns solid (blur + shadow + condensed padding) on scroll, with desktop nav, a "Get a Proposal" pill, and an accessible mobile hamburger drawer; a static navy **footer** (brand blurb, socials, quick links, contact, © year); and a **`Reveal`** motion primitive (Framer Motion, reveal-once, disabled under reduced motion) for later section tickets. Nav/contact/social data lives in one typed config (`src/lib/site.ts`). The layout also wires in Inter (body) + Sora (display) fonts, metadata/OpenGraph defaults, and a GA4 slot that only activates when `NEXT_PUBLIC_GA_ID` is set. All verified in-browser on desktop and mobile.

## Files changed
- `website/src/components/site-header.tsx` *(new)* — client component; scroll-transform, desktop nav + CTA, accessible mobile drawer (aria-expanded/controls, Esc to close, focus move + restore, body-scroll lock).
- `website/src/components/site-footer.tsx` *(new)* — server component; brand blurb, inline social SVG icons, quick links, contact, dynamic © year.
- `website/src/components/reveal.tsx` *(new)* — client; `whileInView` opacity+translateY, `viewport once`, `useReducedMotion` fallback.
- `website/src/components/analytics.tsx` *(new)* — GA4 via `next/script`; renders nothing unless `NEXT_PUBLIC_GA_ID` is set.
- `website/src/lib/site.ts` *(new)* — typed single source for `NAV_ITEMS`, `PRIMARY_CTA`, `CONTACT`, `SOCIALS`, `SITE`.
- `website/src/app/layout.tsx` — Inter + Sora fonts (as `--font-inter`/`--font-sora`); title template + OG metadata; renders `SiteHeader` / children / `SiteFooter` / `Analytics`.
- `website/src/app/globals.css` — `--font-sans`/`--font-display` theme tokens; `scroll-behavior: smooth` + `scroll-padding-top` for the fixed header; `prefers-reduced-motion` → `scroll-behavior: auto`.
- `website/public/emblem.png` *(new)* — brand emblem with the white background knocked out (transparent) so it reads on the dark header/footer.
- `website/package.json`, `website/package-lock.json` — added `framer-motion`.

## How to test
```bash
cd website
npm install
npm run lint && npm run typecheck && npm run build   # all clean; static out/
npm run dev                                          # http://localhost:3000
```
Then in the browser:
- **Header transform:** at the top it's transparent over the navy hero; scroll down → it becomes solid white, navy text, condensed, with a shadow.
- **Mobile drawer:** narrow the window (<1024px) → hamburger appears → click opens a drawer with stacked links + CTA; the icon becomes an ✕; `Esc` and link-click close it; focus moves into the drawer and back to the button.
- **Footer:** at the bottom on every route — brand, socials, quick links, contact (`hello@aeromiles.in`, India, "Start an inquiry →"), © current year.
- **Reduced motion:** enable "reduce motion" in the OS → `Reveal` renders content with no animation (no page yet uses it, so this is verified via the component logic).

## Acceptance criteria
- ✅ **Header transforms on scroll and is keyboard-operable; mobile drawer opens/closes accessibly** — verified in browser (desktop + 375px); drawer has aria-expanded/controls, Esc-to-close, focus management, scroll lock.
- ✅ **Footer matches the design and links resolve** — verified; links point to the (not-yet-built) routes and `mailto:`.
- ✅ **`Reveal` animates opacity/transform only, once, and is disabled under `prefers-reduced-motion`** — `reveal.tsx` uses `whileInView` + `viewport={{ once: true }}` + `useReducedMotion` early-return.
- ✅ **Header/footer render on all routes via the layout** — added to `app/layout.tsx`.

## Deviations / decisions
- **Fonts:** Inter (body) + Sora (display) chosen as a geometric pairing close to the design — swap later if exact brand fonts arrive.
- **Emblem asset edited:** the committed `Logo/Emblem.png` has a white background that boxed the logo on navy; I generated a transparent-background version into `website/public/emblem.png` (knocked out pure-white pixels only; logo colors untouched). A designer-supplied transparent PNG/SVG would be ideal long-term.
- **Social links are placeholders** (`href="#"`, real aria-labels) pending real accounts — PRD open item O8.
- **`Reveal` not yet placed on a page** — it's a primitive; first real use lands with the homepage sections (#5). Verified by code, not visually.

## Open questions / follow-ups
- Real **social media URLs** (O8) to replace the `#` placeholders.
- Confirm the **Inter/Sora** type choice, or provide exact brand fonts.
- A production **transparent-background emblem / SVG** and a real **favicon** (still the Next default) — natural to fold into a later polish/design pass.
