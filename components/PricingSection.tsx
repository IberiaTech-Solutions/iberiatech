'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiCheck, FiStar, FiArrowRight, FiSmartphone, FiSearch, FiMail, FiGlobe, FiUser, FiFileText, FiClock, FiRefreshCw, FiHeadphones, FiTrendingUp, FiSettings } from 'react-icons/fi'

export default function PricingSection() {
  const { t, language } = useLanguage()

  const plans = [
    {
      nameKey: 'pricing.starter.name',
      priceKey: 'pricing.starter.price',
      descriptionKey: 'pricing.starter.desc',
      ctaKey: 'pricing.cta.starter',
      features: language === 'es' ? [
        'Hasta 4 páginas (ej. Inicio, Nosotros, Servicios, Contacto)',
        'SEO básico (meta, mapa del sitio)',
        'Diseño listo en 1–2 semanas',
        'Hosting incluido, dominio .com estándar incluido',
        'Mantenimiento y actualizaciones mensuales',
        'Inglés + Español incluido',
        'Soporte por email'
      ] : [
        'Up to 4 pages (e.g. Home, About, Services, Contact)',
        'Basic SEO (meta, sitemap)',
        'Design ready in 1–2 weeks',
        'Hosting included, standard .com domain included',
        'Monthly maintenance & updates',
        'English & Spanish included',
        'Email support'
      ],
      popular: false
    },
    {
      nameKey: 'pricing.business.name',
      priceKey: 'pricing.business.price',
      descriptionKey: 'pricing.business.desc',
      ctaKey: 'pricing.cta.business',
      features: language === 'es' ? [
        'Hasta 7 páginas + blog',
        'SEO avanzado + Google Analytics',
        'Diseño listo en 2–4 semanas',
        'Hosting incluido, dominio .com estándar incluido',
        'Actualizaciones de contenido y diseño mensuales',
        'Inglés + Español (adaptación cultural)',
        'Revisión mensual de rendimiento',
        'Soporte prioritario'
      ] : [
        'Up to 7 pages + blog',
        'Advanced SEO + Google Analytics',
        'Design ready in 2–4 weeks',
        'Hosting included, standard .com domain included',
        'Monthly content & design updates',
        'English & Spanish (cultural adaptation)',
        'Monthly performance review',
        'Priority support'
      ],
      popular: true
    },
    {
      nameKey: 'pricing.custom.name',
      priceKey: 'pricing.custom.price',
      descriptionKey: 'pricing.custom.desc',
      ctaKey: 'pricing.cta.custom',
      features: language === 'es' ? [
        'eCommerce, reservas, portales o apps a medida',
        'SEO completo + Analytics avanzado',
        'Diseño listo en 4–7 semanas',
        'Hosting incluido, dominio .com estándar incluido',
        'Desarrollo continuo y nuevas funciones',
        'Inglés + Español incluido',
        'Soporte mismo día',
        'Estrategia de crecimiento mensual'
      ] : [
        'eCommerce, booking, portals, or custom apps',
        'Full SEO + advanced analytics',
        'Design ready in 4–7 weeks',
        'Hosting included, standard .com domain included',
        'Ongoing development & new features',
        'English & Spanish included',
        'Same-day support',
        'Monthly growth strategy'
      ],
      popular: false,
      isCustom: true
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-2">
            {t('pricing.subtitle')}
          </p>
          <p className="text-sm font-semibold text-primary-800 dark:text-primary-300 max-w-2xl mx-auto">
            {t('pricing.anchor')}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={`plan-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col h-full ${
                plan.popular ? 'ring-2 ring-primary-800' : ''
              } ${plan.isCustom ? 'ring-2 ring-accent-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-800 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <FiStar className="w-4 h-4" />
                    <span>{t('pricing.popular')}</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t(plan.nameKey)}
                </h3>
                <div className={`text-3xl font-bold mb-3 ${plan.isCustom ? 'text-accent-600 dark:text-accent-400' : 'text-primary-800 dark:text-primary-300'}`}>
                  {t(plan.priceKey)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
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
                  href="https://calendly.com/luis-lozoya-tech/30min" target="_blank" rel="noopener noreferrer"
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

        {/* 12-month commitment note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('pricing.commitment')}
          </p>
        </motion.div>

        {/* Compare plans table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            {t('pricing.compare.title')}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
            {t('pricing.compare.whySub')}
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/5">
            <table className="w-full min-w-[320px] text-left text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="py-4 px-4 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/80 w-1/3 rounded-tl-xl">
                    {t('pricing.compare.feature')}
                  </th>
                  <th className="py-4 px-4 font-semibold text-center bg-gray-100 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 border-l-2 border-l-gray-300 dark:border-l-gray-600">
                    <span className="text-gray-700 dark:text-gray-300">{t('pricing.starter.name')}</span>
                  </th>
                  <th className="py-4 px-4 font-semibold text-center bg-accent-50 dark:bg-accent-900/20 border-l-2 border-l-accent-400 dark:border-l-accent-500 text-primary-800 dark:text-primary-300">
                    {t('pricing.business.name')}
                  </th>
                  <th className="py-4 px-4 font-semibold text-center bg-primary-50 dark:bg-primary-900/20 border-l-2 border-l-primary-500 dark:border-l-primary-400 text-primary-800 dark:text-primary-300 rounded-tr-xl">
                    {t('pricing.custom.name')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {['pages', 'seo', 'analytics', 'delivery', 'revisions', 'support', 'bilingual'].map((row, rowIndex) => (
                  <tr key={row} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className={`py-3 px-4 flex items-center gap-2 text-gray-700 dark:text-gray-300 ${rowIndex % 2 === 0 ? 'bg-gray-50/50 dark:bg-transparent' : ''}`}>
                      {row === 'pages' && <FiFileText className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />}
                      {row === 'seo' && <FiSearch className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />}
                      {row === 'analytics' && <FiTrendingUp className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />}
                      {row === 'delivery' && <FiClock className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />}
                      {row === 'revisions' && <FiRefreshCw className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />}
                      {row === 'support' && <FiHeadphones className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />}
                      {row === 'bilingual' && <FiGlobe className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />}
                      {t(`pricing.compare.${row}`)}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-gray-800/30 border-l border-gray-100 dark:border-gray-700">{t(`pricing.compare.starter.${row}`)}</td>
                    <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-accent-50/30 dark:bg-accent-900/10 border-l-2 border-l-accent-200 dark:border-l-accent-800">{t(`pricing.compare.business.${row}`)}</td>
                    <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-primary-50/30 dark:bg-primary-900/10 border-l-2 border-l-primary-200 dark:border-l-primary-800">{t(`pricing.compare.custom.${row}`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* What's Always Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-primary-200 dark:border-primary-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {language === 'es' ? 'Incluido en todos los planes' : 'Included in every plan'}
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
                  {language === 'es' ? 'Hosting + dominio .com' : 'Hosting + .com domain'}
                </span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-1">
                  <FiSettings className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {language === 'es' ? 'Mantenimiento continuo' : 'Ongoing maintenance'}
                </span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-1">
                  <FiGlobe className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {language === 'es' ? 'Inglés + Español' : 'English + Spanish'}
                </span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-1">
                  <FiUser className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {language === 'es' ? 'Soporte directo conmigo' : 'Direct support from me'}
                </span>
              </div>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
              {language === 'es'
                ? 'Sin costos ocultos. Sin sorpresas. Todo incluido en tu tarifa mensual.'
                : 'No hidden costs. No surprises. Everything included in your monthly fee.'}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
