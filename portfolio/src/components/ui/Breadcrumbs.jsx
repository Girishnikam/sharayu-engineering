import { Link } from 'react-router'
import { site } from '../../content/site'
import Icon from './Icon'
import styles from './Breadcrumbs.module.css'

export default function Breadcrumbs({ items }) {
  if (!items?.length) return null
  const trail = [{ label: site.breadcrumbs.homeLabel, path: '/' }, ...items]

  return (
    <nav aria-label={site.breadcrumbs.label} className={styles.breadcrumbs}>
      <ol>
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1
          return (
            <li key={crumb.path}>
              {isLast ? (
                <span aria-current="page">{crumb.label}</span>
              ) : (
                <>
                  <Link to={crumb.path}>{crumb.label}</Link>
                  <Icon name="ChevronRight" size={14} className={styles.separator} />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
