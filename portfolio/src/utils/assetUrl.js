/**
 * Resolves a path inside /public against the configured Vite base path,
 * so assets work both on a custom domain ("/") and on GitHub Pages ("/repo/").
 */
export function assetUrl(path) {
  if (!path) return null
  if (/^(https?:)?\/\//.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
