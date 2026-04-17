'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface SectionDividerProps {
  className?: string
  /** Height in px. Default 80. */
  height?: number
}

export default function SectionDivider({
  className = '',
  height = 80,
}: SectionDividerProps) {
  const reduce = useReducedMotion()

  return (
    <div
      aria-hidden
      className={`relative w-full ${className}`}
      style={{ height }}
    >
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="divider-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(99,102,241,0)" />
            <stop offset="20%" stopColor="rgba(99,102,241,0.45)" />
            <stop offset="50%" stopColor="rgba(0,195,137,0.7)" />
            <stop offset="80%" stopColor="rgba(99,102,241,0.45)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 40 Q 300 10 600 40 T 1200 40"
          fill="none"
          stroke="url(#divider-line)"
          strokeWidth="1.5"
          initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}
