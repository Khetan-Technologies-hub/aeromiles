---
name: Feature brief
about: The Product Owner's intent for a feature / screen / milestone — the WHAT & WHY that seeds a ticket
title: "[Brief] <feature / screen / milestone>"
labels: ["brief"]
---

<!-- Authored by the Product Owner via /draft-brief. Lead with product — though technical steers are welcome
     (see below), since you may arrive with an engineering view. This brief is the YARDSTICK that
     /review-ticket holds the resulting ticket up to, so write what you actually mean. Never include secrets. -->

## 🎯 What we're building & why
<!-- The user's problem and the outcome you're after. Plain product language, not implementation. -->

## 👤 Who it's for
<!-- The user / role, and the situation they're in when they reach this. -->

## ✅ What it must do (capabilities)
<!-- The core things the feature has to let a user do, framed in user terms. Each should surface in the
     ticket's Scope / Acceptance Criteria — that's precisely what /review-ticket verifies. -->
-

## 🌟 What "good" looks like
<!-- Your bar for success — how you'll know "yes, that's the feature I asked for." -->

## 🚫 Non-negotiables
<!-- Hard lines the ticket MUST respect (product or technical). A Manager can't quietly override one —
     changing a non-negotiable comes back to you. -->
-

## 🧭 Technical steers (optional)
<!-- Got engineering suggestions up front? List them here, each tagged:
       [hard]       — a technical constraint the ticket must follow (a non-negotiable "how").
       [preference] — a strong default; a Manager may depart from it WITH a documented reason, which
                      /review-ticket surfaces for you to bless or veto.
     Leave this blank to hand the "how" entirely to your Manager. -->
-

## 🧊 Happy to defer
<!-- What you're content to skip for now — keeps the ticket from over-scoping and marks the edges for the Manager. -->
-

## 📎 References
<!-- Designs (attach, or note "provided by the PO"), the legacy app, PRD sections, competitors, examples. -->
-

---
**Next:** a Manager runs **`/read-brief <this issue number>`** to take this in and plan the build with Claude,
then **`/draft-ticket`** (which drafts against this brief and links back to it). You close the loop with
**`/review-ticket <ticket#>`**.
