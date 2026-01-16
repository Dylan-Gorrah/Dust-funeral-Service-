'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Award, Users, Clock, Star } from 'lucide-react'

interface StatProps {
  icon: React.ElementType
  value: number
  suffix: string
  label: string
  delay: number
}

function Stat({ icon: Icon, value, suffix, label, delay }: StatProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const controls = animate(count, value, { 
            duration: 2,
            delay: delay,
            ease: 'easeOut'
          })
          return () => controls.stop()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [count, value, delay, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay }}
      className="text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 bg-gold/20 rounded-sm flex items-center justify-center">
          <Icon className="text-gold" size={32} strokeWidth={1.5} />
        </div>
      </div>
      <div className="text-5xl md:text-6xl font-display text-white mb-2">
        <motion.span>{rounded}</motion.span>
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="text-beige text-lg tracking-wide">
        {label}
      </div>
    </motion.div>
  )
}

export default function TrustIndicators() {
  const stats = [
    { icon: Award, value: 7, suffix: '+', label: 'Years of Service' },
    { icon: Users, value: 1000, suffix: '+', label: 'Families Helped' },
    { icon: Clock, value: 24, suffix: '/7', label: 'Always Available' },
    { icon: Star, value: 5, suffix: '★', label: 'Star Rated' },
  ]

  return (
    <section id="stats" className="section-padding bg-charcoal-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-beige text-xl max-w-2xl mx-auto font-light">
            Years of experience serving families across Bloemfontein with compassion and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <Stat
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
