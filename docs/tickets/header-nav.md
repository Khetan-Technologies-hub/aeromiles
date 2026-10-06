# [M] Implement Sticky Header & Mobile Navigation

## 📖 Story / Why
The header is the primary navigation hub for the site. To provide a premium, professional feel (consistent with reference sites like aerobay.in), the header needs to be visually dynamic—starting transparent over the hero and transitioning to a condensed, blurred state as the user scrolls. This ensures the brand remains visible while providing effortless access to key site sections across all devices.

## 🧭 Context
- **Location:** `website/src/components/` (should be a reusable `Header` or `Navbar` component).
- **Layout:** Integrated into `website/src/app/layout.tsx`.
- **Styling:** Uses Tailwind CSS and brand tokens (Navy `#0e2a4d`, Blue `#1b8ee6`).
- **Motion:** Scroll-based transitions (opacity, blur, height) using Framer Motion or standard CSS transitions.
- **Deployment:** Verified locally via `npm run dev` before static export.

## 🔑 Access & prerequisites
- **Design Assets:** The developer must request the Figma link/mockups from the Manager at `/start-ticket` to ensure an exact match.
- **Logo Assets:** The Manager will provide optimized SVGs specifically for the header (including condensed variants for scroll states) over a secure channel.
- **Tools:** Next.js dev environment configured.

## ✅ Scope / What to build
- [ ] **Sticky Header Component:**
    - **Initial State:** Transparent background, positioned absolute/fixed at the top of the page.
    - **Scroll State:** Transition to a fixed, semi-transparent background with `backdrop-blur`, a subtle shadow, and a condensed height.
- [ ] **Navigation Links:**
    - Links to: Home, Products, Education/Labs, Defence, About, Contact.
    - Hover states using brand-accent tokens.
- [ ] **Primary CTA:** A high-visibility "Get a Quote" button in the header.
- [ ] **Mobile Navigation (Hamburger Drawer):**
    - Responsive trigger (hamburger icon) appearing at mobile breakpoints.
    - Animated side-drawer (slide-in) for navigation.
    - Mobile-optimized navigation list with touch-friendly targets.
- [ ] **Logo Integration:** Responsive logo that switches to the condensed variant during the scroll transition.

## 🎯 Acceptance Criteria
- [ ] **Visual Fidelity:** Exact match to provided Figma/mockup design for spacing, typography, and color.
- [ ] **Scroll Transition:** Smooth transition from transparent $\to$ blurred/condensed state without layout shift.
- [ ] **Responsive:** Verified from 360px (mobile) up to desktop (with reflow).
- [ ] **Accessibility:** 
    - Keyboard-operable navigation (Tab order).
    - Accessible labels for the mobile menu trigger (`aria-label`, `aria-expanded`).
    - High color contrast for nav links (WCAG AA).
- [ ] **A11y:** Honor `prefers-reduced-motion` for the drawer animation and scroll transitions.

## 🖼️ UI standards
- **Design fidelity:** Reproduce the provided design exactly. Ask PM for assets at `/start-ticket`.
- **Theming:** Support both light and dark themes as defined in the brand kit.
- **Responsiveness:** Desktop reflow + mobile-first approach.
- **Layout:** Use edge-to-edge layout; ensure header does not obstruct critical content in the safe area.
- **Interactions:** Consistent hover/press/focus feedback.
- **Accessibility:** Minimum touch targets of 44px for mobile nav.

## 🚫 Out of scope
- Implementing the actual pages the header links to (those are separate tickets).
- Complex mega-menus.

## 🔗 Dependencies
- Brand tokens must be defined in `globals.css` / Tailwind theme.

## 📚 References
- `docs/PRD.md` §5.1 (Global)
- `CLAUDE.md` (Brand tokens)
- `Aeromiles_Animation_Spec.md`

## 🤖 Kickoff prompt (paste into Claude Code)
```
/start-ticket <this-issue-number>
```
