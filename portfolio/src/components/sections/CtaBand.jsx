import { Link } from 'react-router'
import { getWhatsappLink, site } from '../../content/site'
import Icon from '../ui/Icon'
import styles from './CtaBand.module.css'

/** Closing call-to-action shown above the footer on every page. */
export default function CtaBand() {
  const { ctaBand, contact } = site

  return (
    <section className={styles.band} aria-labelledby="cta-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.shield} aria-hidden="true">
            <Icon name="ShieldCheck" size={36} />
          </span>
          <div>
            <h2 id="cta-title" className={styles.title}>
              {ctaBand.title}
            </h2>
            <p className={styles.text}>{ctaBand.text}</p>
          </div>
        </div>
        <div className="btn-row">
          <a className="btn btn--primary" href={contact.phoneHref}>
            <Icon name="Phone" /> {ctaBand.callLabel}
          </a>
          <a className="btn btn--light" href={getWhatsappLink()} target="_blank" rel="noopener noreferrer">
            <Icon name="WhatsApp" /> {ctaBand.whatsappLabel}
          </a>
          <Link className="btn btn--light" to="/contact">
            {ctaBand.contactLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
