'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Phone } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/80 via-charcoal/70 to-charcoal-dark/90 z-10" />
        {/* Placeholder for background image - replace with actual image */}
        <div className="w-full h-full bg-charcoal-dark bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyQzJDMkMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMnYxMkgzNnptMjQgMGgxMnYxMkg2MHpNMTIgMTE0aDEydjEySDF2IiBmaWxsPSIjMkMyQzJDIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-gold text-sm md:text-base tracking-[0.3em] uppercase font-medium">
            Available 24/7
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white mb-6 md:mb-8 px-4"
        >
          We're Here for You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-beige text-xl md:text-2xl mb-12 max-w-3xl mx-auto px-4 font-light tracking-wide"
        >
          Compassionate funeral services in Colesberg
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <a
            href="tel:+27511234567"
            className="btn-primary flex items-center gap-3 text-lg w-full sm:w-auto justify-center"
          >
            <Phone size={20} />
            <span>Call Now: 051-123-4567</span>
          </a>
          <a
            href="#services"
            className="btn-secondary text-lg w-full sm:w-auto justify-center"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-beige text-sm tracking-[0.2em] uppercase">
            Scroll Down
          </span>
          <ChevronDown className="text-gold" size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}
