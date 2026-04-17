'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface AuroraProps {
  className?: string
}

export default function Aurora({ className = '' }: AuroraProps) {
  const reduce = useReducedMotion()

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        initial={false}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[180%] aspect-square rounded-full opacity-60"
        style={{
          background:
            'conic-gradient(from 0deg at 50% 50%, rgba(99,102,241,0.00) 0deg, rgba(99,102,241,0.35) 60deg, rgba(0,195,137,0.00) 140deg, rgba(79,70,229,0.30) 220deg, rgba(0,195,137,0.25) 300deg, rgba(99,102,241,0.00) 360deg)',
          filter: 'blur(80px)',
        }}
      />
      <motion.div
        initial={false}
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 72, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 -left-1/4 w-[120%] aspect-square rounded-full opacity-40"
        style={{
          background:
            'conic-gradient(from 90deg at 50% 50%, rgba(0,195,137,0.00) 0deg, rgba(0,195,137,0.35) 90deg, rgba(99,102,241,0.00) 180deg, rgba(79,70,229,0.25) 270deg, rgba(0,195,137,0.00) 360deg)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />
    </div>
  )
}
