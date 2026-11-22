import AssociationBand from '../components/sections/AssociationBand'
import IconCard from '../components/ui/IconCard'
import PageHero from '../components/ui/PageHero'
import { association } from '../content/association'
import shared from './pages.module.css'

export default function AssociationPage() {
  return (
    <>
      <PageHero {...association.hero} />
      <section className="section" aria-label={association.breadcrumb}>
        <div className="container">
          <p className={`lead ${shared.intro}`}>
            {association.intro}
          </p>
          <AssociationBand />
        </div>
      </section>
      <section className="section section--alt" aria-label={association.partners.secondary}>
        <div className="container">
          <ul className="grid grid--4" role="list">
            {association.pillars.map((pillar) => (
              <li key={pillar.title}>
                <IconCard icon={pillar.icon} title={pillar.title} text={pillar.text} />
              </li>
            ))}
          </ul>
          <p className={`${shared.closing} ${shared.more}`}>{association.quote}</p>
        </div>
      </section>
    </>
  )
}
