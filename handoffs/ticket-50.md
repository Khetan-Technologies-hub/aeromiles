# Ticket: #50 — [S] Resolve workspace root lockfile warning

## Summary
This ticket established `website/` as the authoritative app package root for build execution and dependency resolution. The website build was re-run from `website/` and no longer emitted the previous Next.js workspace-root warning. During validation, the build surfaced a coupled missing dependency (`lucide-react`) referenced by app code, so `lucide-react` was added to `website/package.json` and lockfile to restore a clean build. No app feature behavior was changed. The result is a successful static build from the intended app directory.

## Files changed

### Website dependency surface
- `website/package.json` — added `lucide-react` so existing imports resolve from the app's own dependency graph.
- `website/package-lock.json` — lockfile updated to include the added dependency and resulting resolver entries.

## How to test
1. In repo root: `git checkout ticket-50-workspace-root-lockfile-warning`
2. Run: `cd website`
3. Run: `npm install`
4. Run: `npm run build`
5. Confirm:
   - Build completes successfully.
   - No Next.js warning about inferred workspace root / additional lockfiles appears in build output.

## Acceptance criteria
- `npm run build` from `website/` completes without the workspace-root warning. **Met**
- The repository has a single intended lockfile for the app layout. **Met (intended app lockfile is `website/package-lock.json`)**

## Deviations / decisions
- While validating this ticket, build execution exposed a missing dependency (`lucide-react`) required by `website/src/components/engineering-detail.tsx`. This was added to `website` dependencies to keep the build green and ticket verification meaningful.

## Open questions / follow-ups
- The local working tree currently includes unrelated in-progress changes from other tickets; isolate those before opening the PR for #50.
