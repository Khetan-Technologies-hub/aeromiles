# [M] Build Homepage Teasers

## 📖 Story / Why
The homepage shouldn't just be a landing page; it should be a gateway. By creating high-impact "teaser" sections for Products, Education, Defence, and the Team, we give visitors a taste of the value in each area and create a clear psychological path toward the deeper pages of the site.

## 🧭 Context
- **Location:** `website/src/components/home/` (individual teaser components or one generic `SectionTeaser` component).
- **Styling:** Alternating backgrounds (White $\to$ Light Gray $\to$ White) to create visual rhythm.
- **Structure:** Each teaser consists of a visual side (image/video/icon) and a content side (heading, short blurb, CTA).
- **Motion:** Subtle reveal-on-scroll (fade-in/slide-up) for both image and text.
- **Deployment:** Verified locally via `npm run dev` before static export.

## 🔑 Access & prerequisites
- **Design Assets:** The developer's Claude must request the Figma layout for the teaser sections at `/start-ticket`.
- **Imagery:** The developer should use high-quality placeholders from a stock library and request final images/videos from the Manager at `/start-ticket`.
- **Copy:** Use placeholder copy from the PRD until final marketing copy is provided.

## ✅ Scope / What to build
- [ ] **Generic Teaser Component:**
    - A flexible layout that supports "Image Left / Text Right" or "Text Left / Image Right" configurations.
    - **Heading:** Bold, professional title.
    - **Body Text:** 2-3 sentences of persuasive copy.
    - **CTA Button:** A link that redirects to the full page.
- [ ] **Four Specific Teaser Instances:**
    - **Products:** Focus on diversity of fleet (Planes/Drones).
    - **Education:** Focus on STEM labs and capability building.
    - **Defence:** Focus on professional capability and government trust. **Note:** Must use a more minimal visual style and subtler animations than other teasers to maintain a "government-grade" tone.
    - **Team:** Focus on founder expertise and credibility.
- [ ] **CTA Variations:**
    - Standard teasers use "Explore [Section]".
    - Defence teaser uses a specific "Request Capability Statement" (or similar) CTA to signal a different inquiry type.
- [ ] **Responsiveness:**
    - Stacked layout on mobile (image always on top of text).
    - Adjusted spacing and typography for smaller screens.

## 🎯 Acceptance Criteria
- [ ] **Visual Fidelity:** Exact match to provided Figma design for alignment, spacing, and image aspect ratios.
- [ ] **Responsive:** Verified from 360px up to desktop.
- [ ] **Accessibility:** 
    - Semantic headings (`<h2>`).
    - Alt text for all teaser images.
    - Proper contrast for all text.
- [ ] **A11y:** Honor `prefers-reduced-motion` for reveal animations.
- [ ] **Tone Check:** Defence teaser is visibly more restrained than the Education/Products teasers.

## 🖼️ UI standards
- **Design fidelity:** Reproduce provided design exactly. Ask PM for assets at `/start-ticket`.
- **Theming:** Use brand-accent colors for the CTAs.
- **Responsiveness:** Mobile-first; image-on-top stack for mobile.
- **Motion:** Subtle reveal-once animations on scroll.

## 🚫 Out of scope
- Building the actual internal pages.
- Complex interactive elements within the teasers.

## 🔗 Dependencies
- `framer-motion` for reveals.
- Tailwind CSS for the layout.

## 📚 References
- `docs/PRD.md` §5.2 (Home)
- `Aeromiles_Animation_Spec.md`

## 🤖 Kickoff prompt (paste into Claude Code)
```
/start-ticket <this-issue-number>
```
