import { matchPath } from 'react-router'
import { about } from '../content/about'
import { areas } from '../content/areas'
import { association } from '../content/association'
import { clients } from '../content/clients'
import { contactPage } from '../content/contact'
import { home } from '../content/home'
import { industries } from '../content/industries'
import { notFound } from '../content/notFound'
import { processPage } from '../content/process'
import { getServiceBySlug, services, servicesPage } from '../content/services'

/**
 * Route metadata (no components) — shared by the router, SEO head tags, breadcrumbs,
 * JSON-LD and the build-time prerender/sitemap. Add a page by adding an entry here
 * and mapping its `id` to a component in src/App.jsx.
 */
export const routes = [
  { id: 'home', path: '/', seo: home.seo },
  { id: 'about', path: '/about', seo: about.seo, breadcrumb: about.breadcrumb },
  { id: 'services', path: '/services', seo: servicesPage.seo, breadcrumb: servicesPage.breadcrumb },
  {
    id: 'service',
    path: '/services/:slug',
    staticPaths: () => services.map((service) => `/services/${service.slug}`),
    resolve: ({ slug }) => {
      const service = getServiceBySlug(slug)
      if (!service) return null
      return {
        seo: service.seo,
        breadcrumbs: [
          { label: servicesPage.breadcrumb, path: '/services' },
          { label: service.detailTitle ?? service.title, path: `/services/${service.slug}` },
        ],
        service,
      }
    },
  },
  { id: 'process', path: '/process', seo: processPage.seo, breadcrumb: processPage.breadcrumb },
  { id: 'industries', path: '/industries', seo: industries.seo, breadcrumb: industries.breadcrumb },
  { id: 'clients', path: '/clients', seo: clients.seo, breadcrumb: clients.breadcrumb },
  { id: 'association', path: '/association', seo: association.seo, breadcrumb: association.breadcrumb },
  { id: 'areas', path: '/areas-we-serve', seo: areas.seo, breadcrumb: areas.breadcrumb },
  { id: 'contact', path: '/contact', seo: contactPage.seo, breadcrumb: contactPage.breadcrumb },
]

export const notFoundRoute = { id: 'notFound', path: '*', seo: notFound.seo, noindex: true }

const normalisePath = (pathname) => {
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

/**
 * Resolves everything known about a URL path: matching route, SEO data and breadcrumb trail.
 */
export function getPageMeta(pathname) {
  const path = normalisePath(pathname)

  for (const route of routes) {
    const match = matchPath({ path: route.path, end: true }, path)
    if (!match) continue

    if (route.resolve) {
      const resolved = route.resolve(match.params)
      if (!resolved) break
      return { route, path, params: match.params, ...resolved }
    }

    return {
      route,
      path,
      params: match.params,
      seo: route.seo,
      breadcrumbs: route.breadcrumb ? [{ label: route.breadcrumb, path: route.path }] : [],
    }
  }

  return { route: notFoundRoute, path, params: {}, seo: notFoundRoute.seo, breadcrumbs: [], noindex: true }
}

/** All concrete, indexable paths — used for prerendering and the sitemap. */
export function getStaticPaths() {
  return routes.flatMap((route) => (route.staticPaths ? route.staticPaths() : [route.path]))
}
