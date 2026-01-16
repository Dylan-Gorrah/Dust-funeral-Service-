'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ImmediateHelp() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })
  const [isFormFocused, setIsFormFocused] = useState(false)

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format message for WhatsApp
    const whatsappMessage = `Hello, my name is ${formData.name}.%0A%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`
    
    // WhatsApp API link (using demo number)
    const whatsappURL = `https://wa.me/27511234567?text=${whatsappMessage}`
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank')
    
    // Clear form
    setFormData({ name: '', phone: '', message: '' })
    
    // Scroll form to center for optimal reading
    setTimeout(() => {
      const formElement = document.getElementById('whatsapp-form')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }

  return (
    <section id="help" className="section-padding bg-beige">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-charcoal">
              Need Help Right Now?
            </h2>
            
            <p className="text-xl text-charcoal/80 font-light">
              We understand this is a difficult time. Our compassionate team is available 24/7 to guide you through every step.
            </p>

            <div className="space-y-4">
              {/* Phone */}
              <motion.a
                href="tel:+27511234567"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="bg-gold/10 p-3 rounded-sm group-hover:bg-gold/20 transition-colors">
                  <Phone className="text-gold" size={24} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm text-charcoal/60 tracking-wide uppercase mb-1">
                    Call Us Anytime
                  </div>
                  <div className="text-2xl font-display text-charcoal group-hover:text-gold transition-colors">
                    051-123-4567
                  </div>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/27511234567"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="bg-gold/10 p-3 rounded-sm group-hover:bg-gold/20 transition-colors">
                  <MessageCircle className="text-gold" size={24} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm text-charcoal/60 tracking-wide uppercase mb-1">
                    Message on WhatsApp
                  </div>
                  <div className="text-xl font-display text-charcoal group-hover:text-gold transition-colors">
                    Chat with us instantly
                  </div>
                </div>
              </motion.a>

              {/* 24/7 Badge */}
              <div className="flex items-center gap-3 text-charcoal/70">
                <Clock size={20} className="text-gold" />
                <span className="text-lg font-medium">
                  We answer every call personally, 24 hours a day
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <h3 className="text-charcoal mb-2">Message Us on WhatsApp</h3>
              <p className="text-charcoal/60 mb-6">
                Or use the quick contact options
              </p>
              
              <form id="whatsapp-form" onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Brief message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  <span>Continue on WhatsApp</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
