import { Link } from 'react-router'
import ServiceGrid from '../components/sections/ServiceGrid'
import Icon from '../components/ui/Icon'
import Media from '../components/ui/Media'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import { serviceDetail, services } from '../content/services'
import { getWhatsappLink, site } from '../content/site'
import { usePageMeta } from '../routes/usePageMeta'
import NotFoundPage from './NotFoundPage'
import shared from './pages.module.css'
import styles from './ServiceDetailPage.module.css'

export default function ServiceDetailPage() {
  const { service } = usePageMeta()
  if (!service) return <NotFoundPage />

  const title = service.detailTitle ?? service.title
  const otherServices = services.filter((item) => item.slug !== service.slug)
  const enquiry = `Hello ${site.name}, I would like to enquire about ${title}.`

  return (
    <>
      <PageHero eyebrow={site.tagline} title={title} subtitle={service.summary} />

      <section className="section" aria-label={title}>
        <div className={`container ${shared.split} ${shared.splitTop}`}>
          <div className={styles.content}>
            <span className={styles.icon}>
              <Icon name={service.icon} size={34} />
            </span>
            {service.detail.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            {service.highlights.length ? (
              <>
                <h2 className={shared.panelTitle}>{serviceDetail.highlightsTitle}</h2>
                <ul className={`check-list ${styles.highlights}`}>
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}

            <div className="btn-row">
              <a className="btn btn--primary" href={site.contact.phoneHref}>
                <Icon name="Phone" /> {site.ctaBand.callLabel}
              </a>
              <a className="btn btn--secondary" href={getWhatsappLink(enquiry)} target="_blank" rel="noopener noreferrer">
                <Icon name="WhatsApp" /> {site.ctaBand.whatsappLabel}
              </a>
            </div>
          </div>

          <aside className={styles.aside}>
            <Media src={service.image} alt={title} icon={service.icon} label={title} />
            {service.standards.length ? (
              <div className={shared.panel}>
                <h2 className={shared.panelTitle}>{serviceDetail.standardsTitle}</h2>
                <ul className="chip-list">
                  {service.standards.map((standard) => (
                    <li key={standard} className="chip chip--navy">
                      {standard}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {service.applications.length ? (
              <div className={shared.panel}>
                <h2 className={shared.panelTitle}>{serviceDetail.applicationsTitle}</h2>
                <ul className="chip-list">
                  {service.applications.map((application) => (
                    <li key={application} className="chip">
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="other-services">
        <div className="container">
          <SectionHeader id="other-services" title={serviceDetail.otherServicesTitle} />
          <ServiceGrid items={otherServices} />
          <div className={shared.more}>
            <Link to="/services" className="link-arrow">
              {serviceDetail.backLabel} <Icon name="ArrowRight" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
