import { useState } from 'react'
import { contact, site } from '../content.js'
import conversationWebp from '../assets/contact-conversation.webp'
import conversationJpg from '../assets/contact-conversation.jpg'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: bots fill hidden fields, humans do not.
    if (data.get('_gotcha')) return

    setStatus('sending')
    try {
      const res = await fetch(site.leadEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          kind: 'contact',
          source: 'Contact enquiry',
          email: data.get('email') || '',
          name: data.get('name') || '',
          fields: {
            organisation: data.get('organisation') || '',
            interests: data.getAll('interest'),
          },
          summary: data.get('message') || '',
          page: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section section--soft" id="contact" aria-labelledby="contact-heading">
      <div className="container contact">
        <div className="contact__copy">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 id="contact-heading" className="section__heading">
            {contact.heading}
          </h2>
          <p className="section__intro">{contact.intro}</p>

          <dl className="contact__details">
            <div>
              <dt className="mono">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-link">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="mono">Office</dt>
              <dd>{site.address}</dd>
            </div>
            <div>
              <dt className="mono">Hours</dt>
              <dd>Monday to Friday, 9am to 5.30pm AEST</dd>
            </div>
          </dl>

          <div className="contact__image" aria-hidden="true">
            <picture>
              <source srcSet={conversationWebp} type="image/webp" />
              <img src={conversationJpg} alt="" width="1000" height="667" loading="lazy" />
            </picture>
          </div>
        </div>

        <form
          className="form"
          action={site.leadEndpoint}
          method="POST"
          onSubmit={onSubmit}
          aria-describedby="form-status"
        >
          <div className="form__row">
            <label className="field">
              <span className="field__label">Name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label className="field">
              <span className="field__label">Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>

          <label className="field">
            <span className="field__label">Organisation</span>
            <input name="organisation" type="text" autoComplete="organization" />
          </label>

          <fieldset className="field field--fieldset">
            <legend className="field__label">
              {contact.interestsLabel}{' '}
              <span className="field__hint">{contact.interestsHint}</span>
            </legend>
            <div className="checkbox-grid">
              {contact.interests.map((i) => (
                <label key={i} className="checkbox">
                  <input type="checkbox" name="interest" value={i} />
                  <span className="checkbox__label">{i}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="field">
            <span className="field__label">Message</span>
            <textarea name="message" rows="5" required />
          </label>

          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="visually-hidden" aria-hidden="true" />

          <div className="form__footer">
            <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending' : 'Send enquiry'}
            </button>
            <p id="form-status" className="form__status" role="status" aria-live="polite">
              {status === 'sent' && 'Thank you. Your message has been sent and we will be in touch shortly.'}
              {status === 'error' && `Something went wrong. Please email us directly at ${site.email}.`}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
