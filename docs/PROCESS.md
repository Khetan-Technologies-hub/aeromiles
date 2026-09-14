# Team Process — How We Build with Claude Code

This is the operating manual for this project. It's written so **a new teammate can read it once and drive the entire pipeline.** The process lives **here and in the Khetan Tech Force Claude Code plugin — not in someone's head.** Install the plugin, clone the repo, and you've picked it up.

> **Just joined? Read this, then `docs/PRD.md` (the product) and `CLAUDE.md` (architecture).** That's your runway.

## Roles
Three tiers — each owns the tier beneath it and reports to the one above:
- **Product Owner** — owns the **what & why**. Lays the foundation (PRD + `CLAUDE.md`), frames each feature's intent as a **brief**, and checks drafted tickets against that intent. Holds the final call; leaves the technical reading to others.
- **Manager** (delivery lead / cofounder) — owns the **how**. Takes in a brief, chooses the technical approach, drafts the ticket, and reviews the finished PR.
- **Developer** — runs a ticket with Claude Code, writes a handoff, opens a PR.

*(A solo founder can wear all three hats — the roles track which hat you're wearing, not headcount.)*

## The pipeline — two gates
```
Product Owner:  /draft-prd → /draft-architecture → /draft-brief ─┐
                                                                 │  BRIEF #n
Manager:                        /read-brief #n → build plan → /draft-ticket ─┐
                                                                             │  TICKET (Brief: #n)
Product Owner:  ┌──────────────── /review-ticket ◀────────────────────────────┘   ← GATE 1: ticket vs brief
                │ sign off
Developer:      └─▶ /start-ticket → build → /handoff → PR ─┐
                                                           │
Manager:                       /manager-review ◀───────────┘   ← GATE 2: PR vs ticket  →  merge
```
Each gate holds an artifact up against the intent above it: **Gate 1** — does the *ticket* deliver the *brief*? **Gate 2** — does the *PR* deliver the *ticket*?

## 0. Foundation — once per project
- **`/setup-tickets`** — drops in the templates, folders, the `brief` label, and this doc.
- **`/draft-prd <idea>`** — interviews the Product Owner and writes `docs/PRD.md` (the product spec).
- **`/draft-architecture`** — converts the PRD + codebase into `CLAUDE.md` (the architecture + rules every dev's Claude loads automatically).

These anchor everything downstream — briefs, tickets, and every `/start-ticket` read them. **Do this first.**

## 1. Framing a feature — Product Owner
Run **`/draft-brief <feature>`**. Claude interviews you for the **what & why** — the user problem, the required capabilities, what "good" looks like, your **non-negotiables**, and any **technical steers** you already hold (tagged `[hard]` or `[preference]`). It records the brief as a GitHub issue (labelled `brief`) plus a committed `docs/briefs/B<#>-*.md`. That brief seeds the ticket and is the yardstick you'll review against.

## 2. Taking in the brief + planning — Manager
Run **`/read-brief <brief#>`**. Claude walks you deeply through the product so you *feel* what the Product Owner is after, fields your questions (training mode), then puts forward a **build plan** — the technical approach and how to slice it into ticket(s). You make the "how" calls here, inside the brief's non-negotiables.

## 3. Drafting the ticket — Manager
Run **`/draft-ticket`**. Claude drafts the technical ticket **against the brief**, interviews you on the developer-facing decisions (access, hosting, scope), stamps `Brief: #<n>`, and opens the issue.
- **Definition of Ready:** a junior developer can run it cold.
- **Keep the brief's non-negotiables** — don't quietly override one; send it back to the Product Owner.
- **Secrets stay out of tickets** — name *what* and *where*, never the value.

## 4. GATE 1 — Product Owner reviews the plan
Run **`/review-ticket <ticket#>`**. Claude measures the ticket against the brief — intent coverage, non-negotiables honored, silent scope changes, and the decisions carrying product risk — **in product language**. Sign off, or send it back with product-level asks. It doesn't grade code quality (that's Gate 2).

## 5. Executing — Developer
Run **`/start-ticket <issue#>`**. Claude reads the ticket (+ the linked brief for the *why*) + `CLAUDE.md` + PRD, gives a plain-language walkthrough, offers **training-mode Q&A**, proposes a plan for you to confirm, then builds on a `ticket-<#>-<slug>` branch.

## 6. Handing off — Developer
Run **`/handoff <issue#>`** — it writes `handoffs/ticket-<#>.md` from the **real git diff**. Open a PR; the template links the handoff.

## 7. GATE 2 — Manager reviews the code
Run **`/manager-review <PR#>`** — Claude weighs the diff + handoff against the ticket's acceptance criteria and pins risks at `file:line`. Run the app yourself. Approve or request changes, then merge.

## The bug loop
- **Tester:** **`/report-bug <what went wrong>`** files a clean, labelled issue (platform + severity + any screenshot). Touches no code.
- **Developer:** **`/fetch-bug <issue#>`** checks the report against the real code, explains the root cause, offers fix approaches, and implements the chosen one (no PR — the developer commits).

## Onboarding a new teammate (the entire point)
1. Install the plugin: `/plugin marketplace add Khetan-Technologies-hub/khetan-tech-force` then `/plugin install khetan-tech-force@khetan-technologies`.
2. Get repo access; `gh auth login`.
3. Read this file, `docs/PRD.md`, and `CLAUDE.md`.
4. You now hold the full pipeline — foundation through review. **Nothing is locked in a person; it's all in the plugin + the repo.**
