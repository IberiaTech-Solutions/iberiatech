'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCode, FiSmartphone, FiGlobe } from 'react-icons/fi'
import Image from 'next/image'

export default function HeroSection() {
  const { t, language } = useLanguage()

  const projectLabel = (type: 'shopessentials' | 'talentagent') => {
    if (type === 'shopessentials') {
      return language === 'es'
        ? 'E-commerce · Plataforma de curación'
        : 'E-commerce · Curation platform'
    }
    return language === 'es'
      ? 'Plataforma de IA · Evaluación de empleos'
      : 'AI platform · Job fit assessment'
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden section-padding bg-primary-900"
    >
      {/* Background: gradient only */}
      <div className="absolute inset-0 -z-20 bg-primary-900" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-900/95 via-primary-900/85 to-black/80" />

      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-medium">
                {t('hero.promise')}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-accent-400">
                {t('hero.subtitle2')}
              </h2>
              <p className="text-lg text-blue-200/90 italic">
                {t('hero.tagline')}
              </p>
            </div>

            {/* Key Features as modern pills */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <FiCode className="w-5 h-5 text-accent-300" />
                <span className="text-sm font-medium text-blue-50">
                  {t('hero.features.ai')}
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <FiSmartphone className="w-5 h-5 text-accent-300" />
                <span className="text-sm font-medium text-blue-50">
                  {t('hero.features.mobile')}
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <FiGlobe className="w-5 h-5 text-accent-300" />
                <span className="text-sm font-medium text-blue-50">
                  {t('hero.features.bilingual')}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/luis-lozoya-tech/30min" target="_blank" rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg shadow-accent-500/30"
              >
                <span>{t('hero.cta.start')}</span>
                <FiArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#portfolio"
                className="bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-primary-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                {language === 'es' ? 'Ver ejemplos en vivo' : 'View live examples'}
              </a>
            </div>

            {/* Trust microcopy */}
            <p className="text-sm text-blue-200/80">
              {language === 'es'
                ? 'Garantía de satisfacción · Respuesta en 24h · Sin costos ocultos'
                : 'Satisfaction guarantee · 24h response · No hidden fees'}
            </p>
          </motion.div>

          {/* Right Column - Real project previews */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[360px] md:h-[420px]"
          >
            {/* Primary project card */}
            <a
              href="https://www.shopessentialshub.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View ShopEssentialsHub live site"
              className="absolute inset-y-4 right-0 left-6 md:left-10 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-3xl"
            >
              <div className="relative h-full rounded-3xl overflow-hidden bg-gray-900/80 border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-white/30 group-hover:shadow-accent-500/20">
                <Image
                  src="/images/portfolio/www.shopessentialshub.com_.jpg"
                  alt="ShopEssentialsHub project preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top opacity-60 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-primary-900/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-200/80">
                    {language === 'es' ? 'Nuestro proyecto' : 'Our project'}
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    ShopEssentialsHub
                  </h3>
                  <p className="text-sm text-blue-100">
                    {projectLabel('shopessentials')}
                  </p>
                </div>
              </div>
            </a>

            {/* Secondary project card */}
            <a
              href="https://portfolio-hub-tawny.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View TalentAgent live site"
              className="absolute -bottom-4 left-0 md:left-6 w-40 md:w-52 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-2xl"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gray-900/90 border border-white/10 shadow-xl transition-all duration-300 group-hover:border-white/30 group-hover:shadow-accent-500/20">
                <div className="h-28 md:h-32 relative overflow-hidden">
                  <Image
                    src="/talentagent.jpg"
                    alt="TalentAgent project preview"
                    fill
                    sizes="200px"
                    className="object-cover object-top opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="p-3">
                  <p className="text-xs font-medium text-blue-100">
                    TalentAgent
                  </p>
                  <p className="text-[11px] text-blue-200/80">
                    {projectLabel('talentagent')}
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
