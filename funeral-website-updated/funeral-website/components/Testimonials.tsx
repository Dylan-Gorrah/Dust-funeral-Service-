'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "The team at Demo-Name made an incredibly difficult time bearable. Their compassion and professionalism were exactly what our family needed.",
    author: "M. van der Merwe",
    year: "2024",
    initials: "MV",
  },
  {
    quote: "From the first phone call to the final arrangements, everything was handled with such care and respect. I cannot thank them enough for their support.",
    author: "T. Molefe",
    year: "2024",
    initials: "TM",
  },
  {
    quote: "The funeral cover plan gave us peace of mind, and when the time came, they took care of everything seamlessly. Truly professional service.",
    author: "S. Botha",
    year: "2023",
    initials: "SB",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-charcoal mb-4">
            What Families Say
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto font-light">
            The trust families place in us is our greatest honor
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6">
                <Quote className="text-gold" size={40} strokeWidth={1.5} />
              </div>

              <p className="text-charcoal/80 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-charcoal/10">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-gold font-display font-semibold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-charcoal">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-charcoal/60">
                    {testimonial.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-charcoal/70 text-lg">
            Join the thousands of families who have trusted us with their loved ones
          </p>
        </motion.div>
      </div>
    </section>
  )
}
