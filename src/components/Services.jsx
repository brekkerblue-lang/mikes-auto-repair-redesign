import { Icon } from './icons.jsx'
import { missionLine, services } from '../data/services.js'

// A plain, even card grid -- deliberately different from Hall-N-Sons'
// numbered list and Gilmore's interactive accordion.
export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-page">
        <p className="eyebrow">What We Fix</p>
        <h2 className="section-title mt-3 max-w-2xl">Every service, backed by a real story</h2>
        <p className="mt-4 max-w-2xl text-ink-800/80">{missionLine}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-sm border-2 border-ink-900 bg-cream p-6 transition hover:bg-royal-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-royal-500 text-cream">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg uppercase text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-800/80">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
