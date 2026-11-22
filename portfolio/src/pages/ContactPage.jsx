import Icon from '../components/ui/Icon'
import IconCard from '../components/ui/IconCard'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import { contactPage } from '../content/contact'
import { getWhatsappLink, site } from '../content/site'
import shared from './pages.module.css'
import styles from './ContactPage.module.css'

const directionsUrl = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

export default function ContactPage() {
  const { contact } = site
  const { channels } = contactPage

  const channelLinks = [
    { ...channels.phone, value: contact.phoneDisplay, href: contact.phoneHref },
    { ...channels.whatsapp, value: contact.phoneDisplay, href: getWhatsappLink(), external: true },
    { ...channels.email, value: contact.email, href: contact.emailHref },
    { ...channels.instagram, value: contact.instagramHandle, href: contact.instagramHref, external: true },
  ]

  return (
    <>
      <PageHero {...contactPage.hero} />

      <section className="section" aria-labelledby="contact-channels">
        <div className="container">
          <p className={`lead ${shared.intro}`}>{contactPage.intro}</p>
          <SectionHeader id="contact-channels" title={contactPage.channelsTitle} />
          <ul className={styles.channels}>
            {channelLinks.map((channel) => (
              <li key={channel.title}>
                <a
                  className={styles.channel}
                  href={channel.href}
                  {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className={styles.channelIcon}>
                    <Icon name={channel.icon} size={26} />
                  </span>
                  <span className={styles.channelTitle}>{channel.title}</span>
                  <span className={styles.channelValue}>{channel.value}</span>
                  <span className="link-arrow">
                    {channel.action} <Icon name="ArrowRight" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="contact-offices">
        <div className="container">
          <SectionHeader id="contact-offices" title={contactPage.officesTitle} />
          <div className="grid grid--2">
            {contact.offices.map((office) => (
              <article key={office.id} className={`${shared.panel} ${styles.office}`}>
                <span className={styles.channelIcon}>
                  <Icon name="MapPin" size={26} />
                </span>
                <div>
                  <h3 className={shared.panelTitle}>{office.label}</h3>
                  <address className={styles.address}>{office.address}</address>
                  <a
                    className="link-arrow"
                    href={directionsUrl(office.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactPage.directionsLabel} <Icon name="Navigation" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-promise">
        <div className="container">
          <SectionHeader id="contact-promise" title={contactPage.promisesTitle} />
          <ul className="grid grid--4" role="list">
            {contactPage.promises.map((promise) => (
              <li key={promise.title}>
                <IconCard icon={promise.icon} title={promise.title} text={promise.text} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
