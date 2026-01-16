'use client'

import Navigation from '@/components/Navigation'
import ContactButton from '@/components/ContactButton'
import Hero from '@/components/Hero'
import ImmediateHelp from '@/components/ImmediateHelp'
import Services from '@/components/Services'
import TrustIndicators from '@/components/TrustIndicators'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <ContactButton />
      <Navigation />
      <Hero />
      <ImmediateHelp />
      <Services />
      <TrustIndicators />
      <WhyChooseUs />
      <Testimonials />
      <Locations />
      <Footer />
    </main>
  )
}
