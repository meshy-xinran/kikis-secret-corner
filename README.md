# Kiki’s Secret Corner — public demo

A static, read-only memorial demo. The original editing project is separate and unchanged.

## Included

- Desk, globe close-up, and inside-the-globe scenes.
- 29 fixed flowers and the messages visible in the original Chrome demo.
- No form, new submissions, localStorage, backend, API credentials, or generation services.
- Comico / Switzer, ambient music loop, rain, hover interactions and camera transitions.

## Publish with GitHub Desktop (no build required)

1. Add this folder as a local repository in GitHub Desktop, or copy its contents into a new repository.
2. Commit and publish the repository. `node_modules` is ignored; do not upload it.
3. On GitHub: Settings → Pages → Deploy from a branch → main → /docs → Save.
4. GitHub will show the live URL once deployment completes.

The `docs` folder already contains the built website, including all assets and `.nojekyll`. Relative URLs support both a project URL and a custom domain. Do not upload a ZIP as the website; extract it first.

## Edit and rebuild

Use Node 22. Run `npm ci`, then `npm run dev` for development.
After editing, run `npm run build` and commit the updated `docs` folder.
The app uses no external API keys.

## Files

- `src`, `style.css`, `index.html`: editable website
- `src/demo-flowers.js`: the fixed demo message snapshot
- `public/assets`: only the assets used by these scenes
- `docs`: ready-to-publish site
- `ASSET-REPORT.md`: size and optimization notes
- `CREDITS.md`: asset credits and publication notes

## Scope

This is a desktop-first WebGL demo. Download size is reduced; the sculpture still retains its original triangle count, so lower-end/mobile GPUs may remain slower. Visitor messages cannot be submitted in this version.
