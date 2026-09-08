import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'

export default function NotFound() {
  usePageMeta({ title: 'Page not found | GBX Professional Services' })
  return (
    <section className="section section--paper notfound">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1 className="section__heading">This page could not be found.</h1>
        <p className="section__intro">
          The page you are looking for may have moved or no longer exists. Head back to the homepage
          or start a conversation with us.
        </p>
        <div className="btn-row" style={{ marginTop: '2rem' }}>
          <Link to="/" className="btn btn--primary">
            Back to home
          </Link>
          <Link to="/contact" className="btn btn--outline-dark">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
