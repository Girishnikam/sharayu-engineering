import ProcessSteps from '../components/sections/ProcessSteps'
import PageHero from '../components/ui/PageHero'
import { processPage } from '../content/process'
import shared from './pages.module.css'

export default function ProcessPage() {
  return (
    <>
      <PageHero {...processPage.hero} />
      <section className="section section--alt" aria-label={processPage.hero.subtitle}>
        <div className="container">
          <p className={`lead ${shared.intro}`}>
            {processPage.intro}
          </p>
          <ProcessSteps steps={processPage.steps} />
        </div>
      </section>
    </>
  )
}
