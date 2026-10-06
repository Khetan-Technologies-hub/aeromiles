# [M] Build Homepage Audience Path Cards

## 📖 Story / Why
The site serves three distinct audiences: Schools/Colleges, Defence/Government, and Hobbyists. These cards act as a "choose your own adventure" entry point, immediately signaling to the visitor that Aeromiles has a specific, professional offering for their particular needs.

## 🧭 Context
- **Location:** `website/src/components/home/AudienceCards.tsx` (or similar).
- **Styling:** A three-column grid on desktop, stacked on mobile.
- **Visuals:** Each card should have a distinct brand-accent bar (Saffron for Education, Green for Defence, Blue for Hobbyists) to differentiate the paths.
- **Interactions:** "Hover-lift" effect (subtle scale up and shadow increase) to indicate interactivity.
- **Deployment:** Verified locally via `npm run dev` before static export.

## 🔑 Access & prerequisites
- **Design Assets:** The developer's Claude must request the Figma mockup for the card layout and icons at `/start-ticket`.
- **Icons:** The developer should start with `lucide-react` as placeholders and request final custom SVGs from the Manager at `/start-ticket`.
- **Tools:** Next.js dev environment configured.

## ✅ Scope / What to build
- [ ] **Audience Card Grid:**
    - A responsive grid containing three cards: **Education & Labs**, **Defence & Govt**, and **Hobbyists**.
- [ ] **Individual Card Components:**
    - **Visual Header:** A thick brand-accent bar at the top and a representative icon.
    - **Title:** Clear, bold heading for the audience.
    - **Summary:** A short, persuasive value proposition for that segment.
    - **CTA:** A "Learn More" text link with an animated arrow (shifts right on hover) that redirects to the respective page.
- [ ] **Interactions:**
    - Implement the "Hover-lift" animation (subtle scale up + shadow increase) using Framer Motion or Tailwind transitions.
    - Smooth transition of the accent bar on hover.

## 🎯 Acceptance Criteria
- [ ] **Visual Fidelity:** Exact match to provided Figma design for spacing, radius, and accent bar placement.
- [ ] **Responsive:** 3-column grid (desktop) $\to$ 1-column stack (mobile).
- [ ] **Accessibility:** 
    - Cards must be keyboard-focusable.
    - Proper `aria-labelledby` for each card.
    - Text contrast passes WCAG AA.
- [ ] **A11y:** Honor `prefers-reduced-motion` for the lift animation.

## 🖼️ UI standards
- **Design fidelity:** Reproduce provided design exactly. Ask PM for assets at `/start-ticket`.
- **Theming:** Use design-system tokens for the accent bars (Saffron, Green, Blue).
- **Responsiveness:** Mobile-first; verified from 360px up.
- **Interactions:** Subtle scale/shadow transition; no layout shift.

## 🚫 Out of scope
- Creating the destination pages.
- Complex internal animations beyond the lift and arrow shift.

## 🔗 Dependencies
- Tailwind brand tokens.
- `lucide-react` for initial placeholders.

## 📚 References
- `docs/PRD.md` §5.2 (Home)
- `CLAUDE.md` (Brand tokens)

## 🤖 Kickoff prompt (paste into Claude Code)
```
/start-ticket <this-issue-number>
```
