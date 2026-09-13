import { Link } from 'react-router-dom'
import { toolsPage } from '../content.js'

/**
 * Features the free tools on the home page. They are an unusual, generous
 * signal for a consultancy, so they earn a spot on the front page.
 */
export default function HomeTools() {
  return (
    <section className="section section--soft home-tools" aria-labelledby="home-tools-heading">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Free tools</p>
          <h2 id="home-tools-heading" className="section__heading">
            Useful before you ever hire us.
          </h2>
          <p className="section__intro">
            A growing set of free tools we have built. No sign-up to try them, they run in your
            browser, and each one gives you something genuinely useful in a couple of minutes.
          </p>
        </div>

        <ul className="home-tools__grid">
          {toolsPage.tools.map((t) => {
            const Card = t.href ? 'a' : Link
            const linkProps = t.href ? { href: t.href } : { to: t.to }
            return (
              <li key={t.slug} className="home-tool">
                <Card className="home-tool__link" {...linkProps}>
                  <h3 className="home-tool__name">{t.name}</h3>
                  <p className="home-tool__tagline">{t.tagline}</p>
                  <span className="text-link">{t.cta}</span>
                </Card>
              </li>
            )
          })}
        </ul>

        <p className="home-tools__more">
          <Link to="/tools" className="btn btn--outline-dark btn--sm">
            View all tools &amp; insights
          </Link>
        </p>
      </div>
    </section>
  )
}
