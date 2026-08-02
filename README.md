# Mike's Auto Repair — Website Redesign

A brand-new website for Mike's Auto Repair, built with React + Vite +
Tailwind CSS, pulling the business's own real colors, quotes, and real
photos of its actual shop from its Google Business Profile, Yelp, and the
NAPA AutoCare directory.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Why this business

Mike's Auto Repair (934 N Wycoff Ave, Bremerton, WA) was found following
the standing rule for new redesigns in this series: find a business with a
listed email and no website. This business has **no website at all**, a
real, working email address (found via NAPA's AutoCare Center directory,
cross-validated against matching hours and address on Google Maps), an
outstanding 4.9-star rating across 80 Google reviews (4.9 stars across 43
Yelp reviews — 55 combined reviews total), and an unusually long track
record of named customers who describe returning for 15-20+ years.

This is the thirteenth entry in this portfolio. Every business already
built or fully contacted in this series was checked and ruled out first
(Bremerton Auto Repair, Brothers Auto Repair, DME Auto Service, Frontier
Auto Center, Gilmore's Automotive Services, Hall-N-Sons Automotive Repair,
L & R Automotive, North Shore Auto Works, NW Mobile Auto Repair, Orca Auto
Repair, Triangle Import Repair, and Rolling Bay Automotive, which has no
local folder but was confirmed already contacted via Gmail Sent-folder
history).

### A note on the candidate this replaced

Research for this entry originally considered a "Mike's Repair" location
on Hansville Rd near Kingston, WA. That candidate was **dropped after
vetting turned up real reputational red flags**: recent reviews described
a rude phone interaction ("I asked if they do oil changes and this rude
voice says 'YOU MUST HAVE THE WRONG NUMBER'... it killed my mood") and a
direct warning from another reviewer ("I wouldn't bring anything to this
shop!! They're rude, disrespectful and unprofessional."). Building a
trust-focused marketing site around a business with recent, specific
rudeness complaints like that didn't seem like the right call, so research
moved on to Mike's Auto Repair in Bremerton instead — a completely
different, unrelated business that passed every reputation check cleanly.

## Sourcing — what's real vs. what was designed

- **Business facts** (name, address, phone, rating, review count) —
  Google Maps business listing, confirmed 2026-08-02.
- **Email** — the shop's own listing in NAPA's AutoCare Center directory
  (napaonline.com): `dillon750@yahoo.com`. NAPA's listed hours (Mon-Fri
  8:00 AM-5:00 PM, Sat/Sun Closed) and address matched Google Maps exactly,
  reinforcing confidence this is the real, actively-used contact address.
- **Reputation vetting** — checked Google reviews, Yelp's main review page,
  and Yelp's filtered "not currently recommended" section (both pages, all
  12 filtered reviews read in full) specifically looking for red flags.
  Every filtered review was still positive in substance; no red flags of
  any kind turned up anywhere across either platform.
- **Services** — drawn directly from real review content: diagnostics and
  general repair (the most frequently praised strength), brake service,
  transmission repair, suspension/steering, scheduled maintenance, and
  AC/electrical work, each grounded in a specific real customer story
  rather than a generic service-menu list.
- **Real savings comparisons** — three specific, named price comparisons
  pulled directly from customer reviews: Michael F.'s Toyota service
  (dealer quoted $1,000+, Mike's charged $378), a customer's brake job
  (dealer/other shop quoted $800, saved $500+ at Mike's), and Mary Lynne
  C.'s transmission repair ("hundreds less" than elsewhere). These are
  reproduced as real customer testimony, not marketing copy.
- **Service area** — six real customer hometowns mentioned in reviews
  (Bremerton, Seattle, Gig Harbor, Shelton, Port Ludlow, Silverdale),
  reflecting how far people are shown to travel for this shop specifically.
- **Review content** — a dense "wall of trust" grid of nine short, named,
  verbatim quotes (Danilo M., Grace Crowley, Thomas James, theresa
  trotland, Michael F., Jasmine T., Cassie M., Rick D., Farb H.) reflecting
  this business's unusually large volume of specific, named testimonials,
  plus a top-of-section highlight strip pulled from Google's own
  AI-generated review-summary quotes.
- **About section** — narrates the shop's real history and the Mike/Kevin
  working dynamic, sourced from Naomi P.'s Yelp review naming both by name
  and describing the day-to-day shop experience; every fact used there is
  documented inline in `src/data/about.js` with its exact source.
- **Photos — used directly per the standing "skip photo approval" rule**
  (best available real photo used without a per-photo chat pause; sourcing
  documented transparently here instead):
  - `public/images/mikes-shop-streetview.png` — the shop's real storefront
    at 934 N Wycoff Ave, captured from Google Street View, with the
    building's address number, painted signage, and phone number legible
    in-frame (ruling out any misattribution risk). The Street View capture
    UI persistently overlaid a pulsing location-pin marker directly on top
    of the readable signage across multiple attempted camera pan angles;
    rather than accept a photo with UI chrome baked in, the final image was
    produced with a tightly-bounded crop region of the full-resolution
    screenshot that geometrically excludes the pin's on-screen position
    while retaining the full readable sign, address, and phone number.
  - `public/images/mikes-action-photo.png` — a genuine customer-uploaded
    "in action" repair photo from this business's own Google Maps photo
    gallery.
  - One photo in this listing's Google Maps gallery was rejected outright:
    its caption read "Mike's Auto Repair &middot; Platinum Wash 360" and
    the image itself showed an entirely unrelated pressure-washing
    company's branded van, not this shop — a clear photo-misattribution
    case caught by checking every photo's caption, not just the first one.
- **Colors** — every value in `tailwind.config.js`'s `royal`, `mustard`,
  and `maroon` palettes was sampled with a Python/Pillow pixel color
  picker directly from the real storefront photo, using individual
  well-lit point samples (rather than region averages, which read muddy
  under the photo's uneven outdoor lighting): royal blue signage/trim,
  mustard-yellow accent band, and a deep maroon undertone from the
  building's brick.

No AI-generated imagery is used anywhere in this project.

## Design system

Archivo Black is the bold, condensed display face used for the wordmark
and headlines — a different, heavier feel from any prior entry in this
portfolio, chosen to match the shop's straightforward, no-nonsense
reputation. Archivo is the body face; Space Mono renders stamped details
like hours, stats, and review metadata.

### Structure — intentionally varied again from earlier entries

Per the standing instruction to keep varying this portfolio's page
structure, this site's section order and component types are deliberately
different from every earlier entry, including Gilmore's most recent
split-Hero/accordion-Services/DieselSpecialty pattern:

- **Hero** is a full-bleed photo background (the real storefront photo
  fills the section with a dark gradient scrim under the headline and
  stats) rather than a split layout or a separate TrustBar.
- **ValueComparison** is a brand-new section type for this portfolio: three
  real, specific dealer-vs-shop price comparisons as stat cards, each with
  a verbatim customer quote.
- **Services** is a plain card grid rather than a numbered list or
  accordion.
- **ServiceArea** is a brand-new section type: a chip grid of real customer
  hometowns showing this shop's geographic reach.
- **About** pairs real narrative paragraphs and a pull-quote with a second
  real "in action" repair photo (distinct from the Hero's storefront shot).
- **Reviews** is a dense "wall of trust" grid of nine short quotes rather
  than one or two long-form testimonials, reflecting this business's
  unusually large volume of specific, named reviews.

## Verification note

This project's dependencies were **not installed and the dev server was
not run** in the sandbox that produced this code — outbound network access
to the npm registry (`registry.npmjs.org`) returned 403 Forbidden for this
session, consistent with every prior redesign in this portfolio. Every
`.jsx`/`.js` file was syntax- and import-checked with the TypeScript
compiler (`tsc --jsx react-jsx --noEmit --allowJs --skipLibCheck`) as a
stand-in — clean, zero errors. Every icon name referenced from
`src/components/icons.jsx` (including icons referenced dynamically via
data-driven icon props) was cross-checked against both the icon registry
and the installed `react-icons/lu` package's own type declarations — all
23 confirmed present. Every Tailwind color class used across the project
was cross-checked against the tokens defined in `tailwind.config.js` (one
apparent mismatch, `ink-0`, was traced and confirmed to be a regex
false-positive from the unrelated `shrink-0` utility class, not a real
bug). Every field referenced from `src/data/business.js`,
`src/data/services.js`, `src/data/valueComparisons.js`,
`src/data/serviceArea.js`, `src/data/testimonials.js`, and
`src/data/about.js` was confirmed to actually exist in those files.

## File structure

```
src/
  main.jsx              Entry point
  App.jsx                Page composition (varied section order — see above)
  index.css              Tailwind layers + shared component classes
  components/
    Header.jsx             Sticky nav with a text wordmark
    Hero.jsx                 Full-bleed real photo background + stats
    ValueComparison.jsx        New: real dealer-vs-shop price comparisons
    Services.jsx                 Plain card grid, review-grounded services
    ServiceArea.jsx                 New: real customer hometown chip grid
    About.jsx                        Family story + real second photo
    Reviews.jsx                       "Wall of trust" — nine real quotes
    CTA.jsx                            Conversion band
    Contact.jsx                        Address/phone/email/hours/form/map
    Footer.jsx
    icons.jsx                        react-icons/lu registry
  data/
    business.js            Core business facts
    services.js               Service list + mission line
    valueComparisons.js         Real price-comparison stat cards
    serviceArea.js                 Real customer hometown list
    testimonials.js                   Real review quotes + wall grid
    about.js                            Family-story narrative + sourcing
public/
  images/                mikes-shop-streetview.png, mikes-action-photo.png
  favicon.svg
```
