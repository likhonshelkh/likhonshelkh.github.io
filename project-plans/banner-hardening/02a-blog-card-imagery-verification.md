# Phase 02a – Verification of Harden blog card imagery (banner-hardening)

## Verification Steps
1. Ensure every checklist item in `project-plans/banner-hardening/02-blog-card-imagery.md` is marked `[x]`.
2. Confirm the blog index imports `next/image` and no longer references raw `<img>` tags:
   ```bash
   grep -F "import Image from 'next/image'" pages/blog/index.jsx
   ! grep -F '<img' pages/blog/index.jsx
   ```
3. Verify the gradient fallback and unoptimized flag exist:
   ```bash
   grep -F 'unoptimized={' pages/blog/index.jsx
   grep -F 'bg-gradient-to-br' pages/blog/index.jsx
   ```
4. Run the project checks:
   ```bash
   npm run lint
   CI=1 npm run build
   ```

## Outcome
- Emit `✅ Phase 02 verified` when all steps pass.
- Otherwise output `❌` lines describing each failure and halt verification.
