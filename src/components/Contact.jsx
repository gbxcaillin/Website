import { useState } from 'react'
import { contact, site } from '../content.js'

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
      const res = await fetch(site.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
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
              <dd>{site.city}</dd>
            </div>
            <div>
              <dt className="mono">Hours</dt>
              <dd>Monday to Friday, 9am to 5.30pm AEST</dd>
            </div>
          </dl>
        </div>

        <form
          className="form"
          action={site.formspreeEndpoint}
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

          <div className="form__row">
            <label className="field">
              <span className="field__label">Organisation</span>
              <input name="organisation" type="text" autoComplete="organization" />
            </label>
            <label className="field">
              <span className="field__label">Area of interest</span>
              <select name="interest" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {contact.interests.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="field">
            <span className="field__label">Message</span>
            <textarea name="message" rows="5" required />
          </label>

          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="visually-hidden" aria-hidden="true" />
          <input type="hidden" name="_subject" value="New enquiry via gbxps.com" />

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
