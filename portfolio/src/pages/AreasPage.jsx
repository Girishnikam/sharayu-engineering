import Icon from '../components/ui/Icon'
import IconCard from '../components/ui/IconCard'
import PageHero from '../components/ui/PageHero'
import { areas } from '../content/areas'
import shared from './pages.module.css'
import styles from './AreasPage.module.css'

export default function AreasPage() {
  return (
    <>
      <PageHero {...areas.hero} />

      <section className="section" aria-labelledby="areas-locations">
        <div className={`container ${shared.split}`}>
          <div>
            <p className="lead">{areas.intro}</p>
            <p>{areas.reachNote}</p>
            <h2 id="areas-locations" className={shared.panelTitle}>
              {areas.locationsTitle}
            </h2>
            <ul className="chip-list">
              {areas.locations.map((location) => (
                <li key={location} className="chip">
                  <Icon name="MapPin" size={14} /> {location}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.map} aria-hidden="true">
            <div className={styles.hub}>
              <Icon name="MapPin" size={30} />
              <span className={styles.hubLabel}>{areas.hub.label}</span>
              <span className={styles.hubName}>{areas.hub.name}</span>
            </div>
            <ul className={styles.orbit}>
              {areas.locations.map((location, index) => (
                <li key={location} style={{ '--i': index, '--n': areas.locations.length }}>
                  <span>{location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-label={areas.hero.subtitle}>
        <div className="container">
          <ul className="grid grid--4" role="list">
            {areas.strengths.map((strength) => (
              <li key={strength.title}>
                <IconCard icon={strength.icon} title={strength.title} text={strength.text} />
              </li>
            ))}
          </ul>
          <ul className={`${shared.strip} ${shared.spaced}`}>
            {areas.values.map((value) => (
              <li key={value}>
                <Icon name="ShieldCheck" /> {value}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
