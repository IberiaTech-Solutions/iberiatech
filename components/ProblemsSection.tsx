'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiX, FiCheck, FiSearch, FiUsers, FiAward, FiGlobe, FiDollarSign } from 'react-icons/fi'

export default function ProblemsSection() {
  const { t, language } = useLanguage()

  const problems = [
    {
      icon: FiSearch,
      title: language === 'es' ? 'Nadie te encuentra en Google' : 'People cannot find you on Google',
      description: language === 'es' ? 'Tus clientes buscan online. Si no apareces, llaman a otro.' : 'Your customers are searching online. If you are not there, they call someone else.'
    },
    {
      icon: FiUsers,
      title: language === 'es' ? 'Tu competencia te gana' : 'Your competition is winning',
      description: language === 'es' ? 'El que tiene sitio web se lleva la llamada.' : 'The one with a website gets the call.'
    },
    {
      icon: FiAward,
      title: language === 'es' ? 'Tu negocio no se ve profesional' : 'Your business looks outdated',
      description: language === 'es' ? 'Sin presencia web, la gente no confia igual.' : 'Without a web presence, people do not trust you the same way.'
    },
    {
      icon: FiDollarSign,
      title: language === 'es' ? 'Estas perdiendo dinero' : 'You are leaving money on the table',
      description: language === 'es' ? 'Sin sitio web no tienes donde capturar clientes nuevos.' : 'No website means nowhere to capture new customers.'
    }
  ]

  const solutions = [
    {
      icon: FiAward,
      title: language === 'es' ? 'Un sitio que da confianza' : 'A site that builds trust',
      description: language === 'es' ? 'Hasta el paquete basico incluye un diseño profesional que te hace ver serio.' : 'Even the Starter package gives you a professional look that makes your business credible.'
    },
    {
      icon: FiUsers,
      title: language === 'es' ? 'Un sitio que trae clientes' : 'A site that brings in customers',
      description: language === 'es' ? 'Construido para que los visitantes te contacten.' : 'Built so visitors actually reach out to you.'
    },
    {
      icon: FiGlobe,
      title: language === 'es' ? 'Ingles y español incluido' : 'English and Spanish included',
      description: language === 'es' ? 'Sin costo extra. Cada paquete viene bilingue.' : 'At no extra cost. Every package comes bilingual.'
    },
    {
      icon: FiDollarSign,
      title: language === 'es' ? 'Precio unico y claro' : 'One price, no surprises',
      description: language === 'es' ? 'Sin suscripciones. Sin costos ocultos.' : 'No subscriptions. No hidden fees.'
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
          {/* Solutions Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8 min-h-[80px] flex items-center justify-center">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                {t('problems.with.title')}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800 flex flex-col items-start space-y-2 h-full min-h-[200px]"
                >
                  <div className="w-9 h-9 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-1">
                    <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {solution.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Problems Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8 min-h-[80px] flex items-center justify-center">
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
                {t('problems.without.title')}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-800 flex flex-col items-start space-y-2 h-full min-h-[200px]"
                >
                  <div className="w-9 h-9 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-1">
                    <FiX className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {problem.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 max-w-4xl mx-auto border border-primary-200 dark:border-primary-700 mt-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('problems.cta.title')}
            </h3>
            <div className="text-lg text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <p>
                {language === 'es'
                  ? 'Tu sitio web es como tus clientes te encuentran y deciden llamarte.'
                  : 'Your website is how customers find you and decide to call you.'}
              </p>
            </div>
            <a
              href="https://calendly.com/luis-lozoya-tech/30min" target="_blank" rel="noopener noreferrer"
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
