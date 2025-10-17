# Phase 01 – Establish linting baseline (banner-hardening)

> **STOP:** Complete every task below, tick each checklist item, then stop and wait for verification before continuing.

## Goal
Ensure the project ships with a checked-in ESLint configuration and dependencies so `npm run lint` runs non-interactively in CI.

## Deliverables
- `.eslintrc.json` created at the repository root extending `next/core-web-vitals` with JSX extension support.
- `package.json` and `package-lock.json` updated to include `eslint` and `eslint-config-next` as `devDependencies`.

## Checklist (implementer)
- [x] Added the ESLint configuration file with the required rules.
- [x] Installed and locked the ESLint packages.
- [x] Ran `npm run lint` to confirm the command executes without interactive prompts.

## Self-verify
```bash
npm install
npm run lint
```

STOP. Wait for Phase 01 verification.
