'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from './LanguageProvider'
import AuditScan from './AuditScan'

export default function HeroSection() {
  const { t, language, pathFor } = useLanguage()
  const trackRef = useRef<HTMLElement>(null)

  // On large screens the section is taller than the viewport and its content
  // stays pinned while the scan runs; that extra height is the scroll track.
  // overflow-clip, not overflow-hidden: hidden would break the sticky frame.
  return (
    <section
      ref={trackRef}
      id="home"
      className="relative overflow-clip bg-primary-900 text-ink-50 lg:h-[190vh] motion-reduce:lg:h-auto"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 0%, var(--brand-gradient-primary), transparent 60%), radial-gradient(800px 500px at 90% 100%, var(--brand-gradient-accent), transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <div className="section-padding lg:sticky lg:top-16 lg:min-h-[calc(100vh-4rem)] lg:flex lg:items-center motion-reduce:lg:static">
        <div className="container-max relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="min-w-0 lg:col-span-7 space-y-8 fade-up">
              <p className="text-xs uppercase tracking-[0.25em] text-accent-300 font-medium">
                {language === 'es'
                  ? 'Seguridad para apps hechas con IA y vibe coding · Charleston, SC'
                  : 'Security for vibe coded and AI built apps · Charleston, SC'}
              </p>

              <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight prose-measure">
                {t('hero.title')}
              </h1>

              <p className="text-lg md:text-xl text-ink-200/90 leading-relaxed prose-measure">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href={pathFor('/work')}
                  className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-ink-950 font-semibold py-3.5 px-6 rounded-md transition-colors duration-200"
                >
                  <span>{t('hero.cta.work')}</span>
                  <FiArrowRight className="w-4 h-4" aria-hidden />
                </Link>
                <Link
                  href={pathFor('/contact')}
                  className="inline-flex items-center justify-center border border-ink-50/30 hover:border-ink-50/70 text-ink-50 font-medium py-3.5 px-6 rounded-md transition-colors duration-200"
                >
                  {t('hero.cta.contact')}
                </Link>
              </div>

              <p className="pt-8 border-t border-ink-50/10 max-w-xl text-sm text-ink-400">
                <span className="text-ink-500">
                  {language === 'es' ? 'Recientes:' : 'Recent:'}
                </span>{' '}
                <Link
                  href={pathFor('/work')}
                  className="text-ink-200 hover:text-accent-300 transition-colors"
                >
                  llm-audit · Axis · Tinta Gallery · Standshot
                </Link>
              </p>
            </div>

            <div className="min-w-0 lg:col-span-5 fade-up" style={{ animationDelay: '200ms' }}>
              <AuditScan trackRef={trackRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
