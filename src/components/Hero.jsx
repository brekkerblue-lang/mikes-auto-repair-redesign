import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

// A new hero pattern for this portfolio: a full-bleed photo background
// (the shop's own real storefront) with a dark scrim, rather than the
// split-image layouts or separate TrustBar used in earlier entries.
export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src="/images/mikes-shop-streetview.png"
        alt="Mike's Auto Repair storefront at 934 N Wycoff Ave, Bremerton, WA"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-royal-700/60" />

      <div className="container-page relative py-24 sm:py-32">
        <p className="eyebrow text-mustard-400">Bremerton, Washington &middot; Family-Owned</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-[1.05] text-cream sm:text-6xl">
          The mechanic your neighbor already trusts.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/90">
          Customers have been coming back to this same blue building on N
          Wycoff Ave for fifteen, twenty years — for honest quotes, fair
          prices, and repairs done right the first time.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="btn-on-royal">
            Get an Estimate
            <Icon name="arrow" className="h-4 w-4" />
          </a>
          <a href={business.phoneHref} className="btn-outline border-cream text-cream hover:bg-cream hover:text-ink-900">
            <Icon name="phone" className="h-4 w-4" />
            {business.phone}
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-cream/20 pt-8">
          <div className="flex items-center gap-2">
            <div className="flex text-mustard-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="font-mono text-sm text-cream">
              {business.rating} &middot; {business.reviewCount} Google reviews
            </span>
          </div>
          <div className="flex items-center gap-2 text-cream">
            <Icon name="award" className="h-5 w-5 text-mustard-400" />
            <span className="font-mono text-sm">15&ndash;20+ years, same loyal customers</span>
          </div>
          <div className="flex items-center gap-2 text-cream">
            <Icon name="map-pin" className="h-5 w-5 text-mustard-400" />
            <span className="font-mono text-sm">{business.addressFull}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
