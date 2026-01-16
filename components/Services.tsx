'use client'

import { motion, useInView } from 'framer-motion'
import { Heart, Shield, FileText, Users } from 'lucide-react'
import { useRef } from 'react'

const services = [
  {
    icon: Heart,
    title: 'Complete Funeral Services',
    description: 'From collection to burial, we handle every detail with dignity and respect. Traditional and contemporary services tailored to your needs.',
  },
  {
    icon: Shield,
    title: 'Funeral Cover Plans',
    description: 'Affordable monthly premiums that ensure your family is protected. Multiple plan options to suit every budget and requirement.',
  },
  {
    icon: FileText,
    title: 'Pre-Planning Services',
    description: 'Plan ahead and ease the burden on your loved ones. Lock in today\'s prices and make your wishes known in advance.',
  },
  {
    icon: Users,
    title: 'Memorial Services',
    description: 'Beautiful memorial services that honor and celebrate the life of your loved one. Personalized tributes that bring comfort and closure.',
  },
]

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(servicesRef, { once: false, amount: 0.3 })

  return (
    <section id="services" className="section-padding bg-white" ref={servicesRef}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-charcoal mb-4">
            How We Can Help
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto font-light">
            Comprehensive funeral services designed to honor your loved ones with dignity and care
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -10, scale: 1.02 }}
              animate={isInView ? { y: [0, -5, 0] } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ...(isInView && { y: { duration: 2, repeat: Infinity, repeatDelay: 1 } })
              }}
              className="card group cursor-pointer"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gold/10 rounded-sm flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="text-gold" size={32} strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl font-display text-charcoal mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-charcoal/70 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6">
                <span className="text-gold font-medium text-sm tracking-wide uppercase group-hover:underline">
                  Learn More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden relative">
          {/* Scroll Indicators */}
          <button
            onClick={() => {
              const container = document.getElementById('mobile-services-container')
              if (container) {
                container.scrollBy({ left: -300, behavior: 'smooth' })
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gold/20"
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <button
            onClick={() => {
              const container = document.getElementById('mobile-services-container')
              if (container) {
                container.scrollBy({ left: 300, behavior: 'smooth' })
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gold/20"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div 
            id="mobile-services-container"
            className="overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide"
          >
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  animate={isInView ? { y: [0, -5, 0] } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ...(isInView && { y: { duration: 2, repeat: Infinity, repeatDelay: 1 } })
                  }}
                  className="card group cursor-pointer w-[280px] flex-shrink-0"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gold/10 rounded-sm flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                      <service.icon className="text-gold" size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display text-charcoal mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-charcoal/70 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6">
                    <span className="text-gold font-medium text-sm tracking-wide uppercase group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary text-lg">
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
