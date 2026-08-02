import { useState } from 'react'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title mt-3">Come see us on N Wycoff</h2>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-3">
              <Icon name="map-pin" className="mt-1 h-5 w-5 shrink-0 text-royal-500" />
              <div>
                <p className="font-bold text-ink-900">Address</p>
                <p className="text-ink-800/80">{business.addressFull}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="phone" className="mt-1 h-5 w-5 shrink-0 text-royal-500" />
              <div>
                <p className="font-bold text-ink-900">Phone</p>
                <a href={business.phoneHref} className="text-ink-800/80 hover:text-royal-600">
                  {business.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="mail" className="mt-1 h-5 w-5 shrink-0 text-royal-500" />
              <div>
                <p className="font-bold text-ink-900">Email</p>
                <a href={business.emailHref} className="break-all text-ink-800/80 hover:text-royal-600">
                  {business.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="clock" className="mt-1 h-5 w-5 shrink-0 text-royal-500" />
              <div>
                <p className="font-bold text-ink-900">Hours</p>
                <ul className="mt-1 space-y-0.5 text-sm text-ink-800/80">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-8">
                      <span>{h.day}</span>
                      <span className={h.time === 'Closed' ? 'text-ink-800/40' : ''}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-sm border-2 border-ink-900">
            <iframe
              title="Map to Mike's Auto Repair"
              width="100%"
              height="220"
              loading="lazy"
              className="block"
              src="https://www.google.com/maps?q=934+N+Wycoff+Ave,+Bremerton,+WA+98312&output=embed"
            />
            <a
              href={business.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-ink-900 py-2 text-sm font-bold uppercase tracking-wide text-cream hover:bg-royal-600"
            >
              Open in Maps <Icon name="arrow" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="rounded-sm border-2 border-ink-900 bg-royal-50 p-6 sm:p-8">
          <h3 className="font-display text-xl uppercase text-ink-900">Request an Estimate</h3>
          <p className="mt-1 text-sm text-ink-800/70">
            Tell us what's going on and we'll follow up to confirm a time.
          </p>

          {submitted ? (
            <div className="mt-6 rounded-sm border-2 border-royal-500 bg-cream p-6 text-center">
              <Icon name="check" className="mx-auto h-8 w-8 text-royal-500" />
              <p className="mt-3 font-bold text-ink-900">Thanks &mdash; message received.</p>
              <p className="mt-1 text-sm text-ink-800/70">
                {business.shortName} will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-bold text-ink-900" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-sm border-2 border-ink-900/30 bg-cream px-4 py-2.5 text-ink-900 outline-none focus:border-royal-500"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-ink-900" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    placeholder="(360) 000-0000"
                    className="mt-1 w-full rounded-sm border-2 border-ink-900/30 bg-cream px-4 py-2.5 text-ink-900 outline-none focus:border-royal-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-ink-900" htmlFor="vehicle">
                    Vehicle
                  </label>
                  <input
                    id="vehicle"
                    type="text"
                    placeholder="Year, make, model"
                    className="mt-1 w-full rounded-sm border-2 border-ink-900/30 bg-cream px-4 py-2.5 text-ink-900 outline-none focus:border-royal-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-bold text-ink-900" htmlFor="message">
                  What's going on?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us what you're noticing"
                  className="mt-1 w-full resize-none rounded-sm border-2 border-ink-900/30 bg-cream px-4 py-2.5 text-ink-900 outline-none focus:border-royal-500"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Request
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
