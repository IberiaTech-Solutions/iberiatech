'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiCheck, FiStar, FiArrowRight, FiSmartphone, FiSearch, FiMail, FiGlobe, FiUser, FiFileText, FiClock, FiRefreshCw, FiHeadphones, FiTrendingUp, FiSettings, FiCreditCard, FiPlusCircle, FiMessageCircle } from 'react-icons/fi'

export default function PricingSection() {
  const { t, language } = useLanguage()

  const pricingPlans = [
    {
      nameKey: 'pricing.starter.name',
      priceKey: 'pricing.starter.price',
      descriptionKey: 'pricing.starter.desc',
      ctaKey: 'pricing.cta.starter',
      features: language === 'es' ? [
        'Hasta 4 páginas (ej. Inicio, Nosotros, Servicios, Contacto)',
        'SEO básico (meta, mapa del sitio)',
        'Entrega en 1 semana',
        '2 rondas de revisiones',
        'Inglés + Español incluido',
        '1 mes de soporte'
      ] : [
        'Up to 4 pages (e.g. Home, About, Services, Contact)',
        'Basic SEO (meta, sitemap)',
        'Delivery in 1 week',
        '2 rounds of revisions',
        'English & Spanish included',
        '1 month support'
      ],
      popular: false
    },
    {
      nameKey: 'pricing.business.name',
      priceKey: 'pricing.business.price',
      descriptionKey: 'pricing.business.desc',
      ctaKey: 'pricing.cta.business',
      features: language === 'es' ? [
        'Hasta 7 páginas (ej. Inicio, Nosotros, Servicios, Portafolio, Testimonios, FAQ, Contacto)',
        'SEO avanzado + Google Analytics',
        'Entrega en 2–4 semanas',
        '3 rondas de revisiones',
        'Inglés + Español (adaptación cultural)',
        '3 meses de soporte'
      ] : [
        'Up to 7 pages (e.g. Home, About, Services, Portfolio, Testimonials, FAQ, Contact)',
        'Advanced SEO + Google Analytics',
        'Delivery in 2–4 weeks',
        '3 rounds of revisions',
        'English & Spanish (cultural adaptation)',
        '3 months support'
      ],
      popular: true
    },
    {
      nameKey: 'pricing.custom.name',
      priceKey: 'pricing.custom.price',
      descriptionKey: 'pricing.custom.desc',
      ctaKey: 'pricing.cta.custom',
      features: language === 'es' ? [
        'eCommerce, reservas, portales de socios o formularios a medida',
        'Apps o sitios complejos según necesidad',
        'Entrega en 5–7 semanas',
        'Revisiones incluidas',
        'Inglés + Español incluido',
        '6 meses de soporte'
      ] : [
        'eCommerce, booking systems, member portals, or custom forms',
        'Custom apps or complex sites as needed',
        'Delivery in 5–7 weeks',
        'Revisions included',
        'English & Spanish included',
        '6 months support'
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg font-semibold text-primary-800 dark:text-primary-300 max-w-2xl mx-auto mb-2">
            {t('pricing.anchor')}
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-2">
            {t('pricing.subtitle.charleston')}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-1">
            {t('pricing.value')}
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
                <div className={`text-3xl font-bold mb-2 ${plan.isCustom ? 'text-accent-600 dark:text-accent-400' : 'text-primary-800 dark:text-primary-300'}`}>
                  {t(plan.priceKey)}
                </div>
                {t(plan.descriptionKey) && (
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(plan.descriptionKey)}
                  </p>
                )}
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

        {/* Compare plans table: clear deliverables, side-by-side */}
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
          <p className="text-base font-medium text-primary-800 dark:text-primary-300 mb-1 text-center">
            {t('pricing.compare.why')}
          </p>
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
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4 flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-50/50 dark:bg-transparent">
                    <FiFileText className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    {t('pricing.compare.pages')}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-gray-800/30 border-l border-gray-100 dark:border-gray-700">{t('pricing.compare.starter.pages')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-accent-50/30 dark:bg-accent-900/10 border-l-2 border-l-accent-200 dark:border-l-accent-800">{t('pricing.compare.business.pages')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-primary-50/30 dark:bg-primary-900/10 border-l-2 border-l-primary-200 dark:border-l-primary-800">{t('pricing.compare.custom.pages')}</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <FiSearch className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    {t('pricing.compare.seo')}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-gray-800/30 border-l border-gray-100 dark:border-gray-700">{t('pricing.compare.starter.seo')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-accent-50/30 dark:bg-accent-900/10 border-l-2 border-l-accent-200 dark:border-l-accent-800">{t('pricing.compare.business.seo')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-primary-50/30 dark:bg-primary-900/10 border-l-2 border-l-primary-200 dark:border-l-primary-800">{t('pricing.compare.custom.seo')}</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4 flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-50/50 dark:bg-transparent">
                    <FiTrendingUp className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    {t('pricing.compare.analytics')}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-gray-800/30 border-l border-gray-100 dark:border-gray-700">{t('pricing.compare.starter.analytics')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-accent-50/30 dark:bg-accent-900/10 border-l-2 border-l-accent-200 dark:border-l-accent-800">{t('pricing.compare.business.analytics')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-primary-50/30 dark:bg-primary-900/10 border-l-2 border-l-primary-200 dark:border-l-primary-800">{t('pricing.compare.custom.analytics')}</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4 flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-50/50 dark:bg-transparent">
                    <FiClock className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    {t('pricing.compare.delivery')}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-gray-800/30 border-l border-gray-100 dark:border-gray-700">{t('pricing.compare.starter.delivery')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-accent-50/30 dark:bg-accent-900/10 border-l-2 border-l-accent-200 dark:border-l-accent-800">{t('pricing.compare.business.delivery')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-primary-50/30 dark:bg-primary-900/10 border-l-2 border-l-primary-200 dark:border-l-primary-800">{t('pricing.compare.custom.delivery')}</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4 flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-50/50 dark:bg-transparent">
                    <FiRefreshCw className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    {t('pricing.compare.revisions')}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-gray-800/30 border-l border-gray-100 dark:border-gray-700">{t('pricing.compare.starter.revisions')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-accent-50/30 dark:bg-accent-900/10 border-l-2 border-l-accent-200 dark:border-l-accent-800">{t('pricing.compare.business.revisions')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-primary-50/30 dark:bg-primary-900/10 border-l-2 border-l-primary-200 dark:border-l-primary-800">{t('pricing.compare.custom.revisions')}</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4 flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-50/50 dark:bg-transparent">
                    <FiHeadphones className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    {t('pricing.compare.support')}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-gray-800/30 border-l border-gray-100 dark:border-gray-700">{t('pricing.compare.starter.support')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-accent-50/30 dark:bg-accent-900/10 border-l-2 border-l-accent-200 dark:border-l-accent-800">{t('pricing.compare.business.support')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-primary-50/30 dark:bg-primary-900/10 border-l-2 border-l-primary-200 dark:border-l-primary-800">{t('pricing.compare.custom.support')}</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4 flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-50/50 dark:bg-transparent">
                    <FiGlobe className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    {t('pricing.compare.bilingual')}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-gray-800/30 border-l border-gray-100 dark:border-gray-700">{t('pricing.compare.starter.bilingual')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-accent-50/30 dark:bg-accent-900/10 border-l-2 border-l-accent-200 dark:border-l-accent-800">{t('pricing.compare.business.bilingual')}</td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-primary-50/30 dark:bg-primary-900/10 border-l-2 border-l-primary-200 dark:border-l-primary-800">{t('pricing.compare.custom.bilingual')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Maintenance plans: monthly support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiSettings className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {t('pricing.maintenance.title')}
            </h3>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-2xl mx-auto">
            {t('pricing.maintenance.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md">
              <div className="font-semibold text-gray-900 dark:text-white mb-1">{t('pricing.maintenance.basic.name')}</div>
              <div className="text-lg font-bold text-primary-800 dark:text-primary-400 mb-2">{t('pricing.maintenance.basic.price')}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('pricing.maintenance.basic.desc')}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md">
              <div className="font-semibold text-gray-900 dark:text-white mb-1">{t('pricing.maintenance.growth.name')}</div>
              <div className="text-lg font-bold text-primary-800 dark:text-primary-400 mb-2">{t('pricing.maintenance.growth.price')}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('pricing.maintenance.growth.desc')}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md">
              <div className="font-semibold text-gray-900 dark:text-white mb-1">{t('pricing.maintenance.premium.name')}</div>
              <div className="text-lg font-bold text-primary-800 dark:text-primary-400 mb-2">{t('pricing.maintenance.premium.price')}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('pricing.maintenance.premium.desc')}</p>
            </div>
          </div>
        </motion.div>

        {/* Optional add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiPlusCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {t('pricing.addons.title')}
            </h3>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-2xl mx-auto">
            {t('pricing.addons.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <FiMessageCircle className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                <span className="font-semibold text-gray-900 dark:text-white">{t('pricing.addons.chatbot.name')}</span>
              </div>
              <div className="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2">{t('pricing.addons.chatbot.price')}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">{t('pricing.addons.chatbot.desc')}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <FiSearch className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                <span className="font-semibold text-gray-900 dark:text-white">{t('pricing.addons.seo.name')}</span>
              </div>
              <div className="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2">{t('pricing.addons.seo.price')}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">{t('pricing.addons.seo.desc')}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <FiTrendingUp className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                <span className="font-semibold text-gray-900 dark:text-white">{t('pricing.addons.analytics.name')}</span>
              </div>
              <div className="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2">{t('pricing.addons.analytics.price')}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">{t('pricing.addons.analytics.desc')}</p>
            </div>
          </div>
        </motion.div>

        {/* Payment options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiCreditCard className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {t('pricing.payment.title')}
            </h3>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-4 max-w-2xl mx-auto">
            {t('pricing.payment.subtitle')}
          </p>
          <ul className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-8 max-w-2xl mx-auto text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
              {t('pricing.payment.option1')}
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
              {t('pricing.payment.option2')}
            </li>
          </ul>
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
