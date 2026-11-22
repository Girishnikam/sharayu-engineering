import { Link } from 'react-router'
import Icon from './Icon'
import styles from './IconCard.module.css'

/** White card with navy icon circle, orange title and short description. */
export default function IconCard({ icon, title, text, to, linkLabel, headingLevel = 'h3', variant = 'center', children }) {
  const Title = headingLevel

  return (
    <article className={`${styles.card} ${styles[variant] ?? ''} ${to ? styles.interactive : ''}`}>
      {icon ? (
        <span className={styles.icon}>
          <Icon name={icon} size={28} />
        </span>
      ) : null}
      <Title className={styles.title}>
        {to ? (
          <Link to={to} className={styles.link}>
            {title}
          </Link>
        ) : (
          title
        )}
      </Title>
      <span className={styles.rule} aria-hidden="true" />
      {text ? <p className={styles.text}>{text}</p> : null}
      {children}
      {to && linkLabel ? (
        <span className={`link-arrow ${styles.more}`} aria-hidden="true">
          {linkLabel} <Icon name="ArrowRight" />
        </span>
      ) : null}
    </article>
  )
}
