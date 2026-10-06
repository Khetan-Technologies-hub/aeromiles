# [M] Build Homepage Stat Counters & Trust Marquee

## 📖 Story / Why
To build trust quickly, especially with government and institutional buyers, we need to showcase "proof of scale." Animated stat counters create a sense of momentum and growth, while a trust marquee (sliding logos of partners/clients) provides immediate third-party validation.

## 🧭 Context
- **Location:** `website/src/components/home/StatsSection.tsx` (or similar).
- **Styling:** A full-width Navy band (`--color-navy`) that contrasts sharply with the white/light sections above and below.
- **Motion:** 
    - **Stats:** Use `CountUp.js` (or similar) to animate numbers from 0 to the target value on scroll entry.
    - **Marquee:** A seamless, infinite horizontal loop of partner logos.
- **Deployment:** Verified locally via `npm run dev` before static export.

## 🔑 Access & prerequisites
- **Stats Data:** The developer must request the final numbers from the Manager at `/start-ticket`. If not yet available, they should use placeholders (e.g., "100+").
- **Partner Logos:** Request the set of partner/client SVGs from the Manager at `/start-ticket`. If not provided, use generic branded placeholders.
- **Design Assets:** The developer must request the Figma layout for the navy band and logo spacing at `/start-ticket`.

## ✅ Scope / What to build
- [ ] **Stat Counter Row:**
    - A responsive row of 3-4 key metrics.
    - Each metric: Large animated number + descriptive label (e.g., "Labs Established").
    - Trigger: Animation starts when the section enters the viewport (IntersectionObserver).
- [ ] **Trust Marquee:**
    - A seamless, infinite horizontal scroll of partner logos.
    - Logos should be grayscale by default, transitioning to brand colors on hover.
    - Motion: Slow, subtle linear drift.
- [ ] **Layout:**
    - Full-width Navy background.
    - Content centered with standard site margins.

## 🎯 Acceptance Criteria
- [ ] **Visual Fidelity:** Exact match to provided Figma design for typography and logo sizing.
- [ ] **Performance:** Marquee must be GPU-accelerated (use `transform: translateX`) to avoid jank.
- [ ] **Responsive:** Stat row wraps gracefully on mobile; marquee remains a single sliding line.
- [ ] **A11y:** 
    - `prefers-reduced-motion` fallback (numbers appear instantly, marquee is static or significantly slower).
    - High contrast text (`white/70` or similar) on Navy background.

## 🖼️ UI standards
- **Design fidelity:** Reproduce provided design exactly. Ask PM for assets at `/start-ticket`.
- **Theming:** Use `--color-navy` for the background and white/off-white for text.
- **Responsiveness:** Mobile-first; verified from 360px up.
- **Motion:** Smooth `linear` easing for the marquee; `ease-out` for the counters.

## 🚫 Out of scope
- Designing the partner logos (assets are provided).
- Creating a dedicated "Partners" page.

## 🔗 Dependencies
- `react-countup` or similar for the numbers.
- `framer-motion` for the marquee loop.

## 📚 References
- `docs/PRD.md` §5.2 (Home)
- `Aeromiles_Animation_Spec.md`

## 🤖 Kickoff prompt (paste into Claude Code)
```
/start-ticket <this-issue-number>
```
