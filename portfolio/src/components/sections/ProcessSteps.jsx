import Icon from '../ui/Icon'
import styles from './ProcessSteps.module.css'

/** Design • Supply • Execute • Maintain. `compact` hides the activity lists. */
export default function ProcessSteps({ steps, compact = false }) {
  return (
    <ol className={`${styles.steps} ${compact ? styles.compact : ''}`}>
      {steps.map((step) => (
        <li key={step.number} className={styles.step}>
          <div className={styles.head}>
            <span className={styles.number} aria-hidden="true">
              {step.number}
            </span>
            <span className={styles.icon}>
              <Icon name={step.icon} size={28} />
            </span>
          </div>
          <h3 className={styles.title}>{step.title}</h3>
          {compact ? (
            <p className={styles.summary}>{step.activities.slice(0, 3).join(' · ')}</p>
          ) : (
            <ul className={`check-list ${styles.list}`}>
              {step.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}
