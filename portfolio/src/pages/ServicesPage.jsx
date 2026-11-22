import ServiceGrid from '../components/sections/ServiceGrid'
import Icon from '../components/ui/Icon'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import { servicesPage } from '../content/services'
import shared from './pages.module.css'
import styles from './ServicesPage.module.css'

export default function ServicesPage() {
  const { intro, guarantees, standards } = servicesPage

  return (
    <>
      <PageHero {...servicesPage.hero} />

      <section className="section" aria-labelledby="services-list">
        <div className="container">
          <div className={`text-center ${styles.intro}`}>
            {intro.map((paragraph) => (
              <p key={paragraph} className="lead">
                {paragraph}
              </p>
            ))}
          </div>
          <SectionHeader id="services-list" title={servicesPage.listTitle} />
          <ServiceGrid />
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="services-standards">
        <div className="container">
          <SectionHeader id="services-standards" title={standards.title} text={standards.intro} />
          <ul className={styles.standards}>
            {standards.items.map((standard) => (
              <li key={standard.code}>
                <span className={styles.code}>{standard.code}</span>
                <span>{standard.name}</span>
              </li>
            ))}
          </ul>
          <p className={shared.stripTitle}>{guarantees.title}</p>
          <ul className={shared.strip}>
            {guarantees.items.map((item) => (
              <li key={item.label}>
                <Icon name={item.icon} /> {item.label}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
