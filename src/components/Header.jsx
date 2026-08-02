import { useState } from 'react'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#value', label: 'Real Savings' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink-900 bg-cream">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-2xl uppercase text-royal-500">Mike&rsquo;s</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-maroon-500">
            Auto Repair
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold uppercase tracking-wide text-ink-800 hover:text-royal-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={business.phoneHref}
            className="text-sm font-bold uppercase tracking-wide text-ink-900"
          >
            {business.phone}
          </a>
          <a href="#contact" className="btn-primary">
            Get an Estimate
          </a>
        </div>

        <button
          className="p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? 'x' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="border-t-4 border-ink-900 bg-cream lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 text-sm font-bold uppercase tracking-wide text-ink-800"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-3" onClick={() => setOpen(false)}>
              Get an Estimate
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
