'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display text-gold tracking-wide">
              Dust
            </h3>
            <p className="text-beige/80 leading-relaxed">
              Serving Bloemfontein families with compassion, dignity, and excellence for over 7 years.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-gold" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-gold" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display text-gold mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Services', 'Funeral Cover', 'Pre-Planning', 'About Us', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-beige/80 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display text-gold mb-6 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-3">
              {['Burial Services', 'Cremation', 'Funeral Policies', 'Transportation', 'Tombstones', 'Repatriation'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-beige/80 hover:text-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display text-gold mb-6 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <a href="tel:+27511234567" className="text-beige/80 hover:text-gold transition-colors">
                    051-123-4567
                  </a>
                  <p className="text-beige/60 text-sm mt-1">24/7 Emergency Line</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@dust.co.za" className="text-beige/80 hover:text-gold transition-colors">
                  info@dust.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
                <address className="text-beige/80 not-italic">
                  123 Main Street<br />
                  Bloemfontein, 9301
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-charcoal-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-beige/60 text-sm">
            <p>
              © {currentYear} Dust Funeral Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
