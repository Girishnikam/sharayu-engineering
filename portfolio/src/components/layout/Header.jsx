import { useEffect, useId, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { site } from '../../content/site'
import Icon from '../ui/Icon'
import Logo from '../ui/Logo'
import styles from './Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const { header, contact, navigation } = site

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <a href={contact.phoneHref}>
            <Icon name="Phone" size={15} /> {contact.phoneDisplay}
          </a>
          <a href={contact.emailHref}>
            <Icon name="Mail" size={15} /> {contact.email}
          </a>
          <span className={styles.topBarNote}>
            <Icon name="Clock" size={15} /> {header.topBarNote}
          </span>
        </div>
      </div>

      <div className={styles.main}>
        <div className={`container ${styles.mainInner}`}>
          <Link to="/" className={styles.brand} onClick={close}>
            <Logo />
          </Link>

          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'X' : 'Menu'} size={26} />
            <span className="visually-hidden">{open ? header.menuCloseLabel : header.menuOpenLabel}</span>
          </button>

          <nav id={menuId} aria-label={header.primaryNavLabel} className={`${styles.nav} ${open ? styles.open : ''}`}>
            <ul className={styles.list}>
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={close}
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <a className={`btn btn--primary ${styles.cta}`} href={contact.phoneHref}>
              <Icon name="Phone" /> {header.ctaLabel}
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
