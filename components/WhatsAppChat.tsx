'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX } from 'react-icons/fi'
import { useLanguage } from './LanguageProvider'

interface WhatsAppChatProps {
  phoneNumber: string
}

export default function WhatsAppChat({ phoneNumber }: WhatsAppChatProps) {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const firstQuickRef = useRef<HTMLButtonElement>(null)
  const headingId = 'whatsapp-dialog-heading'

  const copy = language === 'es'
    ? {
        toggle: 'Abrir WhatsApp',
        intro: 'Hola, soy Luis de IberiaTech. ¿En qué te puedo ayudar con tu proyecto?',
        header: 'WhatsApp',
        status: 'Respondo en horario laboral',
        close: 'Cerrar',
        quick: [
          { text: 'Quiero un presupuesto para una web', msg: 'Hola, me gustaría recibir un presupuesto para una web nueva.' },
          { text: 'Necesito traducir mi web actual', msg: 'Hola, necesito ayuda para traducir mi web existente.' },
          { text: 'Hablemos del proyecto', msg: 'Hola, me gustaría hablar de los requisitos de mi proyecto.' },
        ],
        cta: 'Abrir chat',
        default: 'Hola, me interesan tus servicios de desarrollo web.',
      }
    : {
        toggle: 'Open WhatsApp',
        intro: "Hi, I'm Luis from IberiaTech. How can I help with your project?",
        header: 'WhatsApp',
        status: 'Replies during business hours',
        close: 'Close',
        quick: [
          { text: 'I want a quote for a website', msg: "Hi, I'm interested in getting a quote for a new website." },
          { text: 'I need help translating my site', msg: 'Hi, I need help translating my existing website.' },
          { text: "Let's discuss my project", msg: "Hi, I'd like to discuss my project requirements." },
        ],
        cta: 'Open chat',
        default: "Hi, I'm interested in your web development services.",
      }

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleKey)

    const focusTimer = window.setTimeout(() => {
      firstQuickRef.current?.focus()
    }, 80)

    return () => {
      document.removeEventListener('keydown', handleKey)
      window.clearTimeout(focusTimer)
      triggerRef.current?.focus()
    }
  }, [isOpen])

  const send = (msg: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
    setIsOpen(false)
  }

  return (
    <>
      <motion.button
        ref={triggerRef}
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-6 right-4 md:right-6 z-40 bg-accent-600 hover:bg-accent-700 text-ink-50 min-w-[44px] min-h-[44px] p-3 md:px-4 md:py-3 rounded-full shadow-lg transition-colors duration-200 inline-flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.3 }}
        aria-label={copy.toggle}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <FiMessageCircle className="w-5 h-5" aria-hidden />
        <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-6 z-40 w-[calc(100vw-2rem)] max-w-sm bg-[var(--surface)] rounded-lg shadow-2xl border border-[var(--border)]"
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
              <div>
                <h3 id={headingId} className="font-display text-base font-semibold text-ink-900 dark:text-ink-50">
                  {copy.header}
                </h3>
                <p className="text-xs text-ink-500">{copy.status}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-ink-500 hover:text-ink-900 dark:hover:text-ink-50 transition-colors rounded-sm"
                aria-label={copy.close}
              >
                <FiX className="w-5 h-5" aria-hidden />
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm text-ink-700 dark:text-ink-300 mb-4 leading-relaxed">
                {copy.intro}
              </p>
              <div className="space-y-2 mb-4">
                {copy.quick.map((q, i) => (
                  <button
                    key={q.text}
                    ref={i === 0 ? firstQuickRef : undefined}
                    onClick={() => send(q.msg)}
                    className="w-full text-left text-sm p-3 bg-ink-100 dark:bg-ink-900 hover:bg-ink-200 dark:hover:bg-ink-800 rounded-sm transition-colors text-ink-800 dark:text-ink-200"
                  >
                    {q.text}
                  </button>
                ))}
              </div>
              <button
                onClick={() => send(copy.default)}
                className="w-full bg-accent-600 hover:bg-accent-700 text-ink-50 py-3 px-4 rounded-sm text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <FiMessageCircle className="w-4 h-4" aria-hidden />
                <span>{copy.cta}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
