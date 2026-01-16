'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Phone, Mail, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [pulseCount, setPulseCount] = useState(0)
  
  const { scrollY } = useScroll()

  // Show button after scrolling past hero section completely
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight && !showButton) {
        setShowButton(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [showButton])

  // Start sonic boom countdown after button appears
  useEffect(() => {
    if (!showButton) return

    const interval = setInterval(() => {
      setPulseCount(prev => prev + 1)
    }, 7000) // Every 7 seconds

    return () => clearInterval(interval)
  }, [showButton])

  // Detect if user is on mobile
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  // Handle phone number click
  const handlePhoneClick = () => {
    const phoneNumber = '+27511234567'
    
    if (isMobile()) {
      window.location.href = `tel:${phoneNumber}`
    } else {
      navigator.clipboard.writeText(phoneNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Handle email click
  const handleEmailClick = () => {
    const email = 'info@dust.co.za'
    window.location.href = `mailto:${email}`
  }

  if (!showButton) return null

  return (
    <>
      {/* Floating Contact Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 20,
          delay: 0.3,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Open contact options"
      >
        {/* Sonic Boom Effect Container */}
        <div className="relative">
          {/* Outer sonic boom ring - most dramatic */}
          <motion.span
            key={`outer-${pulseCount}`}
            className="absolute inset-0 rounded-full border-2 border-gold"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 2.5],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1], // Custom easing for dramatic effect
            }}
          />
          
          {/* Middle sonic boom ring - blur effect */}
          <motion.span
            key={`middle-${pulseCount}`}
            className="absolute inset-0 rounded-full border border-gold blur-sm"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 2.2],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
          />
          
          {/* Inner sonic boom ring - sharp and fast */}
          <motion.span
            key={`inner-${pulseCount}`}
            className="absolute inset-0 rounded-full border-2 border-gold/60"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 1.8],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.05,
            }}
          />

          {/* Premium Glassmorphism Button */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl overflow-hidden">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gold glow on hover */}
            <div className="absolute inset-0 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Button content */}
            <div className="relative px-4 py-2 flex items-center gap-1.5">
              <span className="text-white font-medium text-xs tracking-widest uppercase">
                Contact
              </span>
              <div className="w-1 h-1 rounded-full bg-gold animate-pulse" />
            </div>
          </div>
        </div>
      </motion.button>

      {/* Premium Glossy Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, x: 300, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 300, y: 0 }}
              transition={{ 
                type: 'spring', 
                damping: 30, 
                stiffness: 400,
                mass: 0.8
              }}
              className="fixed top-0 right-0 h-full z-50 w-[400px] max-w-[90vw] shadow-2xl"
            >
              {/* Glass card with premium gradient */}
              <div className="relative h-full bg-gradient-to-br from-white via-beige-light/95 to-beige/90 overflow-hidden border border-white/30">
                {/* Glossy overlay with animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-transparent pointer-events-none" />
                
                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col p-6 overflow-y-auto">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 p-2.5 bg-white/40 backdrop-blur-sm hover:bg-white/60 rounded-full transition-all duration-300 border border-white/30"
                    aria-label="Close"
                  >
                    <X size={20} className="text-charcoal/70" />
                  </motion.button>

                  {/* Title with gradient */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-display text-transparent bg-clip-text bg-gradient-to-br from-charcoal to-charcoal/70 mb-2">
                      Get In Touch
                    </h3>
                    <p className="text-charcoal/60 text-sm tracking-wide">
                      We're here to help 24/7
                    </p>
                  </div>

                  {/* Contact Options */}
                  <div className="space-y-4 flex-1">
                    {/* Phone Option */}
                    <motion.button
                      onClick={handlePhoneClick}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full group relative overflow-hidden text-left"
                    >
                      <div className="relative bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                        {/* Animated gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative flex items-center gap-3">
                          {/* Icon with glow */}
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gold/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-gradient-to-br from-gold/20 to-gold/10 p-2 rounded-xl backdrop-blur-sm border border-gold/30 group-hover:border-gold/50 transition-colors">
                              <Phone className="text-gold" size={20} strokeWidth={2} />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="text-xs text-charcoal/50 font-semibold tracking-widest uppercase mb-1">
                              {isMobile() ? 'Call Us Now' : 'Phone Number'}
                            </div>
                            <div className="text-lg font-display text-charcoal group-hover:text-gold transition-colors duration-300">
                              051-123-4567
                            </div>
                            {!isMobile() && !copied && (
                              <div className="text-xs text-charcoal/40 mt-1 tracking-wide">
                                Click to copy to clipboard
                              </div>
                            )}
                            {copied && (
                              <motion.div
                                initial={{ opacity: 0, y: -3 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs text-green-600 font-semibold mt-1 tracking-wide"
                              >
                                ✓ Copied successfully!
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.button>

                    {/* Email Option */}
                    <motion.button
                      onClick={handleEmailClick}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full group relative overflow-hidden text-left"
                    >
                      <div className="relative bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                        {/* Animated gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative flex items-center gap-3">
                          {/* Icon with glow */}
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gold/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-gradient-to-br from-gold/20 to-gold/10 p-2 rounded-xl backdrop-blur-sm border border-gold/30 group-hover:border-gold/50 transition-colors">
                              <Mail className="text-gold" size={20} strokeWidth={2} />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="text-xs text-charcoal/50 font-semibold tracking-widest uppercase mb-1">
                              Email Us
                            </div>
                            <div className="text-lg font-display text-charcoal group-hover:text-gold transition-colors duration-300">
                              info@dust.co.za
                            </div>
                            <div className="text-xs text-charcoal/40 mt-1 tracking-wide">
                              Click to compose email
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  </div>

                  {/* Bottom badge */}
                  <div className="mt-auto pt-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-white/30">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-charcoal/70 font-medium tracking-wide">
                        Available 24/7/365
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
