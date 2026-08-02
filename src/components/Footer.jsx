import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#value', label: 'Real Savings' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-900 py-14 text-cream">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl uppercase text-royal-400">Mike&rsquo;s</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-maroon-400">
            Auto Repair
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            A family-run garage at 934 N Wycoff Ave in Bremerton, WA &mdash;
            {' '}{business.rating} stars across {business.reviewCount} Google
            reviews, trusted by the same customers for 15&ndash;20+ years.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cream/50">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-cream/70 hover:text-mustard-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cream/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>{business.addressFull}</li>
            <li>
              <a href={business.phoneHref} className="hover:text-mustard-400">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="inline-flex items-center gap-1.5 break-all hover:text-mustard-400">
                <Icon name="mail" className="h-3.5 w-3.5 shrink-0" />
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cream/50">Hours</p>
          <ul className="mt-4 space-y-1 text-sm text-cream/70">
            {business.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className={h.time === 'Closed' ? 'text-cream/40' : ''}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 border-t border-cream/10 pt-6 text-xs text-cream/50">
        <p>&copy; {new Date().getFullYear()} Mike&rsquo;s Auto Repair. All rights reserved.</p>
      </div>
    </footer>
  )
}
