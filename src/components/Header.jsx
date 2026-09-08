import { useEffect, useState } from 'react'
import { nav } from '../content.js'
import { Lockup } from './Logo.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Lockup />

        <nav className="header__nav" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn--primary btn--sm header__cta">
          Start a conversation
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`burger ${open ? 'burger--open' : ''}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link nav-link--mobile" onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary" onClick={close}>
            Start a conversation
          </a>
        </nav>
      </div>
    </header>
  )
}
