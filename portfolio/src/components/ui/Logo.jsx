import { site } from '../../content/site'
import { assetUrl } from '../../utils/assetUrl'
import styles from './Logo.module.css'

function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M7 42a25 25 0 0 1 50 0" fill="none" stroke="#021540" strokeWidth="4.5" strokeLinecap="round" />
      <rect x="19" y="22" width="7" height="24" rx="1" fill="#021540" />
      <rect x="28.5" y="14" width="7" height="32" rx="1" fill="#021540" />
      <rect x="38" y="19" width="7" height="27" rx="1" fill="#F26505" />
      <path d="M5 50q27 10 54 0" fill="none" stroke="#F26505" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Brand lock-up. Uses the official logo file when `site.brand.logoSrc` is configured,
 * otherwise renders an SVG rendition of the mark with the wordmark.
 */
export default function Logo({ variant = 'default' }) {
  const className = `${styles.logo} ${variant === 'light' ? styles.light : ''}`

  if (site.brand.logoSrc) {
    return (
      <span className={className}>
        <img className={styles.image} src={assetUrl(site.brand.logoSrc)} alt={site.brand.logoAlt} width="180" height="56" />
      </span>
    )
  }

  return (
    <span className={className}>
      <LogoMark className={styles.mark} />
      <span className={styles.wordmark} aria-hidden="true">
        <span className={styles.name}>SHARAYU</span>
        <span className={styles.sub}>ENGINEERING</span>
      </span>
      <span className="visually-hidden">{site.name}</span>
    </span>
  )
}
