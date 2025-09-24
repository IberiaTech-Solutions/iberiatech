'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiMessageCircle } from 'react-icons/fi'

export default function TestimonialsSection() {
  const { t, language } = useLanguage()

  const testimonials = [
    {
      quote: "Luis at IberiaTech does amazing work. He is a skilled developer and really great to work with.",
      author: "Dave Ingram",
      company: "Querri",
      role: "Client"
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'es' ? 'Testimonios de Clientes' : 'Client Testimonials'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'es' ? 'Lo que dicen nuestros clientes sobre trabajar con IberiaTech Solutions' : 'What clients say about working with IberiaTech Solutions'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-brand-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiMessageCircle className="w-8 h-8 text-white" />
              </div>
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-gray-900 dark:text-white font-semibold">
                {testimonial.author}
              </div>
              <div className="text-brand-800 dark:text-brand-400">
                {testimonial.company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
