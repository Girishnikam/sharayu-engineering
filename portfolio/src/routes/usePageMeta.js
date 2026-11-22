import { useMemo } from 'react'
import { useLocation } from 'react-router'
import { getPageMeta } from './routeMeta'

/** Metadata (SEO, breadcrumbs, resolved entities) for the current URL. */
export function usePageMeta() {
  const { pathname } = useLocation()
  return useMemo(() => getPageMeta(pathname), [pathname])
}
