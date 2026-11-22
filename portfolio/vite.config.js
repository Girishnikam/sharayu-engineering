import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

function normaliseBase(value) {
  if (!value || value === '/') return '/'
  return `/${value.replace(/^\/+|\/+$/g, '')}/`
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // Public path the site is served from, e.g. "/sharayu-engineering/" on GitHub Pages
    // or "/" on a custom domain. Set BASE_PATH at build time.
    base: normaliseBase(env.BASE_PATH),
    plugins: [react()],
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    },
  }
})
