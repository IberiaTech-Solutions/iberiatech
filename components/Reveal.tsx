'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
  once?: boolean
  threshold?: number
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  once = true,
  threshold = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          if (once) obs.disconnect()
        } else if (!once) {
          setShown(false)
        }
      },
      { threshold, rootMargin: '-5% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [once, threshold])

  return (
    <Tag
      ref={ref as never}
      data-shown={shown ? 'true' : 'false'}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  )
}
