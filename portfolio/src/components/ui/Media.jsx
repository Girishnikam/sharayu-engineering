import { assetUrl } from '../../utils/assetUrl'
import Icon from './Icon'
import styles from './Media.module.css'

/**
 * Content image slot. Renders the photo when `src` is configured in content,
 * otherwise a branded illustrated panel so layouts never show broken images.
 */
export default function Media({ src, alt = '', icon = 'Flame', label, ratio = '4 / 3', priority = false, className = '' }) {
  if (src) {
    return (
      <img
        className={`${styles.media} ${className}`}
        src={assetUrl(src)}
        alt={alt}
        style={{ aspectRatio: ratio }}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        width="800"
        height="600"
      />
    )
  }

  return (
    <div className={`${styles.media} ${styles.fallback} ${className}`} style={{ aspectRatio: ratio }} aria-hidden="true">
      <span className={styles.ring}>
        <Icon name={icon} size={56} />
      </span>
      {label ? <span className={styles.label}>{label}</span> : null}
    </div>
  )
}
