import StatsGrid from '../components/sections/StatsGrid'
import IconCard from '../components/ui/IconCard'
import Media from '../components/ui/Media'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import { about } from '../content/about'
import { site } from '../content/site'
import shared from './pages.module.css'

export default function AboutPage() {
  return (
    <>
      <PageHero {...about.hero} />

      <section className="section" aria-labelledby="about-intro">
        <div className={`container ${shared.split} ${shared.splitTop}`}>
          <Media src={about.image} alt={about.imageAlt} icon="ShieldCheck" label={site.tagline} ratio="4 / 5" />
          <div>
            <SectionHeader id="about-intro" title={about.intro.title} align="left" />
            {about.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className={shared.closing}>{about.intro.closing}</p>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-label={site.name}>
        <div className="container">
          <StatsGrid stats={about.stats} label={site.name} />
        </div>
      </section>

      <section className="section" aria-labelledby="about-vision">
        <div className="container">
          <SectionHeader id="about-vision" title={about.visionMission.title} />
          <div className="grid grid--2">
            {about.visionMission.items.map((item) => (
              <IconCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="about-values">
        <div className="container">
          <SectionHeader id="about-values" title={about.values.title} />
          <ul className="grid grid--3" role="list">
            {about.values.items.map((value) => (
              <li key={value.title}>
                <IconCard icon={value.icon} title={value.title} text={value.text} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
