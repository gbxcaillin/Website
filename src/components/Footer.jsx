import { Link } from 'react-router-dom'
import { footer, site } from '../content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="GBX Professional Services, home">
              {/* Animated GBX mark. The GIF plays once on load and holds on the
                  complete framed logo, so once the page has settled it reads as
                  the resting brand logo. */}
              <img
                src="/media/logo-mark.gif"
                alt="GBX Professional Services"
                width="120"
                height="120"
                loading="lazy"
              />
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
            <p className="footer__title mono">Office</p>
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
