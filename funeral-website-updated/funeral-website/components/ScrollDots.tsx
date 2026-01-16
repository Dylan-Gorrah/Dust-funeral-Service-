'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'help', label: 'Contact' },
  { id: 'services', label: 'Services' },
  { id: 'stats', label: 'About' },
  { id: 'features', label: 'Why Us' },
  { id: 'testimonials', label: 'Reviews' },
]

export default function ScrollDots() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Scroll to ${section.label}`}
          >
            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gold border-gold scale-125'
                  : 'bg-transparent border-charcoal/30 hover:border-gold/50'
              }`}
            />

            {/* Label */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-charcoal text-white px-3 py-1 rounded-sm text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="font-medium">{section.label}</span>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-4 border-l-charcoal border-b-4 border-b-transparent" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
