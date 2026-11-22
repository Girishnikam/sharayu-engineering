# Sharayu Engineering — Website

Static, SEO-friendly company website for **Sharayu Engineering** (*Complete Fire Solution*), built with
React 19, React Router and Vite. Every route is prerendered to static HTML at build time, so search
engines and social previews see the full page content, titles, descriptions and structured data.

## Requirements

- Node.js **20.19+** or **22.12+** (CI uses Node 22)

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at http://localhost:5173 |
| `npm run lint` | Run ESLint |
| `npm run build` | Client build → SSR build → prerender all routes into `dist/` |
| `npm run preview` | Serve the production build from `dist/` |

## Project structure

```
src/
  content/        ← ALL page copy and company data (edit text here, not in components)
    site.js         brand, contact details, navigation, footer, SEO defaults
    home.js about.js services.js process.js industries.js
    clients.js association.js areas.js contact.js notFound.js
  routes/routeMeta.js  ← route list, breadcrumbs, SEO lookup, static paths
  App.jsx         ← maps route ids to page components
  pages/          ← one component per page (render content, no hardcoded copy)
  components/
    layout/       Header, Footer, Layout (head tags, scroll restoration)
    sections/     reusable page sections (service grid, process steps, …)
    ui/           primitives (Heading, IconCard, PageHero, Media, Icon, Logo, …)
  seo/            head-tag + JSON-LD builders shared by the browser and the prerenderer
  styles/         design tokens (brand colours, type scale) and global styles
  entry-client.jsx / entry-server.jsx
scripts/prerender.mjs  ← writes per-route HTML, 404.html, sitemap.xml, robots.txt
```

All company facts must come from [`docs/COMPANY_PROFILE.md`](../docs/COMPANY_PROFILE.md). Do not invent clients,
numbers, certifications or contact details.

## Common edits

- **Change text** — edit the matching file in `src/content/`.
- **Add a service** — add an entry to `services` in `src/content/services.js`. Its detail page, card,
  footer link, sitemap entry and structured data are generated automatically. Icons are
  [Lucide](https://lucide.dev/icons) names registered in `src/components/ui/Icon.jsx`.
- **Add a page** — add content in `src/content/`, a component in `src/pages/`, an entry in
  `src/routes/routeMeta.js`, its component in the `pages` map in `src/App.jsx`, and (optionally) a nav link in `site.js`.

## Images (logo, photos, client logos)

Put files in `public/images/` and reference them by path in the content files. Until a path is set, a
branded placeholder is shown, so the site never displays broken images.

| What | Where to set it |
|---|---|
| Logo | `site.brand.logoSrc` in `site.js` (e.g. `'images/logo.png'`) |
| Social share image (1200×630) | `site.seo.ogImage` in `site.js` |
| Home hero photo | `home.hero.image` in `home.js` |
| About photo | `about.image` in `about.js` |
| Service photos | `image` on each service in `services.js` |
| Client logos | `logo` on each client in `clients.js` — **only with the client's permission** |

Also replace `public/favicon.svg` with the official mark if desired.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys on every push to `master` that touches `portfolio/`.

1. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `master` (or run the workflow manually).

The workflow sets the base path automatically (`/sharayu-engineering/` on github.io, `/` on a custom
domain). Canonical URLs and the sitemap use `VITE_SITE_URL`; set a repository variable `SITE_URL`
(e.g. `https://www.example.com`) once the final domain is confirmed.
<!-- TODO: confirm with Sharayu — final domain. -->

To reproduce the GitHub Pages build locally:

```powershell
$env:BASE_PATH='/sharayu-engineering/'; npm run build; npm run preview
```

> Note: on a github.io project site, `robots.txt` is only honoured at the domain root; it takes full
> effect once a custom domain is configured. The sitemap can still be submitted in Google Search Console.
