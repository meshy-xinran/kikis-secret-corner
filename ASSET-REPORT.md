# Asset optimization report

Original public assets: 428.1 MiB
Release public assets: 18.1 MiB
Built website: 19.1 MiB
Asset reduction: 95.8%

- Old point clouds, alternate statues/HDRIs, unused photos and audio excluded.
- Sculpture Draco compressed: 53.7 MiB → 6.6 MiB; 1,931,482 triangles retained (no decimation).
- Six prop models: embedded textures resized to at most 1024px, JPEG quality 88; geometry and transforms unchanged.
- Photo/background textures converted to WebP.
- HDR environment reduced to 1024px; HDR dynamic range retained.
- Hour-long music replaced with 116-second crossfaded loop at 128 kbps.
- Original source project and original assets preserved separately.

## Verification

Production build succeeds. Tested at a nested URL matching GitHub Pages project hosting: desk → close-up → inside; sculpture and props load, existing 29 messages display. No submission form or browser persistence remains.

## Largest published files

- assets/statue_cat_winged.glb: 6.62 MiB
- assets/sky/mossy_forest_1k.exr: 2.17 MiB
- assets/audio/kiki-theme-loop.mp3: 1.77 MiB
- assets/props/meshy-bed.glb: 1.43 MiB
- assets/props/meshy-yarn-ball.glb: 1.20 MiB
- assets/props/meshy-mouse-toy.glb: 0.99 MiB
- assets/globe-DVHFp_8Y.js: 0.67 MiB
- assets/props/meshy-water-bowl.glb: 0.62 MiB
- assets/props/meshy-fish-toy.glb: 0.55 MiB
- assets/props/meshy-cat-mug.glb: 0.55 MiB
