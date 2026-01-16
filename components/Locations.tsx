'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function Locations() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-charcoal mb-4">
            Find Us in Bloemfontein
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto font-light">
            Visit our office or contact us anytime, day or night
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="bg-beige-light rounded-sm overflow-hidden h-[400px] flex items-center justify-center"
          >
            <div className="text-center p-8">
              <MapPin className="text-gold mx-auto mb-4" size={64} strokeWidth={1.5} />
              <p className="text-charcoal/60">
                Google Maps integration goes here
              </p>
              <p className="text-sm text-charcoal/40 mt-2">
                Replace with actual embedded map
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center">
                  <MapPin className="text-gold" size={24} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display text-charcoal mb-2">Address</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  123 Main Street<br />
                  Bloemfontein<br />
                  Free State, 9301<br />
                  South Africa
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center">
                  <Clock className="text-gold" size={24} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display text-charcoal mb-2">Operating Hours</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Office: Monday - Friday, 8:00 AM - 5:00 PM<br />
                  Saturday: 8:00 AM - 1:00 PM
                </p>
                <p className="text-gold font-medium mt-2">
                  24/7 Emergency Line Always Available
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center">
                  <Phone className="text-gold" size={24} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display text-charcoal mb-2">Phone</h3>
                <a
                  href="tel:+27511234567"
                  className="text-charcoal/70 hover:text-gold transition-colors text-lg"
                >
                  051-123-4567
                </a>
                <p className="text-sm text-charcoal/50 mt-1">Available 24/7</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center">
                  <Mail className="text-gold" size={24} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display text-charcoal mb-2">Email</h3>
                <a
                  href="mailto:info@demo-name.co.za"
                  className="text-charcoal/70 hover:text-gold transition-colors"
                >
                  info@demo-name.co.za
                </a>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
