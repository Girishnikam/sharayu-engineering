import { assetUrl } from '../../utils/assetUrl'
import styles from './ClientGrid.module.css'

const initials = (name) =>
  name
    .replace(/[^A-Za-z\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

/** Client list. Shows an approved logo when configured, otherwise a text tile. */
export default function ClientGrid({ items }) {
  return (
    <ul className={styles.grid}>
      {items.map((client) => (
        <li key={client.name} className={styles.item}>
          {client.logo ? (
            <img
              className={styles.logo}
              src={assetUrl(client.logo)}
              alt={client.name}
              loading="lazy"
              decoding="async"
              width="160"
              height="80"
            />
          ) : (
            <>
              <span className={styles.monogram} aria-hidden="true">
                {initials(client.name)}
              </span>
              <span className={styles.name}>{client.name}</span>
              {client.note ? <span className={styles.note}>{client.note}</span> : null}
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
