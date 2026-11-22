import { Link } from 'react-router'
import AssociationBand from '../components/sections/AssociationBand'
import ClientGrid from '../components/sections/ClientGrid'
import IndustryGrid from '../components/sections/IndustryGrid'
import ProcessSteps from '../components/sections/ProcessSteps'
import ServiceGrid from '../components/sections/ServiceGrid'
import StatsGrid from '../components/sections/StatsGrid'
import Heading from '../components/ui/Heading'
import Icon from '../components/ui/Icon'
import Media from '../components/ui/Media'
import SectionHeader from '../components/ui/SectionHeader'
import { about } from '../content/about'
import { areas } from '../content/areas'
import { clients } from '../content/clients'
import { home } from '../content/home'
import { industries } from '../content/industries'
import { processPage } from '../content/process'
import { site } from '../content/site'
import shared from './pages.module.css'
import styles from './HomePage.module.css'

function ArrowLink({ cta }) {
  return (
    <Link to={cta.to} className="link-arrow">
      {cta.label} <Icon name="ArrowRight" />
    </Link>
  )
}

export default function HomePage() {
  const { hero } = home

  return (
    <>
      <section className={styles.hero} aria-labelledby="page-title">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={`script ${styles.eyebrow}`}>{hero.eyebrow}</p>
            <Heading as="h1" id="page-title" title={hero.title} className={styles.title} />
            <p className={styles.promise}>
              {site.promise.map((word, index) => (
                <span key={word}>
                  {index > 0 ? <span className={styles.dot} aria-hidden="true">•</span> : null}
                  {word}
                </span>
              ))}
            </p>
            <p className={styles.text}>{hero.text}</p>
            <div className="btn-row">
              <Link to={hero.primaryCta.to} className="btn btn--primary">
                {hero.primaryCta.label} <Icon name="ArrowRight" />
              </Link>
              <Link to={hero.secondaryCta.to} className="btn btn--light">
                {hero.secondaryCta.label}
              </Link>
            </div>
            <p className={styles.badges}>
              <span>{hero.badgesLabel}</span>
              {hero.badges.map((badge) => (
                <span key={badge} className={styles.badge}>
                  {badge}
                </span>
              ))}
            </p>
          </div>
          <div className={styles.heroMedia}>
            <Media src={hero.image} alt={hero.imageAlt} icon="Flame" label={site.tagline} ratio="1 / 1" priority />
          </div>
        </div>
      </section>

      <section className={styles.stats} aria-label={home.statsTitle}>
        <div className="container">
          <StatsGrid stats={about.stats} label={home.statsTitle} />
        </div>
      </section>

      <section className="section" aria-labelledby="home-about">
        <div className={`container ${shared.split}`}>
          <Media src={about.image} alt={about.imageAlt} icon="ShieldCheck" label={site.headlineSlogan} />
          <div>
            <SectionHeader id="home-about" eyebrow={home.about.eyebrow} title={home.about.title} align="left" />
            {home.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className={shared.closing}>{site.closingLine}</p>
            <ArrowLink cta={home.about.cta} />
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="home-services">
        <div className="container">
          <SectionHeader
            id="home-services"
            eyebrow={home.services.eyebrow}
            title={home.services.title}
            text={home.services.text}
          />
          <ServiceGrid />
          <div className={shared.more}>
            <Link to={home.services.cta.to} className="btn btn--secondary">
              {home.services.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="home-process">
        <div className="container">
          <SectionHeader
            id="home-process"
            eyebrow={home.process.eyebrow}
            title={home.process.title}
            text={home.process.text}
          />
          <ProcessSteps steps={processPage.steps} compact />
          <div className={shared.more}>
            <Link to={home.process.cta.to} className="btn btn--light">
              {home.process.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="home-industries">
        <div className="container">
          <SectionHeader
            id="home-industries"
            eyebrow={home.industries.eyebrow}
            title={home.industries.title}
            text={home.industries.text}
          />
          <IndustryGrid items={industries.items} />
          <div className={shared.more}>
            <ArrowLink cta={home.industries.cta} />
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="home-clients">
        <div className="container">
          <SectionHeader id="home-clients" eyebrow={home.clients.eyebrow} title={home.clients.title} text={clients.intro} />
          <ClientGrid items={clients.items} />
          <div className={shared.more}>
            <ArrowLink cta={home.clients.cta} />
          </div>
        </div>
      </section>

      <section className="section" aria-label={site.association.name}>
        <div className="container">
          <AssociationBand cta={home.association.cta} />
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="home-areas">
        <div className="container text-center">
          <SectionHeader id="home-areas" eyebrow={home.areas.eyebrow} title={home.areas.title} text={home.areas.text} />
          <ul className={`chip-list ${shared.centerChips}`}>
            <li className="chip chip--navy">
              <Icon name="MapPin" size={16} /> {areas.hub.name} ({areas.hub.label})
            </li>
            {areas.locations.map((location) => (
              <li key={location} className="chip">
                {location}
              </li>
            ))}
          </ul>
          <div className={shared.more}>
            <ArrowLink cta={home.areas.cta} />
          </div>
        </div>
      </section>
    </>
  )
}
