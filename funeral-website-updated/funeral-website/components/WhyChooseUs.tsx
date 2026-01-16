'use client'

import { motion } from 'framer-motion'
import { Heart, DollarSign, Clock } from 'lucide-react'

const reasons = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Our team treats every family with the utmost respect, dignity, and empathy. We understand that losing a loved one is never easy, and we're here to support you every step of the way with patience and understanding.',
    image: '🕊️', // Placeholder - replace with actual image
  },
  {
    icon: DollarSign,
    title: 'Affordable Payment Plans',
    description: 'We believe everyone deserves a dignified farewell, regardless of financial circumstances. Our flexible payment plans and comprehensive funeral cover options ensure quality service is accessible to all families.',
    image: '🤝', // Placeholder - replace with actual image
  },
  {
    icon: Clock,
    title: 'Available When You Need Us',
    description: 'Death doesn't follow business hours, and neither do we. Our dedicated team is available 24 hours a day, 7 days a week, 365 days a year. One call is all it takes to get the help and guidance you need.',
    image: '📞', // Placeholder - replace with actual image
  },
]

export default function WhyChooseUs() {
  return (
    <section id="features" className="section-padding bg-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-charcoal mb-4">
            Why Families Choose Us
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto font-light">
            Decades of experience, genuine compassion, and unwavering commitment to serving our community
          </p>
        </motion.div>

        <div className="space-y-32">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image/Icon Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className={`${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <div className="bg-beige-light p-12 rounded-sm flex items-center justify-center aspect-square">
                  <reason.icon className="text-gold" size={120} strokeWidth={1} />
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <div className="inline-block">
                  <div className="w-14 h-14 bg-gold/10 rounded-sm flex items-center justify-center">
                    <reason.icon className="text-gold" size={28} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-charcoal">
                  {reason.title}
                </h3>

                <p className="text-charcoal/70 text-lg leading-relaxed">
                  {reason.description}
                </p>

                <a
                  href="#contact"
                  className="inline-block text-gold font-medium tracking-wide hover:underline"
                >
                  Learn more about our approach →
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
