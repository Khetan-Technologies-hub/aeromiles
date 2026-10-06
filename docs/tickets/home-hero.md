# [M] Build Homepage Hero Section

## 📖 Story / Why
The Hero section is the "first impression" of the site. It needs to immediately convey "precision flight" and high-end engineering. By using a muted, autoplaying flight video with an animated headline, we establish instant credibility and emotional resonance with all three target audiences.

## 🧭 Context
- **Location:** `website/src/components/home/Hero.tsx` (or similar).
- **Styling:** Full-viewport height (`min-h-screen`), using the brand's Navy/Blue accents.
- **Media:** Background video with a high-quality poster image fallback for performance and accessibility.
- **Motion:** Text reveals (fade-in/slide-up) based on `Aeromiles_Animation_Spec.md`.
- **Deployment:** Verified locally via `npm run dev` before static export.

## 🔑 Access & prerequisites
- **Video Assets:** The developer must request the real flight footage from the Manager at `/start-ticket`. If not yet available, a high-quality placeholder must be used.
- **Poster Image:** A pre-optimized WebP/AVIF image for the video poster.
- **Design Assets:** The developer's Claude must request the Figma/mockup for the Hero typography and layout at `/start-ticket`.

## ✅ Scope / What to build
- [ ] **Video Background:**
    - Full-screen, muted, autoplay, loop, and `playsinline`.
    - Implementation of a poster image fallback to prevent "blank" screens during load.
    - Overlay: A Navy gradient overlay (bottom-to-top) to ensure text readability and visual depth.
- [ ] **Animated Content Layer:**
    - **Headline:** Bold, high-impact typography with an entrance animation.
    - **Subheadline:** Supporting copy that bridges the three audience paths.
    - **Primary CTAs:** Two prominent buttons: "Explore Products" and "Request a Proposal".
- [ ] **Responsiveness:**
    - Mobile-optimized text sizing (ensure headlines don't break awkwardly).
    - Handling video aspect ratios on portrait vs. landscape screens.

## 🎯 Acceptance Criteria
- [ ] **Visual Fidelity:** Exact match to provided Figma design for typography, spacing, and overlay opacity.
- [ ] **Performance:** Video is optimized; poster image displays instantly.
- [ ] **A11y:** `prefers-reduced-motion` fallback (static image instead of video).
- [ ] **Interactions:** CTAs have clear hover/focus states using brand tokens.
- [ ] **Structure:** Use semantic `<section>` and `<h1>` for the hero.

## 🖼️ UI standards
- **Design fidelity:** Reproduce provided design exactly. Ask PM for assets at `/start-ticket`.
- **Theming:** Content must be highly legible on the video background (use `--color-white` with proper contrast).
- **Responsiveness:** Full-screen reflow; text centered and legible on all device sizes.
- **Motion:** Follow `Aeromiles_Animation_Spec.md` for text reveals.

## 🚫 Out of scope
- The actual flight footage production (asset is provided).
- Implementation of the pages linked by the CTAs.

## 🔗 Dependencies
- Tailwind configuration for brand tokens.
- `framer-motion` for animations.

## 📚 References
- `docs/PRD.md` §5.2 (Home)
- `Aeromiles_Animation_Spec.md`

## 🤖 Kickoff prompt (paste into Claude Code)
```
/start-ticket <this-issue-number>
```
