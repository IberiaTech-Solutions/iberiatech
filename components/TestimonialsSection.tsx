'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { FiMessageCircle, FiShield, FiUser } from 'react-icons/fi'

export default function TestimonialsSection() {
  const { language } = useLanguage()

  const testimonials = [
    {
      quote: "Luis at IberiaTech does amazing work. He is a skilled developer and really great to work with.",
      author: "Dave Ingram",
      company: "Querri",
      role: language === 'es' ? 'Cliente' : 'Client'
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 dark:from-gray-900 dark:via-gray-900 dark:to-black">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-[-4rem] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {language === 'es' ? 'Lo Que Dicen Nuestros Clientes' : 'What Our Clients Say'}
            </h2>

            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/95 dark:bg-gray-900/95 rounded-2xl p-8 shadow-xl"
              >
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mb-6">
                  <FiMessageCircle className="w-6 h-6 text-white" />
                </div>
                <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="text-gray-900 dark:text-white font-semibold">
                  {testimonial.author}
                </div>
                <div className="text-primary-800 dark:text-primary-400">
                  {testimonial.company}, {testimonial.role}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Direct founder + guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Direct founder positioning */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                  <FiUser className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {language === 'es' ? 'Trabajas directamente con el fundador' : 'You work directly with the founder'}
                  </h3>
                </div>
              </div>
              <p className="text-blue-100/90 leading-relaxed">
                {language === 'es'
                  ? 'Sin desarrolladores junior, sin gerentes de proyecto, sin intermediarios. Cuando contratas IberiaTech, trabajas conmigo directamente: decisiones más rápidas, mejor comunicación, y alguien que realmente se preocupa por tu resultado.'
                  : 'No junior developers, no project managers, no middlemen. When you hire IberiaTech, you work with me directly. Faster decisions, better communication, and someone who actually cares about your result.'}
              </p>
            </div>

            {/* Satisfaction guarantee */}
            <div className="bg-accent-500/20 backdrop-blur rounded-2xl p-8 border border-accent-400/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                  <FiShield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {language === 'es' ? 'Garantía de satisfacción' : 'Satisfaction guarantee'}
                  </h3>
                </div>
              </div>
              <p className="text-blue-100/90 leading-relaxed">
                {language === 'es'
                  ? 'Si no estás contento con el resultado antes del lanzamiento, te devolvemos tu dinero. Sin preguntas. Estamos seguros de que te va a encantar.'
                  : 'Not happy with the result before launch? Full refund, no questions asked. We\'re confident you\'ll love it.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
