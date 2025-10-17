# Phase 01a – Verification of Establish linting baseline (banner-hardening)

## Verification Steps
1. Confirm the checklist in `project-plans/banner-hardening/01-lint-baseline.md` has every item marked `[x]`.
2. Assert the ESLint config exists and references `next/core-web-vitals`:
   ```bash
   test -f .eslintrc.json
   grep -F '"next/core-web-vitals"' .eslintrc.json
   ```
3. Ensure the new dev dependencies are present:
   ```bash
   grep -F '"eslint"' package.json
   grep -F '"eslint-config-next"' package.json
   ```
4. Install dependencies and run the lint command:
   ```bash
   npm install --no-audit --no-fund
   npm run lint
   ```
   The lint command must complete without prompting for configuration.

## Outcome
- If every check passes, report `✅ Phase 01 verified`.
- Otherwise list each failing step prefixed with `❌` and stop verification.
