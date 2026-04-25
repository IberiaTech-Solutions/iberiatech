'use client'

import { FiArrowUpRight, FiMail, FiCalendar, FiMessageCircle } from 'react-icons/fi'
import { useLanguage } from '@/components/LanguageProvider'

const CALENDLY_URL = 'https://calendly.com/luis-lozoya-tech/30min'

export default function ContactPage() {
  const { t, language } = useLanguage()

  const letter = language === 'es'
    ? `Si estás aquí, probablemente tienes un proyecto en mente. Escríbeme directamente y te contesto en un día laborable como mucho — sin formularios largos, sin embudos, sin llamadas que no lleven a nada concreto.`
    : `If you're here, you probably have a project in mind. Write to me directly and I'll reply within one business day — no long forms, no funnels, no calls that go nowhere.`

  const sig = language === 'es'
    ? 'Luis Javier Lozoya, fundador'
    : 'Luis Javier Lozoya, founder'

  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-7 fade-up">
            <p className="text-xs uppercase tracking-[0.25em] text-accent-700 dark:text-accent-400 font-medium mb-5">
              {t('nav.contact')}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-ink-900 dark:text-ink-50 leading-[1.05] mb-8">
              {t('contact.title')}
            </h1>
            <p className="font-display text-xl md:text-2xl text-ink-700 dark:text-ink-300 leading-snug mb-8 prose-measure">
              {letter}
            </p>
            <p className="text-sm text-ink-500 italic">— {sig}</p>
          </div>

          <div className="md:col-span-5 fade-up" style={{ animationDelay: '150ms' }}>
            <div className="sticky top-24 space-y-4">
              <a
                href="mailto:luis@iberiatechsolutions.com"
                className="group flex items-start gap-5 p-6 bg-primary-900 text-ink-50 rounded-md hover:bg-primary-800 transition-colors"
              >
                <FiMail className="w-5 h-5 mt-1 text-accent-400 flex-shrink-0" aria-hidden />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-accent-300 mb-2 font-medium">
                    {language === 'es' ? 'Email directo' : 'Direct email'}
                  </p>
                  <p className="font-display text-lg md:text-xl font-semibold break-all leading-tight">
                    luis@iberiatechsolutions.com
                  </p>
                </div>
                <FiArrowUpRight className="w-4 h-4 text-ink-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0 mt-1" aria-hidden />
              </a>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 p-6 border border-ink-200 dark:border-ink-800 rounded-md hover:border-accent-500 dark:hover:border-accent-500 transition-colors"
              >
                <FiCalendar className="w-5 h-5 mt-1 text-accent-700 dark:text-accent-400 flex-shrink-0" aria-hidden />
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-ink-500 mb-2 font-medium">
                    {language === 'es' ? 'Llamada de 30 min' : '30-min call'}
                  </p>
                  <p className="font-display text-lg md:text-xl font-semibold text-ink-900 dark:text-ink-50 leading-tight">
                    {t('contact.book.label')}
                  </p>
                  <p className="text-sm text-ink-600 dark:text-ink-400 mt-2">
                    {t('contact.book.desc')}
                  </p>
                </div>
                <FiArrowUpRight className="w-4 h-4 text-ink-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0 mt-1" aria-hidden />
              </a>

              <div className="p-6 border border-ink-200 dark:border-ink-800 rounded-md">
                <div className="flex items-start gap-5">
                  <FiMessageCircle className="w-5 h-5 mt-1 text-accent-700 dark:text-accent-400 flex-shrink-0" aria-hidden />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-ink-500 mb-2 font-medium">
                      WhatsApp
                    </p>
                    <p className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50 leading-tight mb-2">
                      {language === 'es' ? 'Texto rápido' : 'Quick text'}
                    </p>
                    <p className="text-sm text-ink-600 dark:text-ink-400">
                      {language === 'es'
                        ? 'Usa el botón flotante abajo a la derecha.'
                        : 'Use the floating button in the bottom-right.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
