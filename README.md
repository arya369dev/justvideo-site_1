# Just Video Broadcast — GitHub-ready static website

Six main pages plus Privacy Policy. Premium responsive design, accessible navigation, animations, searchable film-poster gallery, FAQ and JSON-LD.

## Preview locally

Run `python -m http.server 8000` in this directory and open `http://localhost:8000`. Do **not** double-click `index.html` for full gallery functionality: `portfolio.json` needs HTTP hosting.

## Publish to GitHub Pages

1. Create a public GitHub repository (for example `just-video-broadcast`).
2. Upload **all files and folders inside this package** to the repository root (including `assets/posters` and `portfolio.json`).
3. Open repository **Settings → Pages → Build and deployment → Deploy from a branch**; select `main` and `/ (root)`; save.
4. Wait for GitHub to provide the public URL. The site works at a repository subpath because links and assets use relative paths.
5. When a domain is confirmed, add the domain in Pages settings, set DNS, enable HTTPS, and update metadata, structured data, robots.txt and sitemap.xml with absolute URLs.

## Important before public launch

- Contact form currently opens an **email draft**; it does not submit to a server. Connect a form provider or backend before production.
- Confirm that `info@originpicturestudioz.com` is the intended public recipient; this address comes from the supplied PRD and may be outdated.
- Confirm phone numbers, studio addresses, service capabilities, current equipment inventory, company facts, and permission to publish poster images and client references.
- Poster gallery contains **only the images from the supplied ZIP**. A duplicate Shaukeen Kaminey file was deduplicated; no outside film titles were introduced. No film-specific service credit is asserted.
- The supplied portfolio posters may be copyrighted. Obtain appropriate publication rights.
- No invented domain or canonical URL has been set. Once live, add canonical, Open Graph absolute image URLs, a real sitemap and Search Console verification.
- SEO/AEO/GEO/LLMO features support discovery, but cannot guarantee search rankings or AI citations.
- Privacy text is a starting draft and needs legal review before launch.

## Structure

`index.html`, `camera-lens-rentals.html`, `post-production.html`, `studios-portfolio.html`, `about.html`, `contact.html`, `privacy.html`, `style.css`, `script.js`, `portfolio.js`, `portfolio.json`, `assets/`, `robots.txt`.

## Stack

Pure HTML, CSS and JavaScript. No build step, paid dependency, or framework required.

## Official brand assets and intro

- `assets/logo.png`: exact supplied Just Video logo.
- `assets/brand-intro.mp4`: original supplied 10-second video (not a generated replacement), played on the homepage with a Skip Intro button. Remove the intro overlay and `intro.js` reference from `index.html` if not wanted.
- `assets/posters/*.webp`: supplied movie posters optimized for the web.
- `portfolio.json`: poster filenames and movie titles, based only on the supplied ZIP.
- `portfolio.js`: clickable gallery and preview behavior.

Note: The intro is an uploaded video; confirm it is the intended final reveal animation before publishing.
