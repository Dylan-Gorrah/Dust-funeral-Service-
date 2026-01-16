'use client'

import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollDots from '@/components/ScrollDots'
import FloatingContactButton from '@/components/FloatingContactButton'
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
      <ScrollProgress />
      <ScrollDots />
      <FloatingContactButton />
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
