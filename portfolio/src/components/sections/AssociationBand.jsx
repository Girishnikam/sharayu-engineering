import { Link } from 'react-router'
import { association } from '../../content/association'
import Icon from '../ui/Icon'
import styles from './AssociationBand.module.css'

/** Sharayu Engineering × Vishwaraaj Industrial Projects partnership lock-up. */
export default function AssociationBand({ cta, showPillars = false }) {
  const { partners } = association

  return (
    <div className={styles.band}>
      <div className={styles.lockup}>
        <p className={styles.primary}>{partners.primary}</p>
        <p className={`script ${styles.connector}`}>{partners.connector}</p>
        <p className={styles.secondary}>
          {partners.secondary} <span className={styles.since}>({partners.secondaryShort}) · {partners.since}</span>
        </p>
        <p className={styles.description}>{partners.secondaryDescription}</p>
      </div>

      {showPillars ? (
        <ul className={styles.pillars}>
          {association.pillars.map((pillar) => (
            <li key={pillar.title}>
              <span className={styles.icon}>
                <Icon name={pillar.icon} size={22} />
              </span>
              <span>
                <strong>{pillar.title}</strong>
                <span className={styles.pillarText}>{pillar.text}</span>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <blockquote className={styles.quote}>
          <p>{association.quote}</p>
        </blockquote>
      )}

      {cta ? (
        <Link to={cta.to} className={`btn btn--light ${styles.cta}`}>
          {cta.label} <Icon name="ArrowRight" />
        </Link>
      ) : null}
    </div>
  )
}
