import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ValueComparison from './components/ValueComparison.jsx'
import Services from './components/Services.jsx'
import ServiceArea from './components/ServiceArea.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// Structure intentionally varies again from every earlier entry in this
// portfolio (formulaic original; Hall-N-Sons' Hero/TrustBar/About/
// Services/Reviews; Gilmore's split-Hero/accordion-Services/
// DieselSpecialty/text-About/two-testimonial-Reviews): this Hero is a
// full-bleed photo background rather than a split layout or a separate
// TrustBar; ValueComparison is a brand-new section type built around
// three real, specific price comparisons from named reviews; Services is
// a plain card grid rather than a numbered list or accordion;
// ServiceArea is a brand-new section showing real customer hometowns;
// About pairs a real "in action" repair photo with the shop's own
// storefront already used in the Hero; and Reviews is a dense "wall of
// trust" grid of many short quotes rather than one or two long
// testimonials.
export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <ValueComparison />
        <Services />
        <ServiceArea />
        <About />
        <Reviews />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
