# Kiki’s Secret Corner — public demo

A static memorial website with Supabase-backed visitor offerings. The original editing project is separate and unchanged.

## Included

- Desk, globe close-up, and inside-the-globe scenes.
- 29 original messages imported into the database during setup.
- Visitors can write a name/message and leave a bouquet, including snow and flower-growth animations. New offerings are saved to Supabase and loaded on subsequent visits.
- A public Supabase key connects the guestbook; localStorage holds only an anonymous browser identifier.
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
The app uses a Supabase publishable key; no privileged credentials are included.

## Files

- `src`, `style.css`, `index.html`: editable website
- `src/demo-flowers.js`: the original message snapshot shown while loading
- `public/assets`: only the assets used by these scenes
- `docs`: ready-to-publish site
- `ASSET-REPORT.md`: size and optimization notes
- `CREDITS.md`: asset credits and publication notes

## Scope

This is a desktop-first WebGL demo. Download size is reduced; the sculpture still retains its original triangle count, so lower-end/mobile GPUs may remain slower. The scene loads the latest 200 saved messages.

## Persistent guestbook

Run `supabase/setup.sql` once in the project SQL Editor before deploying this build. It creates the table and restricted RPC, enables RLS, and imports the original 29 demo messages. All messages are immediately public. Visitors can read only public fields and submit through the validated function; they cannot directly insert, edit, or delete records.

Manage messages in Supabase Table Editor → kiki_messages. Deletions appear after a page reload. The scene loads the latest 200 messages; older messages remain in the database. New submissions are confirmed by the server before the growth animation. A request ID protects against duplicate retries. The 30-second cooldown is per browser identifier and is only a lightweight deterrent; determined spam needs a server-verified CAPTCHA/rate limiter. No database password or secret/service-role key is included.

Database setup verified: original 29 messages readable, private fields protected, empty input rejected, duplicate retry returns the existing record, and visitor edits/deletes denied. A new-message browser submission should be checked after deployment.
