'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from './LanguageProvider'

const HERO_PROJECTS = [
  {
    src: '/images/portfolio/little-bolleria.jpg',
    label: 'littlebolleria.com',
    alt: 'Little Bolleria bakery website',
  },
  {
    src: '/neva.jpg',
    label: 'neva-estudio.com',
    alt: 'NEVA Estudio architecture studio website',
  },
  {
    src: '/images/portfolio/coastal-millwork.jpg',
    label: 'coastalmillwork.com',
    alt: 'Coastal Millwork contractor website',
  },
] as const

function BrowserCard({
  src,
  label,
  alt,
  className,
  priority = false,
}: {
  src: string
  label: string
  alt: string
  className?: string
  priority?: boolean
}) {
  return (
    <div
      className={`relative rounded-md overflow-hidden bg-primary-900 border border-ink-50/10 shadow-2xl shadow-black/40 ${
        className ?? ''
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink-50/10">
        <span className="text-[10px] text-ink-300 tracking-wide tabular-nums">
          {label}
        </span>
        <span className="text-[10px] text-ink-500 uppercase tracking-[0.2em]">
          Live
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
          priority={priority}
        />
      </div>
    </div>
  )
}

export default function HeroSection() {
  const { t, language } = useLanguage()

  return (
    <section
      id="home"
      className="relative overflow-hidden section-padding bg-primary-900 text-ink-50"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 0%, oklch(35% 0.140 265 / 0.6), transparent 60%), radial-gradient(800px 500px at 90% 100%, oklch(42% 0.120 158 / 0.25), transparent 60%)',
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

      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 fade-up">
            <p className="text-xs uppercase tracking-[0.25em] text-accent-300 font-medium">
              {language === 'es'
                ? 'Consultoría web bilingüe · Charleston, SC'
                : 'Bilingual web consultancy · Charleston, SC'}
            </p>

            <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight prose-measure">
              {t('hero.title')}
            </h1>

            <p className="text-lg md:text-xl text-ink-200/90 leading-relaxed prose-measure">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-ink-950 font-semibold py-3.5 px-6 rounded-md transition-colors duration-200"
              >
                <span>{t('hero.cta.work')}</span>
                <FiArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-ink-50/30 hover:border-ink-50/70 text-ink-50 font-medium py-3.5 px-6 rounded-md transition-colors duration-200"
              >
                {t('hero.cta.contact')}
              </Link>
            </div>

            <dl className="flex flex-wrap items-baseline gap-x-6 gap-y-2 pt-8 border-t border-ink-50/10 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-0 max-w-xl">
              <div className="flex items-baseline gap-2 sm:block">
                <dt className="text-xs uppercase tracking-[0.15em] text-ink-400 sm:mb-1.5">
                  {language === 'es' ? 'Idiomas' : 'Languages'}
                </dt>
                <dd className="font-display text-base md:text-lg font-medium">EN · ES</dd>
              </div>
              <div className="flex items-baseline gap-2 sm:block">
                <dt className="text-xs uppercase tracking-[0.15em] text-ink-400 sm:mb-1.5">
                  Stack
                </dt>
                <dd className="font-display text-base md:text-lg font-medium">Next.js</dd>
              </div>
              <div className="flex items-baseline gap-2 sm:block">
                <dt className="text-xs uppercase tracking-[0.15em] text-ink-400 sm:mb-1.5">
                  {language === 'es' ? 'Respuesta' : 'Reply'}
                </dt>
                <dd className="font-display text-base md:text-lg font-medium">&lt; 48h</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="lg:hidden fade-up" style={{ animationDelay: '120ms' }}>
              <BrowserCard {...HERO_PROJECTS[1]} priority />
            </div>

            <div className="hidden lg:block relative h-[520px]">
              <div
                className="absolute top-16 right-0 w-[78%] fade-in rotate-[4deg]"
                style={{ animationDelay: '260ms' }}
              >
                <BrowserCard {...HERO_PROJECTS[2]} />
              </div>
              <div
                className="absolute top-4 left-0 w-[80%] fade-in -rotate-[3deg]"
                style={{ animationDelay: '140ms' }}
              >
                <BrowserCard {...HERO_PROJECTS[1]} />
              </div>
              <div
                className="absolute top-32 left-[10%] right-[10%] fade-up transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: '360ms' }}
              >
                <BrowserCard {...HERO_PROJECTS[0]} priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
