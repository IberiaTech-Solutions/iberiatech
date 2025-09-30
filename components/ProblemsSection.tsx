'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiX, FiCheck, FiSearch, FiUsers, FiAward, FiGlobe, FiDollarSign } from 'react-icons/fi'

export default function ProblemsSection() {
  const { t, language } = useLanguage()

  const problems = [
    {
      icon: FiSearch,
      title: language === 'es' ? 'No aparecer en Google' : 'Not found on Google',
      description: language === 'es' ? 'Los clientes buscan en línea pero no te ven.' : 'Customers search online but don\'t see you.'
    },
    {
      icon: FiUsers,
      title: language === 'es' ? 'Perdiendo clientes ante competidores' : 'Losing clients to competitors',
      description: language === 'es' ? 'Los competidores con sitios web reciben la llamada en su lugar.' : 'Competitors with websites get the call instead.'
    },
    {
      icon: FiAward,
      title: language === 'es' ? 'Parecer menos profesional' : 'Looking less professional',
      description: language === 'es' ? 'Sin una presencia web sólida, tu negocio puede parecer desactualizado.' : 'Without a strong web presence, your business can feel outdated.'
    },
    {
      icon: FiDollarSign,
      title: language === 'es' ? 'Perdiendo crecimiento' : 'Missing growth',
      description: language === 'es' ? 'Sin sitio web significa no hay lugar para capturar leads o mostrar tus servicios.' : 'No website means no place to capture leads or showcase your services.'
    }
  ]

  const solutions = [
    {
      icon: FiAward,
      title: language === 'es' ? 'Un sitio web moderno que genera confianza' : 'A modern website that builds trust',
      description: language === 'es' ? 'Incluso nuestro paquete Básico incluye un diseño profesional que hace que tu negocio se vea creíble.' : 'Even our Starter package includes a professional design that makes your business look credible.'
    },
    {
      icon: FiUsers,
      title: language === 'es' ? 'Un sitio que gana clientes' : 'A site that wins customers',
      description: language === 'es' ? 'El paquete Empresarial está construido para convertir visitantes en clientes que pagan.' : 'The Business package is built to convert visitors into paying clients.'
    },
    {
      icon: FiGlobe,
      title: language === 'es' ? 'Alcance bilingüe (Inglés y Español)' : 'Bilingual reach (English & Spanish)',
      description: language === 'es' ? 'Incluido sin costo adicional en cada paquete.' : 'Included at no extra cost in every package.'
    },
    {
      icon: FiDollarSign,
      title: language === 'es' ? 'Precios claros, pago único' : 'Clear, one-time pricing',
      description: language === 'es' ? 'Sin suscripciones, sin tarifas ocultas.' : 'No subscriptions, no hidden fees.'
    }
  ]

  return (
    <section id="problems" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('problems.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('problems.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problems Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8 min-h-[80px] flex items-center justify-center">
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
                {t('problems.without.title')}
              </h3>
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 min-h-[100px]"
                >
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiX className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {problem.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8 min-h-[80px] flex items-center justify-center">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                {t('problems.with.title')}
              </h3>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 min-h-[100px]"
                >
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {solution.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Line Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 mb-8"
        >
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20 rounded-2xl p-6 max-w-4xl mx-auto border border-accent-200 dark:border-accent-700">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {language === 'es' 
                ? '✨ En resumen: Un sitio web profesional ya no es opcional. Es cómo los clientes te encuentran, confían en ti y te eligen.' 
                : '✨ Bottom line: A professional website is no longer optional. It\'s how customers find you, trust you, and choose you.'}
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 max-w-4xl mx-auto border border-primary-200 dark:border-primary-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('problems.cta.title')}
            </h3>
            <div className="text-lg text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <p>👉 Let's build your website today.</p>
              <p>👉 Construyamos tu sitio web hoy.</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <span>{t('problems.cta.button')}</span>
              <FiCheck className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
