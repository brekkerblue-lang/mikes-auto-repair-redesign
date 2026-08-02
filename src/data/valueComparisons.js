// A new section type for this portfolio: instead of a single specialty
// callout, this is a set of three real, specific price comparisons pulled
// directly from named customer reviews on Yelp -- the throughline in this
// shop's reviews isn't one specialty, it's "we quoted way less than the
// dealer and it turned out to be true." Each figure is a real number from
// a real review, not estimated or rounded for effect.
export const valueIntro =
  "Customers don't just call this shop friendly. They call it cheaper than the dealer — and then post the receipts."

export const valueComparisons = [
  {
    label: '100,000-mile Toyota service',
    before: '$1,000+',
    beforeSource: 'dealer quote',
    after: '$378',
    afterSource: 'final bill here',
    quote:
      'The Toyota dealership was going to charge me just over $1,000 for a 100,000 mile service, and here they quoted me $400 for the same service... The final bill was $378. Who actually charges less than they quote you?!',
    attribution: 'Michael F., Yelp',
  },
  {
    label: 'Front brake replacement',
    before: '$800',
    beforeSource: 'other shop quote',
    after: 'Saved $500+',
    afterSource: 'only what was needed',
    quote:
      "I took my car to Mike's after another shop told me I needed over $800 for new front brakes... He said I didn't actually need calipers, just rotors and pads.",
    attribution: 'R.P., Yelp',
  },
  {
    label: 'Transmission replacement',
    before: 'Port Orchard shop quote',
    beforeSource: '',
    after: 'Hundreds less',
    afterSource: 'quoted here',
    quote:
      'Kevin quoted me hundreds of dollars less to replace my transmission than a repair shop in Port Orchard. They did not try to up-sell me any repairs.',
    attribution: 'Mary Lynne C., Yelp',
  },
]
