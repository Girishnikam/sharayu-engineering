# CLAUDE.md — Project context for AI assistants

## What this project is
Digital presence / software for **Sharayu Engineering** — a fire protection & life safety company
(tagline **"Complete Fire Solution"**, promise **Design • Supply • Execute • Maintain**), based in
Maharashtra, India, operating in association with **Vishwaraaj Industrial Projects** (a Government of
Maharashtra licensed fire prevention & life safety agency).

The full company profile — services, process, industries, clients, service areas, contact details,
brand colours and tone — lives in **[docs/COMPANY_PROFILE.md](docs/COMPANY_PROFILE.md)** and is imported below.
The original design reference is `Sharayu_Engineering_Company_Profile_A4_Landscape.pdf` (image-only, 12 slides).

@docs/COMPANY_PROFILE.md

## Rules for AI-generated work
1. **Facts come only from `docs/COMPANY_PROFILE.md`.** Never invent clients, project counts, certifications,
   licence numbers, team members, testimonials, prices, or locations. If something is needed but missing,
   leave a clearly marked placeholder (`TODO: confirm with Sharayu`) and say so.
2. **Brand:** primary navy `#021540`, accent orange `#F26505`, white/light-grey backgrounds.
   Headings use the two-tone pattern — first word navy, second word orange ("OUR **SERVICES**").
3. **Voice:** professional, reassuring, compliance-focused. Key phrases to reuse:
   "Protecting Lives. Securing Tomorrow." · "One Partner. Complete Fire Solution. Total Peace of Mind."
4. **Standards wording:** refer to NBC, IS and NFPA (NFPA 13 for sprinklers) and the Maharashtra State Fire Act exactly as the profile does.
5. **Contact data** (phone 9527139867, email sharayuengineering23@gmail.com, Instagram @sharayu_engineering,
   Pune corporate office, Kopargaon registered office) must be copied exactly — no reformatting of addresses.
6. **Client logos** are third-party trademarks — reference them only as the profile lists them; don't redraw or alter them.
7. Content targets an Indian audience: use Indian English spelling, `+91` phone format for links, and
   local place names as written (Ahilyanagar, Chhatrapati Sambhajinagar, PCMC).

## Suggested site structure (mirrors the PDF)
Home (hero + stats) → About Us → Vision/Mission/Values → Services (7, each with a detail page) →
Our Process → Industries We Serve → Clients → Business Association → Areas We Serve → Contact.

## Tech stack
Website lives in **`portfolio/`** — React 19 + React Router (declarative mode) + Vite 8, plain JavaScript,
CSS Modules with brand tokens in `src/styles/tokens.css`, Lucide icons, self-hosted fonts via `@fontsource`
(Oswald headings, Inter body, Dancing Script accents).

- **Content:** all copy/data lives in `portfolio/src/content/*.js` (one file per page + `site.js`). Components never hardcode text.
- **Routing/SEO:** routes are declared in `portfolio/src/routes/routeMeta.js`; every route is prerendered to static HTML
  (`scripts/prerender.mjs`) with per-page title/description/canonical/Open Graph and JSON-LD, plus `sitemap.xml`, `robots.txt`, `404.html`.
- **Commands** (run in `portfolio/`, Node ≥ 20.19): `npm run dev`, `npm run lint`, `npm run build`, `npm run preview`.
- **Hosting:** GitHub Pages via `.github/workflows/deploy.yml` (base path and site URL are set from the Pages config;
  override the domain with the `SITE_URL` repository variable).
