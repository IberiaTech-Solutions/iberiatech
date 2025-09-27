'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCode, FiSmartphone, FiGlobe } from 'react-icons/fi'

export default function HeroSection() {
  const { t, language } = useLanguage()

  return (
    <section id="home" className="bg-gradient-to-br from-primary-800 to-primary-900 section-padding">
      <div className="container-max">
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
                  <h2 className="text-2xl md:text-3xl font-semibold text-blue-200">
                    {t('hero.subtitle2')}
                  </h2>
                  <p className="text-lg text-blue-300 italic">
                    {t('hero.tagline')}
                  </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <FiCode className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100">{t('hero.features.ai')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiSmartphone className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100">{t('hero.features.mobile')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiGlobe className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100">{t('hero.features.bilingual')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            {/* Get Started = Comienza Ahora, Learn More = Aprende Más */}
            <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                  >
                    <span>{t('hero.cta.start')}</span>
                    <FiArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="#contact"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    {t('hero.cta.contact')}
                  </a>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                {/* Mock Browser */}
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded p-4">
                    <div className="h-4 bg-blue-200 dark:bg-blue-800 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                  </div>
                </div>

                {/* Benefits Preview */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{language === 'es' ? 'Móvil' : 'Mobile'}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{language === 'es' ? 'Perfecto en teléfonos' : 'Perfect on phones'}</div>
                  </div>
                  <div className="bg-accent-50 dark:bg-accent-900/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent-500">SEO</div>
                    <div className="text-sm text-support-medium dark:text-gray-400">{language === 'es' ? 'Listo para Google' : 'Google ready'}</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">{language === 'es' ? 'Seguro' : 'Secure'}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{language === 'es' ? 'Datos protegidos' : 'Data protected'}</div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">{language === 'es' ? 'Rápido' : 'Fast'}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{language === 'es' ? 'Velocidad ultrarrápida' : 'Lightning speed'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-500 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
