import ClientGrid from '../components/sections/ClientGrid'
import PageHero from '../components/ui/PageHero'
import { clients } from '../content/clients'
import shared from './pages.module.css'

export default function ClientsPage() {
  return (
    <>
      <PageHero {...clients.hero} />
      <section className="section section--alt" aria-label={clients.breadcrumb}>
        <div className="container">
          <p className={`lead ${shared.intro}`}>
            {clients.intro}
          </p>
          <ClientGrid items={clients.items} />
        </div>
      </section>
    </>
  )
}
