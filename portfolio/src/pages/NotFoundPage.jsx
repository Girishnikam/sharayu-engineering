import { Link } from 'react-router'
import Heading from '../components/ui/Heading'
import { notFound } from '../content/notFound'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <section className={`section ${styles.wrapper}`} aria-labelledby="page-title">
      <div className="container text-center">
        <p className={styles.code} aria-hidden="true">
          {notFound.code}
        </p>
        <Heading as="h1" id="page-title" title={notFound.title} />
        <p className="lead">{notFound.text}</p>
        <div className="btn-row">
          <Link to="/" className="btn btn--primary">
            {notFound.homeLabel}
          </Link>
          <Link to="/services" className="btn btn--secondary">
            {notFound.servicesLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
