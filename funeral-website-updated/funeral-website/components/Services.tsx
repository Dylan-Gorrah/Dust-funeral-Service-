'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, FileText, Users } from 'lucide-react'

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
    description: 'Plan ahead and ease the burden on your loved ones. Lock in today's prices and make your wishes known in advance.',
  },
  {
    icon: Users,
    title: 'Memorial Services',
    description: 'Beautiful memorial services that honor and celebrate the life of your loved one. Personalized tributes that bring comfort and closure.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
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
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
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
        <div className="md:hidden overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide">
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
