import { Link } from 'react-router'
import { services } from '../../content/services'
import { site } from '../../content/site'
import Icon from '../ui/Icon'
import Logo from '../ui/Logo'
import styles from './Footer.module.css'

export default function Footer() {
  const { footer, contact } = site
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Link to="/" className={styles.brand}>
            <Logo variant="light" />
          </Link>
          <p className={styles.promise}>{site.promise.join(' • ')}</p>
          <p className={styles.about}>{footer.about}</p>
          <p className={styles.association}>
            <span className="script">{site.association.prefix}</span> <strong>{site.association.name}</strong>
            <br />
            <span>{site.association.description}</span>
          </p>
        </div>

        <nav aria-labelledby="footer-links">
          <h2 id="footer-links" className={styles.heading}>
            {footer.quickLinksTitle}
          </h2>
          <ul className={styles.links}>
            {footer.quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-services">
          <h2 id="footer-services" className={styles.heading}>
            {footer.servicesTitle}
          </h2>
          <ul className={styles.links}>
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.heading}>{footer.contactTitle}</h2>
          <ul className={styles.contact}>
            <li>
              <Icon name="Phone" size={18} />
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <Icon name="Mail" size={18} />
              <a href={contact.emailHref}>{contact.email}</a>
            </li>
            <li>
              <Icon name="Instagram" size={18} />
              <a href={contact.instagramHref} target="_blank" rel="noopener noreferrer">
                {contact.instagramHandle}
              </a>
            </li>
            {contact.offices.map((office) => (
              <li key={office.id}>
                <Icon name="MapPin" size={18} />
                <address>
                  <strong>{office.label}</strong>
                  <br />
                  {office.address}
                </address>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            © {year} {site.name}. {footer.copyright}
          </p>
          <p className={styles.slogan}>
            <Icon name="ShieldCheck" size={18} /> {site.footerSlogan}
          </p>
        </div>
      </div>
    </footer>
  )
}
