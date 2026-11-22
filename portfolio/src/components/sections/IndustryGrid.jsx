import Icon from '../ui/Icon'
import styles from './IndustryGrid.module.css'

export default function IndustryGrid({ items }) {
  return (
    <ul className={styles.grid}>
      {items.map((industry) => (
        <li key={industry.title} className={styles.item}>
          <span className={styles.icon}>
            <Icon name={industry.icon} size={26} />
          </span>
          <span className={styles.title}>{industry.title}</span>
        </li>
      ))}
    </ul>
  )
}
