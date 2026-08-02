import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

export default function CTA() {
  return (
    <section className="bg-maroon-500 py-16 text-cream">
      <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-2xl uppercase sm:text-3xl">
            Get a straight answer, not a sales pitch.
          </h2>
          <p className="mt-2 text-cream/85">
            Call, or send a quick note below &mdash; {business.shortName} will get back to you.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={business.phoneHref} className="btn-on-royal">
            <Icon name="phone" className="h-4 w-4" />
            {business.phone}
          </a>
          <a href="#contact" className="btn-outline border-cream text-cream hover:bg-cream hover:text-maroon-600">
            Send a Message
          </a>
        </div>
      </div>
    </section>
  )
}
