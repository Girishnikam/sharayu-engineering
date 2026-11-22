import Heading from './Heading'
import styles from './SectionHeader.module.css'

export default function SectionHeader({ eyebrow, title, text, align = 'center', as = 'h2', id }) {
  return (
    <header className={`${styles.header} ${align === 'center' ? styles.center : ''}`}>
      {eyebrow ? <p className={`script ${styles.eyebrow}`}>{eyebrow}</p> : null}
      <Heading as={as} title={title} className={styles.title} id={id} />
      <span className={styles.rule} aria-hidden="true" />
      {text ? <p className="lead">{text}</p> : null}
    </header>
  )
}
