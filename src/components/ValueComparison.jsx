import { Icon } from './icons.jsx'
import { valueIntro, valueComparisons } from '../data/valueComparisons.js'

// A brand-new section type for this portfolio: three real, specific price
// comparisons pulled from named customer reviews, laid out as a stat
// strip rather than a single quote banner.
export default function ValueComparison() {
  return (
    <section id="value" className="bg-royal-500 py-20 text-cream">
      <div className="container-page">
        <p className="eyebrow text-mustard-400">Real Numbers, Real Reviews</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl uppercase sm:text-4xl">
          {valueIntro}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {valueComparisons.map((v) => (
            <div key={v.label} className="rounded-sm border-2 border-cream/30 bg-royal-600 p-6">
              <div className="flex items-center gap-2 text-mustard-400">
                <Icon name="dollar-sign" className="h-5 w-5" />
                <p className="font-mono text-xs uppercase tracking-widest">{v.label}</p>
              </div>

              <div className="mt-5 flex items-end gap-3">
                <div>
                  <p className="font-mono text-xs uppercase text-cream/60">{v.beforeSource || 'before'}</p>
                  <p className="font-display text-xl text-cream/60 line-through decoration-maroon-300">
                    {v.before}
                  </p>
                </div>
                <Icon name="arrow" className="mb-2 h-4 w-4 text-mustard-400" />
                <div>
                  <p className="font-mono text-xs uppercase text-mustard-400">{v.afterSource}</p>
                  <p className="font-display text-2xl text-cream">{v.after}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-cream/85">&ldquo;{v.quote}&rdquo;</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-wide text-mustard-400">
                &mdash; {v.attribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
