import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, bookingPage, site } from '../content.js'
import PageHero from '../components/PageHero.jsx'

/**
 * Booking page. Embeds the Microsoft Bookings scheduler (site.bookingUrl) in a
 * frame so the whole flow stays on gbxps.com and the underlying mailbox URL is
 * not shown in the address bar. A visible fallback link opens the scheduler in
 * a new tab if the frame is blocked or slow.
 */
export default function BookPage() {
  usePageMeta(pageMeta.book)
  return (
    <>
      <PageHero eyebrow={bookingPage.eyebrow} title={bookingPage.heading} intro={bookingPage.intro} />
      <section className="section section--paper">
        <div className="container">
          {site.bookingUrl && (
            <div className="book-embed">
              <iframe
                className="book-embed__frame"
                src={site.bookingUrl}
                title="Book a call with GBX Professional Services"
                loading="lazy"
              />
            </div>
          )}
          <p className="book-embed__fallback">
            {bookingPage.fallback}{' '}
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-link">
              {bookingPage.fallbackCta}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
