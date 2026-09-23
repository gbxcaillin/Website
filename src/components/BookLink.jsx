import { Link } from 'react-router-dom'
import { site } from '../content.js'

/**
 * A call-to-action for booking a call. When a scheduler is configured
 * (site.bookingUrl, e.g. a Microsoft Bookings page), a booking link goes to the
 * on-site /book page, which embeds the scheduler so the flow stays on
 * gbxps.com. Until then, or for non-booking links, it falls back to an in-site
 * route (the contact form by default), so every button always does something
 * sensible.
 *
 * Props:
 *  - to: fallback route (default "/contact"); a "#hash" renders a plain anchor
 *  - book: true when this CTA should lead to the scheduler if one is set
 *  - className, children: passed through
 */
export default function BookLink({ to = '/contact', book = true, className, children, ...rest }) {
  if (book && site.bookingUrl) {
    return (
      <Link className={className} to="/book" {...rest}>
        {children}
      </Link>
    )
  }
  if (to.startsWith('#')) {
    return (
      <a className={className} href={to} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link className={className} to={to} {...rest}>
      {children}
    </Link>
  )
}
