import Icon from '../ui/Icon'
import styles from './StatsGrid.module.css'

export default function StatsGrid({ stats, label }) {
  return (
    <ul className={styles.grid} aria-label={label}>
      {stats.map((stat) => (
        <li key={stat.label} className={styles.tile}>
          <span className={styles.icon}>
            <Icon name={stat.icon} size={26} />
          </span>
          <p className={styles.value}>{stat.value}</p>
          <p className={styles.label}>{stat.label}</p>
          <p className={styles.detail}>{stat.detail}</p>
        </li>
      ))}
    </ul>
  )
}
