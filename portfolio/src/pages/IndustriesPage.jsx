import IndustryGrid from '../components/sections/IndustryGrid'
import PageHero from '../components/ui/PageHero'
import { industries } from '../content/industries'
import shared from './pages.module.css'

export default function IndustriesPage() {
  return (
    <>
      <PageHero {...industries.hero} />
      <section className="section" aria-label={industries.breadcrumb}>
        <div className="container">
          <p className={`lead ${shared.intro}`}>
            {industries.intro}
          </p>
          <IndustryGrid items={industries.items} />
        </div>
      </section>
    </>
  )
}
