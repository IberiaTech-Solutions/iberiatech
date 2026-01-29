'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiCheck, FiStar, FiArrowRight, FiSmartphone, FiSearch, FiMail, FiGlobe, FiUser } from 'react-icons/fi'

export default function PricingSection() {
  const { t, language } = useLanguage()

  const pricingPlans = [
    {
      nameKey: 'pricing.custom.name',
      price: language === 'es' ? 'Personalizado' : 'Custom',
      descriptionKey: 'pricing.custom.desc',
      ctaKey: 'pricing.cta.custom',
      features: language === 'es' ? [
        'Consulta personalizada',
        'Diseño adaptado a tu negocio',
        'Plan de crecimiento incluido',
        'Solución perfecta para tu presupuesto',
        'Soporte completo'
      ] : [
        'Personal consultation',
        'Design tailored to your business',
        'Growth plan included',
        'Perfect solution for your budget',
        'Complete support'
      ],
      popular: false,
      isCustom: true
    },
    {
      nameKey: 'pricing.starter.name',
      price: language === 'es' ? 'Por proyecto' : 'Project-based',
      descriptionKey: 'pricing.starter.desc',
      ctaKey: 'pricing.cta.starter',
      features: language === 'es' ? [
        'Sitio web de 3-4 páginas',
        'Móvil + Google listo',
        'Formulario de contacto',
        'Inglés y Español incluido',
        '1 mes de soporte'
      ] : [
        '3-4 page website',
        'Mobile + Google ready',
        'Contact form',
        'English & Spanish included',
        '1 month support'
      ],
      popular: false
    },
    {
      nameKey: 'pricing.business.name',
      price: language === 'es' ? 'Por proyecto' : 'Project-based',
      descriptionKey: 'pricing.business.desc',
      ctaKey: 'pricing.cta.business',
      features: language === 'es' ? [
        '5-7 páginas personalizadas',
        'Marca personalizada incluida',
        'Inglés + Español con adaptación cultural',
        'SEO avanzado + Google Analytics',
        'Optimización de conversión',
        '3 meses de soporte'
      ] : [
        '5-7 custom pages',
        'Custom branding included',
        'English + Spanish with cultural adaptation',
        'Advanced SEO + Google Analytics',
        'Conversion optimization',
        '3 months support'
      ],
      popular: true
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={`pricing-plan-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col h-full ${
                plan.popular ? 'ring-2 ring-primary-800 scale-105' : ''
              } ${
                plan.isCustom ? 'ring-2 ring-accent-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-800 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <FiStar className="w-4 h-4" />
                    <span>{t('pricing.popular')}</span>
                  </div>
                </div>
              )}
              {plan.isCustom && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <span>⭐</span>
                    <span>{language === 'es' ? 'Recomendado' : 'Recommended'}</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t(plan.nameKey)}
                </h3>
                <div className={`text-3xl font-bold mb-2 ${plan.isCustom ? 'text-accent-600 dark:text-accent-400' : 'text-primary-800'}`}>
                  {plan.price}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(plan.descriptionKey)}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href="#contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors duration-200 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-accent-500 hover:bg-accent-600 text-white'
                      : plan.isCustom
                      ? 'bg-primary-800 hover:bg-primary-900 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100'
                  }`}
                >
                  <span>{t(plan.ctaKey)}</span>
                  <FiArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's Always Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-primary-200 dark:border-primary-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {language === 'es' ? 'Lo que siempre está incluido' : 'What\'s always included'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-1">
                  <FiSmartphone className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {language === 'es' ? 'Diseño móvil-friendly' : 'Mobile-friendly design'}
                </span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-1">
                  <FiSearch className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {language === 'es' ? 'SEO básico' : 'SEO basics'}
                </span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-1">
                  <FiMail className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {language === 'es' ? 'Configuración de formulario de contacto' : 'Contact form setup'}
                </span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-1">
                  <FiGlobe className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {language === 'es' ? 'Inglés + Español (sin costo extra)' : 'English + Spanish (no extra fee)'}
                </span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-1">
                  <FiUser className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {language === 'es' ? 'Soporte 1-a-1 después del lanzamiento' : '1-on-1 support after launch'}
                </span>
              </div>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
              {language === 'es' 
                ? 'No ocultamos lo esencial detrás de costos adicionales' 
                : 'We don\'t hide essentials behind upsells'}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
