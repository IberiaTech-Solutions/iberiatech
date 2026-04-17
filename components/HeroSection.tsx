'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGlobe, FiCode, FiShield } from 'react-icons/fi'
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
}: {
  src: string
  label: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 shadow-2xl shadow-black/40 ${
        className ?? ''
      }`}
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] text-blue-100/60 font-mono">
            {label}
          </span>
        </div>
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative overflow-hidden section-padding bg-primary-900"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-primary-900" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-900/95 via-primary-900/85 to-black/80" />

      {/* Decorative glow */}
      <div className="absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 -z-10 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />

      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.25em] text-accent-300 font-medium">
                IberiaTech Solutions
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-base md:text-lg text-accent-300 font-medium italic">
                {t('hero.tagline')}
              </p>
              <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Descriptor pills */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10">
                <FiGlobe className="w-4 h-4 text-accent-300 flex-shrink-0" />
                <span className="text-sm font-medium text-blue-50">
                  {t('hero.pill.bilingual')}
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10">
                <FiCode className="w-4 h-4 text-accent-300 flex-shrink-0" />
                <span className="text-sm font-medium text-blue-50">
                  {t('hero.pill.stack')}
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10">
                <FiShield className="w-4 h-4 text-accent-300 flex-shrink-0" />
                <span className="text-sm font-medium text-blue-50">
                  {t('hero.pill.security')}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/work"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg shadow-accent-500/30"
              >
                <span>{t('hero.cta.work')}</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-primary-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                {t('hero.cta.contact')}
              </Link>
            </div>
          </motion.div>

          {/* Right: stacked browser cards */}
          <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] hidden md:block">
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 8 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="absolute top-12 right-0 w-[78%]"
            >
              <BrowserCard {...HERO_PROJECTS[2]} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -5 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="absolute top-4 left-0 w-[82%]"
            >
              <BrowserCard {...HERO_PROJECTS[1]} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              whileHover={{ y: -6 }}
              className="absolute top-28 left-[8%] right-[8%]"
            >
              <BrowserCard {...HERO_PROJECTS[0]} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
