import { Icon } from './icons.jsx'
import { business } from '../data/business.js'
import { summaryHighlights, wallQuotes, reviewTags } from '../data/testimonials.js'

// A dense "wall of trust" grid -- a new layout for this portfolio, chosen
// because this shop has an unusually large volume of short, specific,
// named quotes spanning more than a decade, rather than a couple of long
// stand-out testimonials.
export default function Reviews() {
  return (
    <section id="reviews" className="bg-ink-900 py-20 text-cream">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-mustard-400">The Wall of Trust</p>
            <h2 className="mt-3 font-display text-3xl uppercase sm:text-4xl">
              What Bremerton actually says
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="flex text-mustard-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="font-mono text-sm">
                {business.rating} &middot; {business.reviewCount} Google
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-mustard-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="font-mono text-sm">
                {business.yelpRating} &middot; {business.yelpReviewCount} Yelp
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {summaryHighlights.map((h) => (
            <p
              key={h}
              className="rounded-sm border border-mustard-400/40 bg-cream/5 px-4 py-2 text-sm italic text-cream/90"
            >
              &ldquo;{h}&rdquo;
            </p>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wallQuotes.map((q) => (
            <div key={q.name} className="rounded-sm border border-cream/15 bg-ink-800 p-5">
              <div className="flex text-mustard-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-cream/90">&ldquo;{q.text}&rdquo;</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-wide text-cream/50">
                {q.name} &middot; {q.source}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-cream/10 pt-8">
          {reviewTags.map((t) => (
            <span key={t.label} className="tag-chip border-cream/20 bg-transparent text-cream/80">
              {t.label} &middot; {t.count}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
