import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { getPageMeta, getStaticPaths } from './routes/routeMeta'
import { buildHead, toAbsoluteUrl } from './seo/buildHead'
import { renderHeadToString } from './seo/renderHead'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

/** Renders one route to static HTML plus its head tags. `path` excludes the base path. */
export function render(path) {
  const location = basename === '/' ? path : `${basename}${path === '/' ? '' : path}`

  const html = renderToString(
    <StrictMode>
      <StaticRouter basename={basename} location={location}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )

  const head = renderHeadToString(buildHead(getPageMeta(path)))
  return { html, head }
}

export { getStaticPaths, toAbsoluteUrl }
