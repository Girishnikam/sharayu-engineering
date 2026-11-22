import { services, servicesPage } from '../../content/services'
import IconCard from '../ui/IconCard'

export default function ServiceGrid({ items = services, headingLevel = 'h3' }) {
  return (
    <ul className="grid grid--3" role="list">
      {items.map((service) => (
        <li key={service.slug}>
          <IconCard
            icon={service.icon}
            title={service.title}
            text={service.summary}
            to={`/services/${service.slug}`}
            linkLabel={servicesPage.cardLinkLabel}
            headingLevel={headingLevel}
          />
        </li>
      ))}
    </ul>
  )
}
