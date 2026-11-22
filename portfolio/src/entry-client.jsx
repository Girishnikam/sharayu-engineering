import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import { getPageMeta } from './routes/routeMeta'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'
const container = document.getElementById('root')

const app = (
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

const currentPath = () => {
  const { pathname } = window.location
  return basename !== '/' && pathname.startsWith(basename) ? pathname.slice(basename.length) || '/' : pathname
}

// Hydrate only when the prerendered HTML is for the page being viewed. Hosts that fall back to
// index.html for unknown URLs (and the dev server, which has no prerendered HTML) render fresh instead.
const matchesPrerender = () => {
  const { prerenderedPath } = container.dataset
  if (!prerenderedPath || !container.firstElementChild) return false
  const rendered = getPageMeta(prerenderedPath)
  const current = getPageMeta(currentPath())
  return rendered.route.id === current.route.id && JSON.stringify(rendered.params) === JSON.stringify(current.params)
}

if (matchesPrerender()) {
  hydrateRoot(container, app)
} else {
  container.textContent = ''
  createRoot(container).render(app)
}
