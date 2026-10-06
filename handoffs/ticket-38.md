# Handoff: Ticket #38 — Build Homepage Hero Section

## Summary
Implemented a high-impact Hero section for the homepage featuring a full-screen background video with a navy gradient overlay. Integrated staggered text reveals and mouse-tracking parallax for a premium feel. Added a subtle animated scroll cue to improve user navigation. Additionally, resolved a critical issue where the header logo disappeared on scroll and lacked contrast against dark backgrounds.

## Files Changed

### Hero Components
- `website/src/components/hero.tsx`: 
    - Updated overlay gradient to `bg-gradient-to-t` for better depth and legibility.
    - Updated CTA labels to "Explore Products" and "Request a Proposal".
    - Implemented animated "Scroll" indicator at the bottom of the section.

### Site Layout
- `website/src/components/site-header.tsx`:
    - Forced the use of `/logo.png` for both states to prevent logo disappearance on scroll.
    - Enhanced `drop-shadow` values for both states to ensure visibility against dark video backgrounds.

## How to Test
1. **Visual Check**: Load the homepage and verify the hero video plays automatically (muted).
2. **Motion Check**: Verify the headline, subheadline, and CTAs reveal in a staggered sequence. Move the mouse to see the subtle parallax drift.
3. **Scroll Interaction**: Scroll down and verify:
    - The "Scroll" indicator is visible at the bottom of the hero.
    - The header logo remains visible and transitions smoothly from `h-12` to `h-8`.
4. **Accessibility**: Enable `prefers-reduced-motion` in the browser/OS and verify the video pauses and parallax is disabled.
5. **Responsiveness**: Check the layout on mobile (360px) to ensure CTAs stack vertically and text is legible.

## Acceptance Criteria
- [x] **Video Background**: Muted, autoplay, loop, playsinline, and poster image fallback implemented.
- [x] **Overlay**: Navy gradient overlay ensures text readability.
- [x] **Animated Content Layer**: High-impact headline, subheadline, and two specific CTAs implemented with entrance animations.
- [x] **Responsiveness**: Mobile-optimized sizing and layout.
- [x] **A11y**: `prefers-reduced-motion` fallback handled.
- [x] **Interactions**: CTAs have clear hover/focus states.
- [x] **Structure**: Uses semantic `<section>` and `<h1>`.

## Deviations / Decisions
- **Logo Source**: Changed `/logo-condensed.png` to `/logo.png` in the header to resolve a bug where the logo disappeared during scroll.
- **Gradient Direction**: Adjusted gradient to `bg-gradient-to-t` (to top) to provide a stronger navy base at the bottom, which better supports the "Scroll" cue and overall visual depth.

## Open Questions / Follow-ups
- Verify if a specific "condensed" logo asset is required for the scrolled state; if so, the asset needs to be provided and updated.
