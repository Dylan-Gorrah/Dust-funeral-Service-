'use client'

import { motion, useAnimation } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useEffect } from 'react'

export default function FloatingContactButton() {
  const controls = useAnimation()

  useEffect(() => {
    // Initial slide-in animation
    controls.start({
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 1,
      },
    })

    // Pulse animation every 7 seconds
    const pulseInterval = setInterval(() => {
      controls.start({
        scale: [1, 1.1, 1],
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      })
    }, 7000)

    return () => clearInterval(pulseInterval)
  }, [controls])

  return (
    <motion.a
      href="tel:+27511234567"
      initial={{ x: 100, opacity: 0 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 bg-gold text-white rounded-full p-4 shadow-2xl hover:bg-gold-dark transition-colors duration-300 group"
      aria-label="Call us now"
    >
      <div className="relative">
        <Phone size={28} />
        
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-charcoal text-white px-4 py-2 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="font-medium">Call us 24/7</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-charcoal border-b-8 border-b-transparent" />
          </div>
        </div>
      </div>
    </motion.a>
  )
}
