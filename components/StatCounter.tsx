'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 1400,
  className = '',
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduce) {
      setDisplay(value)
      return
    }

    let raf = 0
    let start = 0
    const run = (now: number) => {
      if (!start) start = now
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(value * eased))
      if (t < 1) raf = requestAnimationFrame(run)
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          raf = requestAnimationFrame(run)
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)

    return () => {
      obs.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [value, duration, reduce])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
