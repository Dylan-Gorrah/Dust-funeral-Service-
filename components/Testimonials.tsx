'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "The team at Dust made an incredibly difficult time bearable. Their compassion and professionalism were exactly what our family needed.",
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
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Auto-scroll to current testimonial when it changes
  useEffect(() => {
    scrollToTestimonial(currentIndex)
  }, [currentIndex])

  const scrollToTestimonial = (index: number) => {
    setCurrentIndex(index)
    const container = document.getElementById('testimonials-carousel')
    if (container) {
      const cardWidth = 320 // Match card width + gap
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      })
    }
  }
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

        {/* Mobile Horizontal Carousel */}
        <div className="md:hidden relative">
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mb-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-gold' : 'bg-charcoal/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div 
            id="testimonials-carousel"
            className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide"
          >
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 w-[320px] flex-shrink-0 ${
                    currentIndex === index ? 'ring-2 ring-gold/30' : ''
                  }`}
                >
                  <div className="mb-4">
                    <Quote className="text-gold" size={32} strokeWidth={1.5} />
                  </div>

                  <p className="text-charcoal/80 mb-4 leading-relaxed italic text-sm">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-charcoal/10">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                      <span className="text-gold font-display font-semibold text-sm">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-charcoal text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-charcoal/60">
                        {testimonial.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
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
