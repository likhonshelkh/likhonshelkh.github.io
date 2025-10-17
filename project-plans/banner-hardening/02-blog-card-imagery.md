# Phase 02 – Harden blog card imagery (banner-hardening)

> **STOP:** Complete every task below, tick each checklist item, then stop and wait for verification before continuing.

## Goal
Use the Next.js `<Image>` component for blog listing cards so remote assets render optimally with graceful fallbacks.

## Deliverables
- `pages/blog/index.jsx` updated to import `next/image`, render card imagery with `Image` using `fill`, gradient overlay, and an unoptimized flag for remote URLs.

## Checklist (implementer)
- [x] Replaced the `<img>` usage with `<Image>` and added the remote image guard.
- [x] Added a fallback gradient container when no featured image is available.
- [x] Ran `npm run lint` and `CI=1 npm run build` to confirm both succeed.

## Self-verify
```bash
npm run lint
CI=1 npm run build
```

STOP. Wait for Phase 02 verification.
