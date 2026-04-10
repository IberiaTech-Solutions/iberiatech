'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGlobe, FiCode, FiShield } from 'react-icons/fi'
import { useLanguage } from './LanguageProvider'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative overflow-hidden section-padding bg-primary-900"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-primary-900" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-900/95 via-primary-900/85 to-black/80" />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-8"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-accent-300 font-medium">
              IberiaTech Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl leading-relaxed">
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
      </div>
    </section>
  )
}
