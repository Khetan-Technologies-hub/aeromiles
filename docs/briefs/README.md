# Briefs

One Markdown brief per feature / screen / milestone, written by the **Product Owner** with **`/draft-brief`**
and committed next to the code. Each brief is also a GitHub issue (labelled **`brief`**) — that's where its
**number** and any discussion live.

- **Filename:** `B<issue-number>-<slug>.md` (e.g. `B24-login-screen.md`).
- **Purpose:** the Product Owner's intent — the **what & why** (plus any up-front technical steers) — that
  **seeds a ticket** and serves as the **yardstick `/review-ticket` measures against**.
- **Flow:** `/draft-brief` writes it → a Manager runs **`/read-brief <#>`** to take it in and settle a build
  plan → **`/draft-ticket`** drafts against it and stamps **`Brief: #<n>`** into the ticket → **`/review-ticket`**
  confirms the ticket delivers the brief.

A brief is **product intent, not implementation** — the technical "how" is the Manager's call during
`/read-brief` + `/draft-ticket`, inside the brief's non-negotiables.
