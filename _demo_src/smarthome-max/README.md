# FutureTech case B demo

Public URL: https://www.yrtan.com/cases/FutureTech/demo/
The Demo button beside FutureTech (B) is configured in `_pages/cases.md` and `_pages/en/cases.md`.

## Rebuild

From the personal website repository root, run:

```sh
node tools/build-futuretech-demo.mjs
```

The script installs the locked dependencies in a temporary workspace, runs the tests and production build, and replaces `cases/FutureTech/demo/` after a successful build. Commit the source and generated files, then push through the existing website deployment workflow. Jekyll excludes `_demo_src/`; only the generated public folder is served.

## Current website

- Homepage: retained hero image, the approved 39.83-second film, and three annual software configurations (CNY 4,999 / 9,999 / 19,999).
- Six independent scene pages and a separate pricing page. Scene clips loop while visible; original audio plays on request.
- `src/site-paths.ts` and the Vite base setting keep navigation and media inside `/cases/FutureTech/demo/`. Static entry points permit direct visits and refreshes.
- Edit `App.tsx`, `scene-content.ts`, `LaunchFilm.tsx`, `story-clips.ts`, `pricing-model.ts`, and local media under `public/` for the current screens. Older motion/planner modules are retained in the snapshot for reference.

Website files and media are local to yrtan.com. The deployed app does not depend on the original ChatGPT hosting URL or an external AI API.
