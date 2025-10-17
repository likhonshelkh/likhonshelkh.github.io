# Plan: Adopt Kibo UI code blocks for MDX content

## Context
The blog currently relies on `rehype-prism-plus` for syntax highlighting, which renders static markup and limits richer interactions. We want to adopt the interactive Kibo UI code block experience requested by the product team.

## Tasks
1. Scaffold the Kibo UI code block package (`npx kibo-ui add code-block`), add missing project aliases, and commit the generated primitives (`components.json`, `tsconfig.json`, `lib/utils.js`).
2. Build an MDX wrapper that maps fenced code blocks to the new Kibo UI primitives, including filename parsing, copy-to-clipboard, and graceful fallback when Shiki highlighting is disabled.
3. Remove the old `rehype-prism-plus` dependency and ensure the MDX pipeline compiles without it, relying on the new component for highlighting instead.
4. Document the integration approach here and exercise at least one sample post to guarantee Bangla content renders alongside the new block.

## Verification
- `npm run lint`
- `CI=1 npm run build`
