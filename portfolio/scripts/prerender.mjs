/**
 * Build step 3/3: renders every route to static HTML (with per-page SEO head tags),
 * then writes 404.html, sitemap.xml and robots.txt into dist/.
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 */
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, getStaticPaths, toAbsoluteUrl } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const template = await readFile(path.join(distDir, 'index.html'), 'utf8')
if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"><!--app-html-->')) {
  throw new Error('index.html is missing the <!--app-head--> or <div id="root"><!--app-html--> placeholder.')
}

const toHtml = (route) => {
  const { html, head } = render(route)
  return template
    .replace('<!--app-head-->', head)
    .replace('<div id="root"><!--app-html-->', `<div id="root" data-prerendered-path="${route}">${html}`)
}

const outputFileFor = (route) =>
  route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, ...route.split('/').filter(Boolean), 'index.html')

const paths = getStaticPaths()

for (const route of paths) {
  const file = outputFileFor(route)
  await mkdir(path.dirname(file), { recursive: true })
  await writeFile(file, toHtml(route))
  console.log(`  prerendered ${route}`)
}

// GitHub Pages (and most static hosts) serve 404.html for unknown URLs.
await writeFile(path.join(distDir, '404.html'), toHtml('/404'))
console.log('  prerendered 404.html')

const lastmod = new Date().toISOString().split('T')[0]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((route) => `  <url><loc>${toAbsoluteUrl(route)}</loc><lastmod>${lastmod}</lastmod></url>`)
  .join('\n')}
</urlset>
`
await writeFile(path.join(distDir, 'sitemap.xml'), sitemap)

const robots = `User-agent: *
Allow: /

Sitemap: ${toAbsoluteUrl('/')}sitemap.xml
`
await writeFile(path.join(distDir, 'robots.txt'), robots)

// Disable Jekyll processing on GitHub Pages so all files are served as-is.
await writeFile(path.join(distDir, '.nojekyll'), '')

await rm(ssrDir, { recursive: true, force: true })
console.log(`\n✓ Prerendered ${paths.length + 1} pages, sitemap.xml and robots.txt`)
