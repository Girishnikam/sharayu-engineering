import { useEffect, useMemo } from 'react'
import { Outlet, useLocation } from 'react-router'
import { site } from '../../content/site'
import { usePageMeta } from '../../routes/usePageMeta'
import { buildHead } from '../../seo/buildHead'
import { useDocumentHead } from '../../seo/useDocumentHead'
import CtaBand from '../sections/CtaBand'
import Footer from './Footer'
import Header from './Header'
import styles from './Layout.module.css'

function useScrollToTopOnNavigate() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
}

export default function Layout() {
  const meta = usePageMeta()
  const head = useMemo(() => buildHead(meta), [meta])

  useDocumentHead(head)
  useScrollToTopOnNavigate()

  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        {site.header.skipLinkLabel}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className={styles.main}>
        <Outlet />
      </main>
      <CtaBand />
      <Footer />
    </>
  )
}
