import { Link } from 'react-router-dom'
import { footer, site } from '../content.js'
import { FramedLogo } from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" aria-label="GBX Professional Services, home">
              <FramedLogo size={104} tone="dark" />
            </Link>
            <p className="footer__blurb">{footer.blurb}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="footer__col">
              <p className="footer__title mono">{col.title}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="footer__link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col">
            <p className="footer__title mono">Firm</p>
            <ul>
              {footer.details.map((d) => (
                <li key={d} className="footer__detail">
                  {d}
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="footer__link">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">{site.copyright}. All rights reserved.</p>
          <p className="footer__disclaimer">{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
