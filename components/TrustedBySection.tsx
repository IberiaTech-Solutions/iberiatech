'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TrustedBySection() {
  const { language } = useLanguage()

  const clients = [
    {
      name: 'Querri',
      logo: 'https://querri.com/favicon.svg',
      description: 'Data analytics & business intelligence',
      url: 'https://querri.com'
    },
    {
      name: 'GDNA',
      logo: 'https://gdna.io/favicon.ico',
      description: 'Cloud services & digital transformation',
      url: 'https://gdna.io'
    }
  ]

  return (
    <section className="py-12 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-700">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-center">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
              {language === 'es' ? 'Confían en nosotros' : 'Trusted by'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
              {language === 'es' ? 'Nos respaldan startups y agencias digitales en Charleston y más allá' : 'Trusted by startups and digital agencies in Charleston and beyond'}
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
              {language === 'es' ? 'Empresas que han crecido con nuestros sitios web:' : 'Companies that have grown with our websites:'}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  {/* Client logo */}
                  <div className="w-12 h-12 relative">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      sizes="48px"
                      className="object-contain"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center" style={{ display: 'none' }}>
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
                        {client.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 font-medium hover:text-brand-800 dark:hover:text-brand-400 transition-colors duration-200"
                    >
                      {client.name}
                    </a>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      {client.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              {language === 'es' ? 'Más clientes próximamente...' : 'More clients coming soon...'}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
