'use client'

import { useRef, useState, type HTMLAttributes, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** Accent color used for spotlight + conic border. CSS color string. */
  accent?: string
  /** Disable the animated conic border. */
  borderless?: boolean
  /** Radius of the spotlight in px. */
  radius?: number
}

export default function SpotlightCard({
  children,
  className = '',
  accent = 'rgba(0,195,137,0.35)',
  borderless = false,
  radius = 320,
  onMouseMove,
  ...rest
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  })
  const reduce = useReducedMotion()

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(e)
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    })
  }

  const handleLeave = () => setPos((p) => ({ ...p, visible: false }))

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group relative isolate ${className}`}
      {...rest}
    >
      {!borderless && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `conic-gradient(from var(--angle, 0deg) at 50% 50%, ${accent}, rgba(99,102,241,0.3), ${accent})`,
            WebkitMask:
              'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: 1,
            animation: reduce ? undefined : 'spotlight-spin 6s linear infinite',
          }}
        />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: pos.visible
            ? `radial-gradient(${radius}px circle at ${pos.x}px ${pos.y}px, ${accent}, transparent 60%)`
            : 'transparent',
        }}
      />
      <div className="relative">{children}</div>
      <style jsx>{`
        @property --angle {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }
        @keyframes spotlight-spin {
          to {
            --angle: 360deg;
          }
        }
      `}</style>
    </div>
  )
}
