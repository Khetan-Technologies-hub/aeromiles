# Ticket: #39 — Build Homepage Audience Path Cards

## Summary
Implemented a responsive grid of audience path cards on the homepage to funnel visitors into Education, Defence, and Hobbyist sections. Each card now features a dynamic brand-accent bar (Saffron, Green, Blue) and a refined 'hover-lift' animation for better interactivity. The implementation includes accessibility enhancements such as `aria-labelledby` and keyboard-focusable elements.

## Files changed
### Components
- `website/src/components/audience-paths.tsx`: Updated card styling, added dynamic accent bars, implemented spring-based hover-lift animation, and improved accessibility.

## How to test
1. Run the app locally: `cd website && npm run dev`.
2. Navigate to the homepage.
3. Scroll to the 'One flight ecosystem' section.
4. **Verify Visuals:** Check that each of the three cards has a different colored top bar (Saffron, Green, Blue).
5. **Verify Interaction:** Hover over a card to ensure it lifts smoothly (scale + vertical shift) and the shadow deepens.
6. **Verify CTA:** Hover over the 'Learn More' link to see the arrow shift right and the arrow color match the brand accent.
7. **Verify Accessibility:** Tab through the cards to ensure they are focusable and use a screen reader to verify `aria-labelledby` titles.
8. **Verify Reduced Motion:** Enable 'Reduce Motion' in OS settings and verify the lift animation is disabled.

## Acceptance criteria
- [x] **Audience Card Grid:** Responsive 3-column desktop $\to$ 1-column mobile grid.
- [x] **Individual Card Components:** Visual header with brand accent, bold title, summary, and 'Learn More' CTA.
- [x] **Interactions:** Hover-lift (scale + shadow) and arrow shift implemented.
- [x] **Visual Fidelity:** Used brand tokens for accents.
- [x] **Responsive:** Verified mobile-first grid.
- [x] **Accessibility:** Added `aria-labelledby` and ensured contrast.
- [x] **A11y:** Honors `prefers-reduced-motion`.

## Deviations / decisions
- Changed the CTA text from 'Explore' to 'Learn More' as per the ticket scope.
- Replaced a static `bg-blue/10` background with `bg-white` and added a `ring-1 ring-line` to the icon container for a cleaner, more professional look.
- Used a `spring` transition for the hover-lift to give it a more premium 'precision flight' feel.

## Open questions / follow-ups
- Final custom SVGs are still needed to replace the `lucide-react` placeholders.
