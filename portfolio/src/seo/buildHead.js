import { areas } from '../content/areas'
import { services } from '../content/services'
import { site } from '../content/site'

export const toAbsoluteUrl = (path) => {
  const { siteUrl } = site.seo
  if (path === '/') return `${siteUrl}/`
  return `${siteUrl}${path.replace(/\/+$/, '')}/`
}

const absoluteAsset = (path) => {
  if (!path) return null
  if (/^https?:\/\//.test(path)) return path
  // siteUrl already includes the deployment base path.
  return `${site.seo.siteUrl}/${path.replace(/^\/+/, '')}`
}

function organization() {
  const [mainOffice] = site.contact.offices
  const logo = absoluteAsset(site.brand.logoSrc)

  return {
    '@type': 'LocalBusiness',
    '@id': `${site.seo.siteUrl}/#organization`,
    name: site.name,
    slogan: site.tagline,
    description: site.seo.defaultDescription,
    url: toAbsoluteUrl('/'),
    telephone: '+919527139867',
    email: site.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: mainOffice.address,
      addressLocality: mainOffice.locality,
      postalCode: mainOffice.postalCode,
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    areaServed: [areas.hub.name, ...areas.locations].map((name) => ({ '@type': 'City', name })),
    knowsAbout: services.map((service) => service.title),
    sameAs: [site.contact.instagramHref],
    ...(logo ? { logo, image: logo } : {}),
  }
}

function breadcrumbList(breadcrumbs) {
  const trail = [{ label: site.breadcrumbs.homeLabel, path: '/' }, ...breadcrumbs]
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: toAbsoluteUrl(crumb.path),
    })),
  }
}

function serviceSchema(service, path) {
  return {
    '@type': 'Service',
    name: service.detailTitle ?? service.title,
    serviceType: service.title,
    description: service.seo.description,
    url: toAbsoluteUrl(path),
    provider: { '@id': `${site.seo.siteUrl}/#organization` },
    areaServed: { '@type': 'State', name: 'Maharashtra' },
  }
}

/**
 * Builds the full set of head tags for a page from its resolved metadata.
 * Output is consumed by both the build-time prerenderer and the client-side head updater.
 */
export function buildHead(meta) {
  const { seo } = meta
  const title = seo.title ? site.seo.titleTemplate.replace('%s', seo.title) : site.seo.defaultTitle
  const description = seo.description ?? site.seo.defaultDescription
  const url = toAbsoluteUrl(meta.path)
  const image = absoluteAsset(seo.image ?? site.seo.ogImage)

  const tags = [
    { tag: 'meta', attrs: { name: 'description', content: description } },
    { tag: 'meta', attrs: { name: 'robots', content: meta.noindex ? 'noindex, follow' : 'index, follow' } },
    ...(meta.noindex ? [] : [{ tag: 'link', attrs: { rel: 'canonical', href: url } }]),
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: site.name } },
    { tag: 'meta', attrs: { property: 'og:locale', content: site.seo.locale } },
    { tag: 'meta', attrs: { property: 'og:title', content: title } },
    { tag: 'meta', attrs: { property: 'og:description', content: description } },
    { tag: 'meta', attrs: { property: 'og:url', content: url } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: description } },
    ...(image
      ? [
          { tag: 'meta', attrs: { property: 'og:image', content: image } },
          { tag: 'meta', attrs: { name: 'twitter:image', content: image } },
        ]
      : []),
  ]

  const graph = [organization()]
  if (!meta.noindex && meta.breadcrumbs.length) graph.push(breadcrumbList(meta.breadcrumbs))
  if (meta.service) graph.push(serviceSchema(meta.service, meta.path))

  return {
    title,
    tags,
    jsonLd: { '@context': 'https://schema.org', '@graph': graph },
  }
}
