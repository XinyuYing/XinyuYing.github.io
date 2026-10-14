# FutureTech · SmartHome Max

Chinese concept product website. V5 follows one home through arrival, training, a six-person party and a change of destination to the terrace. The homepage uses photographic covers; visitors explicitly open the controllable 3D device demonstration.

## Run

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

React/TypeScript/Vite. Three.js is loaded only when a scene is opened. Sites uses the existing identity in `.openai/hosting.json`, with `dist/` as its static output. No backend, runtime secret, or paid API call is used by the website.

## Experience and source

- `App.tsx`: six sections, header, retained native modal and product/support details.
- `StoryChapter.tsx`: photographic cover, independent chapter start snapshot, confirmation, pause/resume, cancel, static steps, before/after comparison and restoration.
- `motion-model.ts`: authoritative physical state, rounded cart routes, in-place reroute turn, continuous restoration and derived status text.
- `HomeWorld.tsx`: one room specification and stable objects for all chapters. Real furniture translations, a recessed coffee table, extendable dining surface, folding chairs, food transfer, table-setting delivery and terrace roof/lights. The rendering illustrates mechanics rather than representing a manufactured product.
- `planner-model.ts`: chosen software capabilities and independent equipment conditions.
- `pricing-model.ts`: minimum covering tier: home ¥699, space ¥1,299, whole-home ¥1,999 per year. No capabilities means no paid recommendation. Ownership does not increase price.
- `HomePlanner.tsx`: two-step selection, immutable confirmed snapshot, editable model notes, downloadable plain text and selectable copy fallback. Optional `read_current_home_plan` WebMCP tool is strictly read-only.
- `tests/models.test.ts`: eight suites covering motion ordering, pause/cancel/restore, rerouting before and after arrival, reduced motion, capability-based tiers and matching exports.

Each chapter is independently addressable and begins at its declared daily-layout snapshot. It does not silently reset objects in another chapter. During a task, cancellation preserves positions; restoration and post-delivery terrace transfer are new continuous actions. Animation pauses when its frame leaves view, a modal opens, the page is hidden, or the visitor chooses static mode. System reduced-motion preference uses explicit steps.

## Facts, scope and media

The original FutureTech fictional case supplies the coordination-system capabilities. The user-supplied 32-shot storyboard adds the light-ring hub, modular furniture, floor recess, training display, dining expansion, kitchen arm, food cart and terrace devices. These are new concept specifications, not claims about already-built hardware.

Prices are annual software scenario assumptions. Hub, furniture, hardware, installation and space renovation are excluded; there is no complete-home hardware quotation or real purchase flow. Owned equipment is not automatically compatible. Declining a required device produces an unmet-condition warning without changing software price.

Six built-in imagegen assets and exact prompts are retained under the parent `assets/V5/` directory. Responsive JPEG derivatives are local. Main photographs depict the same room and product direction; they are illustrative covers, not frames of the 3D simulation. Minor prop counts in generated photography are not used to establish task continuity; the same three meal objects stay on the cart throughout the interactive route. There is no fake full-film button: the separate 60-second film and digital-presenter ending were not supplied as a finished playable artifact.

State stays in this page and resets on refresh. No contact details, payment, microphone, analytics or real-device connection are requested.

## Verification boundaries

Real browser checks covered 1440/768/390/320 widths, visible motion/static states, exact position preservation when rerouting, restoration after cancellation, minimum-tier changes, missing hardware, rendered plan text, download initiation and Escape focus return. Independent source review examined gripper returns, robot-chair clearance and the recess depth. Native file-save completion, OS-level reduced-motion emulation, throttled performance and formal accessibility certification are not claimed. Test and production build output are recorded in the parent evidence folder. V4's previous score does not apply to V5.

## Latest direction: short cinematic scene clips

The user removed the three imagined futures intro. The landing message is now “SmartHome Max，给你一个未来的家”. The unused triptych remains only in the parent source assets; it is not in the Site bundle.

`StoryMedia.tsx` and `story-clips.ts` provide a native, muted, inline, once-per-visit video layer with pause/replay, viewport and visibility pausing, system reduced-motion handling, and photograph fallback. All four sources are currently null: no film was generated, no video requests are made, and no fake playback controls appear. Playback branches are compiled but cannot yet be verified against finished media.

The connected Runway workspace is Free and reports no available video models. No purchase, generation, or synthetic placeholder MP4 was attempted. The user subsequently explicitly deferred video until their launch film is ready. Deferred follow-up: produce/review the four 2–3-second scene films, populate the manifest, validate actual browser playback, and publish the media update. See parent docs/16-microvideo-production-brief.md.
