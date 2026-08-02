import { Icon } from './icons.jsx'
import { serviceAreaIntro, serviceAreaPlaces } from '../data/serviceArea.js'

// A brand-new section type: real customer hometowns (from their own
// Yelp/Google profiles and reviews) shown as a chip list, illustrating
// how far people travel for this shop.
export default function ServiceArea() {
  return (
    <section className="bg-mustard-50 py-20">
      <div className="container-page">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Who Drives In</p>
            <h2 className="section-title mt-3 max-w-xl">{serviceAreaIntro}</h2>
          </div>
          <Icon name="map-pinned" className="hidden h-12 w-12 text-royal-500 sm:block" />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreaPlaces.map((p) => (
            <div key={p.place} className="area-chip !w-full !justify-start !py-3">
              <Icon name="map-pin" className="h-4 w-4 shrink-0" />
              <span>
                <span className="font-bold">{p.place}</span>
                <span className="block text-xs font-normal text-royal-700/70">{p.note}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
