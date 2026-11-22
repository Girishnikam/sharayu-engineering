import { usePageMeta } from '../../routes/usePageMeta'
import Breadcrumbs from './Breadcrumbs'
import Heading from './Heading'
import styles from './PageHero.module.css'

/** Inner-page banner with the page's single <h1> and breadcrumb trail. */
export default function PageHero({ eyebrow, title, subtitle }) {
  const { breadcrumbs } = usePageMeta()

  return (
    <section className={styles.hero} aria-labelledby="page-title">
      <div className={`container ${styles.inner}`}>
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow ? <p className={`script ${styles.eyebrow}`}>{eyebrow}</p> : null}
        <Heading as="h1" id="page-title" title={title} className={styles.title} />
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </div>
      <svg className={styles.swoosh} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 80V40C320 90 760 -10 1440 30V80Z" fill="#fff" />
        <path d="M0 40C320 90 760 -10 1440 30" fill="none" stroke="#F26505" strokeWidth="4" />
      </svg>
    </section>
  )
}
