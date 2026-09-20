# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Aeromiles
**Generated:** 2026-09-20 21:23:35
**Category:** B2B Service
**Design Dials:** Variance 4/10 (Balanced / Modern) | Motion 5/10 (Standard) | Density 4/10 (Standard)

---

## Global Rules

### Color Palette

> **Authority note:** the generated palette was replaced with the Aeromiles brand
> tokens from `CLAUDE.md` / `website/src/app/globals.css`. Those tokens win; the
> rest of this file (contrast, focus, motion, spacing rules) still applies.

| Role | Hex | CSS Variable | Notes |
|------|-----|--------------|-------|
| Primary (navy) | `#0e2a4d` | `--color-navy` | Headings, dark sections, secondary CTA |
| Navy deep | `#081b34` | `--color-navy-900` | Footer, stats band, defence band |
| Accent/CTA (blue) | `#1b8ee6` | `--color-blue` | Primary CTA, links, eyebrow text |
| CTA hover | `#1478c7` | `--color-blue-600` | Hover state for blue CTA |
| Saffron | `#ff7a1a` | `--color-saffron` | Tricolour accent — **decorative only** |
| Green | `#1f9e4a` | `--color-green` | Tricolour accent — **decorative only** |
| Foreground (ink) | `#0c1830` | `--color-ink` | Body text on light |
| Muted foreground | `#5a6b82` | `--color-slate` | Secondary text (4.9:1 on white — OK) |
| Border | `#e6ecf4` | `--color-line` | Hairlines |
| Background | `#ffffff` | `--color-bg` | Page background |
| Muted background | `#f4f8fd` | `--color-bg-soft` | Alternating section background |

**Contrast constraints derived from these tokens**

- `--color-saffron` (#ff7a1a) is **2.5:1 on white** and `--color-green` (#1f9e4a) is
  **3.4:1 on white** — neither may be used as text colour on a light background.
  Use them as fills, bars and dots only; put category/badge text in navy or on a
  dark chip.
- `--color-blue` (#1b8ee6) is **2.9:1 on white** — fine for large display text and
  for white-on-blue buttons, **not** for small body links on white. Small links on
  light use `--color-blue-600` or navy.
- On navy/navy-900, the minimum body text is `white/70`; `white/50` and below fail
  4.5:1 and is reserved for non-essential decoration only.
- Focus ring token: `--color-blue` on light, `#ffffff` on dark, 2px + 2px offset.

### Typography

Brand fonts already wired via `next/font` in `website/src/app/layout.tsx` — keep them:

- **Display/headings:** Sora (`--font-display`) — 600/700/800
- **Body/UI:** Inter (`--font-sans`) — 400/500/600/700
- **Base size:** 16px, body line-height 1.5, measure capped at ~65ch

*(The generator suggested Plus Jakarta Sans; rejected — Sora/Inter is the shipped
brand pairing and matches the same "enterprise, professional, legible" mood.)*

### Spacing Variables

*Density: 4/10 — Standard*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

> **These are the patterns actually shipped in `website/src/components`**, written
> as the Tailwind classes the code uses — not generic CSS. The generator's
> original blocks here used its own palette (`#0369A1`, `#0F172A`, `#F8FAFC`) and
> were replaced; copying those would have put non-brand colours into a new page.
> Match these, and prefer editing an existing component over adding a near-duplicate.

### Buttons

Every button is a pill (`rounded-full`), `font-bold`, and at least 44px tall
(`min-h-12` for CTAs, `min-h-11` for controls). Transition colour and transform
only — never `transition-all`.

```
/* Primary CTA — on light or over the hero video */
inline-flex min-h-12 items-center justify-center rounded-full bg-blue px-10 py-4
font-bold text-white transition-colors hover:bg-blue-600 active:scale-95

/* Secondary on a light surface */
inline-flex min-h-12 items-center rounded-full bg-navy px-8 py-4 font-bold
text-white transition-colors hover:bg-navy-900 active:scale-95

/* Secondary on navy / over media — needs the light focus ring */
focus-ring-light inline-flex min-h-12 items-center rounded-full border
border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md
transition-colors hover:bg-white/20 active:scale-95

/* Filter / toggle pill — carries aria-pressed */
inline-flex min-h-11 items-center rounded-full border px-6 text-sm font-bold
transition-colors
  active:  bg-blue text-white border-blue
  idle:    bg-white text-slate border-line hover:border-blue/50 hover:text-navy
```

### Cards

```
group block h-full overflow-hidden rounded-3xl border border-line bg-white
transition-shadow hover:shadow-xl        /* content padding: p-8 */
```

- Radius is `rounded-3xl`; `rounded-2xl` only for media panels inside a section.
- Hover lift is a Framer `whileHover={{ y: -8 }}`, **gated on `useReducedMotion()`**.
- When the whole card is a link, don't repeat the title in an `sr-only` — the
  link's accessible name already contains it.
- A card's arrow affordance moves with `group-hover:translate-x-1`, never by
  animating `gap` (that is a layout animation).

### Inputs — not built yet (contact form, `/contact`)

No input exists in the codebase; this is the forward spec so the first one
matches the system.

```
min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base
text-ink transition-colors placeholder:text-slate
focus-visible:  (inherits the global 2px blue outline — do not set outline-none)
error:          border-red-600, plus aria-invalid="true" and aria-describedby
```

- **`text-base` (16px) is mandatory** — anything smaller makes iOS Safari zoom
  the page on focus.
- **Visible `<label>` above every field.** A placeholder is not a label.
- Errors render **next to the field**, not only in a summary at the top, and are
  associated via `aria-describedby`. On submit, move focus to the first invalid
  field.
- The form POSTs to Web3Forms — no PII in query strings (see CLAUDE.md).

### Overlays

There is **no modal** in this site and none is planned; the only overlay is the
header's mobile drawer (`site-header.tsx`), which already locks body scroll,
closes on Escape, moves focus to the first link and restores focus to the
toggle on close. Reuse that pattern rather than introducing a dialog.

---

## Style Guidelines

**Style:** Accessible & Ethical

**Keywords:** Accessible, inclusive interface, high contrast, large text (16px+), keyboard navigation, screen reader friendly, accessibility standards aware, focus state, semantic

**Best For:** Government, healthcare, education, inclusive products, large audience, legal compliance, public

**Key Effects:** Clear focus rings (3-4px), ARIA labels, skip links, responsive design, reduced motion, 44x44px touch targets

### Page Pattern

**Pattern Name:** Trust & Authority + Conversion

- **Conversion Strategy:** Credibility first, then a low-friction inquiry. Case
  studies, institution names, capability stats. *(The generator also listed
  transparent pricing, security badges and a logo carousel — none apply: this
  site has no pricing and no carousel. If one is ever added, it needs
  pause/stop, keyboard prev/next, and a static set under reduced motion.)*
- **CTA Placement:** Contact Sales / Get Quote (primary) + Nav
- **Section Order:** Hero (mission/credibility) > Proof (logos, certs, stats) > Solution overview > Clear CTA path

---

## Motion

> The generator emitted a GSAP stagger snippet here. **GSAP is not a dependency
> of this project** and `CLAUDE.md` puts it last — Framer Motion and
> IntersectionObserver first, GSAP only where those genuinely can't. Replaced
> with the shipped pattern; the underlying advice (stagger ~60ms, skip motion
> under `prefers-reduced-motion`) is preserved.

**Scroll reveal + stagger — use the `<Reveal>` component, don't re-implement it.**

```tsx
{items.map((item, idx) => (
  <Reveal key={item.id} delay={idx * 0.1}>   {/* 0.05 for dense grids */}
    …
  </Reveal>
))}
```

`Reveal` (`website/src/components/reveal.tsx`) fades + slides 24px once on
entry, 600ms, `cubic-bezier(0.16, 0.84, 0.44, 1)`. It renders children
unanimated under reduced motion, and — importantly — renders them **revealed**
when the page loads already scrolled past them, which a naive `whileInView`
does not.

**Rules for any motion beyond `Reveal`:**

- `opacity` and `transform` only. Never animate `width`, `height`, `gap` or
  anything else that triggers layout.
- Gate every hover lift, image zoom, layout animation and counter on
  `useReducedMotion()`. `globals.css` has a CSS backstop, but it does not
  reach Framer's JS-driven animations.
- Reveal **once** (`viewport={{ once: true }}`), never on every scroll past.
- 1–2 animated elements per view. Duration 200–300ms for hover/state, ~600ms
  for entrances; exits faster than entrances.
- Keep motion in small client components — don't make a whole page
  `"use client"` for one animation.

---

## Anti-Patterns (Do NOT Use)

- ❌ Playful design
- ❌ Hidden credentials
- ❌ AI purple/pink gradients

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
