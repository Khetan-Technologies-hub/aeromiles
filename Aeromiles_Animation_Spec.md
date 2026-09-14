# Aeromiles — Animation & Interaction Specification

**Status:** Documentation / discovery — no build yet
**Date:** 2026-09-14
**Purpose:** Capture the motion & interaction language the client wants for the Aeromiles marketing site, benchmarked against two reference sites, and map it to Aeromiles' own sections and stack.

---

## 1. Reference sites

| Site | What it is | Why it's relevant |
|---|---|---|
| **aerobay.in** | Experiential STEAM / skill-lab education ecosystem for schools | The "polished, animated, conversion-focused" feel the client likes — orbiting logo, counters, carousels, marquees |
| **vayumandalinnovations.com** | Indigenous Indian UAV / drone manufacturer — defence, FPV, training, store | Closest match to Aeromiles' actual business (drones + defence + training + labs); clean Next.js motion, defence aesthetic |

**Takeaway:** Aeromiles sits at the intersection of both — the *education/lab* polish of AeroBay + the *defence/UAV* seriousness of Vayumandal. The motion language should feel **premium and animated, but credible** (not gimmicky), because defence/government buyers are an audience.

---

## 2. Motion catalog (observed across both references)

Each pattern below is something to replicate. Priority: **P1** = signature/expected, **P2** = strong nice-to-have, **P3** = optional polish.

| # | Pattern | Seen on | Behaviour | Priority |
|---|---|---|---|---|
| M1 | **Hero text reveal** | Both | Headline + subhead + CTA fade/slide up in a staggered sequence on load | P1 |
| M2 | **Orbiting / rotating emblem** | AeroBay (`logo-orbit.gif`, `sun.gif`) | Logo/mark with rings and dots rotating continuously around it | P1 |
| M3 | **Scroll-triggered reveals** | Both | Sections & cards fade/slide in as they enter the viewport (IntersectionObserver / AOS / GSAP ScrollTrigger) | P1 |
| M4 | **Animated number counters** | Both (23+ states, assets delivered, pilots trained) | Stats count up from 0 when scrolled into view | P1 |
| M5 | **Sticky / transforming header** | Both | Nav is transparent over hero, then gains background + blur + shadow and condenses on scroll | P1 |
| M6 | **Card hover lift / tilt** | Both | Product & feature cards raise, shadow-deepen, image zooms; some use 3D mouse tilt (Vanilla Tilt) | P1 |
| M7 | **Carousel / swipe gallery** | Both ("Swipe or use the arrows") | Lab offerings / army-camp images / products in a touch-enabled slider (Swiper.js) | P1 |
| M8 | **Marquee / logo strip** | Both (media presence, partners, credentials) | Continuously scrolling row of logos/labels, pauses on hover | P2 |
| M9 | **Parallax imagery** | Both | Background image moves slower than foreground on scroll; hero depth | P2 |
| M10 | **Hero background video** | AeroBay (video fallback tag) | Muted autoplay loop behind hero, with poster fallback | P2 |
| M11 | **Pointer parallax on hero visual** | (common) | Hero mark drifts slightly toward cursor | P3 |
| M12 | **Smooth anchor scroll** | Both | In-page nav links glide to sections | P1 (native CSS) |
| M13 | **Gradient / glow ambience** | Both | Soft animated colour glows drifting behind dark hero sections | P3 |
| M14 | **Scroll progress / cue** | (common) | "Scroll" indicator under hero; optional top progress bar | P3 |

---

## 3. Mapping to Aeromiles sections

From the Aeromiles brief (Home, Products, Education/Labs, Defence, About, Contact):

| Aeromiles section | Motion to apply |
|---|---|
| **Hero** | M1 hero reveal · M2 orbiting emblem (or M10 video) · M13 glow · M14 scroll cue · M5 transparent→solid header |
| **Audience paths** (Schools / Defence / Hobbyists) | M3 staggered reveal · M6 hover lift with brand-accent top-bar |
| **Impact stats** | M4 count-up on a dark navy band |
| **Featured products** (RC planes / drones) | M3 reveal · M6 card lift + image zoom · optionally M7 carousel |
| **Education / Labs** | M3 split-section reveal · checklist · floating lab visual |
| **Defence** | M3 reveal · M6 capability cards · restrained, technical grid background (credibility over flash) |
| **Trust / partners** | M8 marquee logo strip |
| **CTA band + Footer** | M3 reveal · hover states on links |

**Note on Defence:** keep motion minimal and serious here — subtle reveals only. Government/defence buyers read heavy animation as unserious.

---

## 4. Recommended animation stack

Aligned with the existing Aeromiles doc's recommended stack (**Astro + Tailwind CSS + Vercel/Netlify**):

| Need | Recommended | Why |
|---|---|---|
| Scroll reveals (M3) | **IntersectionObserver** (hand-rolled) or **AOS** | Zero/low JS, Astro-friendly, great Lighthouse |
| Count-up (M4) | **CountUp.js** or small custom | Tiny, triggered by IntersectionObserver |
| Carousel (M7) | **Swiper.js** | Industry standard, touch + arrows + a11y |
| Card tilt (M6, optional 3D) | **Vanilla-Tilt.js** | Matches AeroBay's tilt feel, dependency-light |
| Orbit/glow/marquee (M2/M8/M13) | **CSS keyframes** | No JS, cheap, smooth |
| Advanced timelines / parallax (M9) | **GSAP + ScrollTrigger** *(only if needed)* | Powerful but heavier — add only where CSS/IO can't deliver |

**Guidance:** Start CSS-first + IntersectionObserver; reach for Swiper where a real carousel is needed; only introduce GSAP if a specific sequence demands it. This keeps the **Lighthouse 90+ / WCAG 2.1 AA** targets from the brief realistic.

---

## 5. Performance & accessibility rules (must-haves)

- **`prefers-reduced-motion`:** every animation must have a reduced/none fallback. Users with the OS setting see content without motion.
- **No layout shift:** reveals use `opacity` + `transform` only (never animate height/top).
- **Lazy-load** heavy media; hero video muted, `playsinline`, poster fallback, and skipped on slow connections / mobile data if feasible.
- **Reveal once:** unobserve after first reveal so scrolling back up doesn't re-trigger.
- **Keyboard & focus:** carousels and nav remain fully operable without a mouse; focus states never removed.
- **Budget:** keep total JS for motion small; prefer CSS. Target interaction-ready hero on load.

---

## 6. Brand motion notes (Aeromiles)

- **Palette (from logo):** navy `#0e2a4d`, bright blue `#1b8ee6`, with **Indian tricolour accents** — saffron `#ff7a1a`, green `#1f9e4a`. The tricolour swoosh + circling plane in the emblem is a natural cue for the **orbiting hero animation (M2)** and for accent bars on cards.
- **Tone:** confident, engineered, Indian. Motion should feel like *precision flight* — smooth easing (`cubic-bezier(.16,.84,.44,1)`), no bouncy/cartoonish springs.

---

## 7. Open questions for the client

1. **Hero:** orbiting emblem animation, or a background **video** of planes/drones in flight? (Video needs footage.)
2. **Assets:** do we have real product photos / flight footage, or use styled placeholders until shot?
3. **Depth of motion:** "tasteful and fast" vs "maximal, animation-heavy like the references"?
4. **Defence section:** confirm how restrained the motion should be there.
5. **Stack confirmation:** proceed on Astro + Tailwind (per existing doc) for the eventual build?

---

*A working animated homepage prototype was started (in `/prototype`) before the "document only" direction — it's parked, not deleted, and can serve as a live reference for these patterns if wanted. Say the word to remove it or resume it.*
