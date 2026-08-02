import { Icon } from './icons.jsx'
import { aboutQuote, aboutQuoteAttribution, aboutParagraphs } from '../data/about.js'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Mike &amp; Kevin</p>
          <h2 className="section-title mt-3">Same shop, same faces, for years</h2>

          <div className="mt-6 space-y-4">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="text-ink-800/85 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <blockquote className="mt-8 border-l-4 border-maroon-500 bg-maroon-50 py-4 pl-6 pr-4">
            <div className="flex items-start gap-3">
              <Icon name="quote" className="mt-1 h-6 w-6 shrink-0 text-maroon-400" />
              <div>
                <p className="italic text-ink-900">{aboutQuote}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wide text-maroon-600">
                  &mdash; {aboutQuoteAttribution}
                </p>
              </div>
            </div>
          </blockquote>
        </div>

        <div className="relative">
          <img
            src="/images/mikes-action-photo.png"
            alt="A Mike's Auto Repair mechanic working under the hood of a customer's vehicle outside the shop"
            className="w-full rounded-sm border-4 border-ink-900 object-cover shadow-lg"
          />
          <div className="absolute -bottom-5 -left-5 hidden rounded-sm border-4 border-cream bg-mustard-500 px-5 py-3 sm:block">
            <p className="font-display text-2xl text-ink-900">15&ndash;20+</p>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-900">
              years, same customers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
