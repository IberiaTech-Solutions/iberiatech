'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from './LanguageProvider'
import { getCommonResponse } from './ai-chat-responses'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function AIChatbot() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const headingId = 'ai-chat-heading'

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setIsOpen(false)
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKey)

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus()
    }, 50)

    return () => {
      document.removeEventListener('keydown', handleKey)
      window.clearTimeout(focusTimer)
      triggerRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chatbot opens
      const welcomeMessage = language === 'es' 
        ? '¡Hola! Soy el asistente de IberiaTech Solutions. ¿En qué puedo ayudarte hoy?'
        : 'Hello! I\'m the IberiaTech Solutions assistant. How can I help you today?'
      
      setMessages([{
        id: '1',
        text: welcomeMessage,
        isUser: false,
        timestamp: new Date()
      }])
    }
  }, [isOpen, language])

  // Listen for custom event from navbar
  useEffect(() => {
    const handleOpenAIChat = () => {
      setIsOpen(true)
    }

    window.addEventListener('openAIChat', handleOpenAIChat)
    return () => window.removeEventListener('openAIChat', handleOpenAIChat)
  }, [])

  const getAIResponse = async (userMessage: string): Promise<string> => {
    const commonResponse = getCommonResponse(userMessage, language)
    if (commonResponse) {
      return commonResponse
    }
    
    // If not a common question, use ChatGPT
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          language: language
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get AI response')
      }

      const data = await response.json()
      return data.response || 'Sorry, I could not process your request.'
    } catch (error) {
      console.error('AI API error:', error)
      return language === 'es' 
        ? 'Lo siento, no pude procesar tu solicitud. Por favor contacta directamente a luis@iberiatechsolutions.com o llama al (864) 365-7897.'
        : 'Sorry, I could not process your request. Please contact us directly at luis@iberiatechsolutions.com or call (864) 365-7897.'
    }
  }


  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentInput = inputValue
    setInputValue('')
    setIsTyping(true)

    try {
      // Get AI response (either from Q&A or ChatGPT)
      const aiResponseText = await getAIResponse(currentInput)
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        isUser: false,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiResponse])
    } catch (error) {
      console.error('Error getting AI response:', error)
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: language === 'es' 
          ? 'Lo siento, hubo un error. Por favor contacta directamente a luis@iberiatechsolutions.com o llama al (864) 365-7897.'
          : 'Sorry, there was an error. Please contact us directly at luis@iberiatechsolutions.com or call (864) 365-7897.',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorResponse])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 md:right-6 z-40 bg-ink-950 hover:bg-ink-900 dark:bg-ink-50 dark:hover:bg-ink-100 text-ink-50 dark:text-ink-950 text-sm font-medium px-4 py-3 rounded-full shadow-lg transition-colors duration-200 min-h-[44px]"
        aria-label={language === 'es' ? 'Abrir asistente IA' : 'Open AI assistant'}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {language === 'es' ? 'Asistente IA' : 'AI Assistant'}
      </button>

      {isOpen && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={headingId}
          className={`fixed z-50 bg-[var(--surface)] rounded-md shadow-2xl border border-[var(--border)] flex flex-col transition-all duration-300 ${
            isExpanded
              ? 'inset-4 md:inset-8'
              : 'inset-4 md:bottom-40 md:right-6 md:inset-auto md:w-96 md:h-[28rem]'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
            <div>
              <h3 id={headingId} className="font-display text-base font-semibold text-ink-900 dark:text-ink-50">
                {language === 'es' ? 'Asistente IA' : 'AI Assistant'}
              </h3>
              <p className="text-xs text-ink-500">
                {language === 'es' ? 'Respuesta automática' : 'Auto-reply'}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden md:inline-flex min-w-[44px] min-h-[44px] items-center justify-center px-3 text-xs font-medium text-ink-600 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-50 transition-colors rounded-sm"
                aria-label={isExpanded ? (language === 'es' ? 'Contraer' : 'Collapse') : (language === 'es' ? 'Expandir' : 'Expand')}
              >
                {isExpanded ? (language === 'es' ? 'Contraer' : 'Collapse') : (language === 'es' ? 'Expandir' : 'Expand')}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-ink-500 hover:text-ink-900 dark:hover:text-ink-50 transition-colors rounded-sm"
                aria-label={language === 'es' ? 'Cerrar' : 'Close'}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-md text-sm leading-relaxed ${
                    message.isUser
                      ? 'bg-ink-900 text-ink-50 dark:bg-ink-50 dark:text-ink-950'
                      : 'bg-ink-100 dark:bg-ink-900 text-ink-900 dark:text-ink-100'
                  }`}
                >
                  <div className="whitespace-pre-wrap">
                    {message.text.split('**').map((part, index) =>
                      index % 2 === 1 ? (
                        <strong key={index} className="font-semibold">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}

            {messages.length <= 1 && (
              <div className="space-y-2 pt-2">
                <p className="text-[11px] uppercase tracking-wider text-ink-500 font-medium">
                  {language === 'es' ? 'Preguntas frecuentes' : 'Quick questions'}
                </p>
                <div className="grid grid-cols-1 gap-1.5">
                  {[
                    language === 'es' ? '¿Cuáles son sus precios?' : 'What are your prices?',
                    language === 'es' ? '¿Qué servicios ofrecen?' : 'What services do you offer?',
                    language === 'es' ? '¿Cómo puedo contactarlos?' : 'How can I contact you?',
                    language === 'es' ? '¿Hacen sitios bilingües?' : 'Do you make bilingual websites?',
                  ].map((question) => (
                    <button
                      key={question}
                      disabled={isTyping}
                      onClick={async () => {
                        if (isTyping) return
                        const userMessage: Message = {
                          id: Date.now().toString(),
                          text: question,
                          isUser: true,
                          timestamp: new Date(),
                        }
                        setMessages((prev) => [...prev, userMessage])
                        setIsTyping(true)

                        try {
                          const aiResponseText = await getAIResponse(question)
                          const aiResponse: Message = {
                            id: (Date.now() + 1).toString(),
                            text: aiResponseText,
                            isUser: false,
                            timestamp: new Date(),
                          }
                          setMessages((prev) => [...prev, aiResponse])
                        } catch (error) {
                          console.error('Error getting AI response:', error)
                          const errorResponse: Message = {
                            id: (Date.now() + 1).toString(),
                            text: language === 'es'
                              ? 'Lo siento, hubo un error. Por favor contacta directamente a luis@iberiatechsolutions.com o llama al (864) 365-7897.'
                              : 'Sorry, there was an error. Please contact us directly at luis@iberiatechsolutions.com or call (864) 365-7897.',
                            isUser: false,
                            timestamp: new Date(),
                          }
                          setMessages((prev) => [...prev, errorResponse])
                        } finally {
                          setIsTyping(false)
                        }
                      }}
                      className="text-left px-3 py-2 bg-ink-100 dark:bg-ink-900 hover:bg-ink-200 dark:hover:bg-ink-800 disabled:opacity-40 disabled:cursor-not-allowed rounded-sm text-sm text-ink-800 dark:text-ink-200 transition-colors duration-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-ink-100 dark:bg-ink-900 px-3 py-2 rounded-md">
                  <div className="flex gap-1" aria-label={language === 'es' ? 'Escribiendo' : 'Typing'}>
                    <span className="w-1.5 h-1.5 bg-ink-400 rounded-full animate-pulse" />
                    <span className="w-1.5 h-1.5 bg-ink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1.5 h-1.5 bg-ink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-[var(--border)]">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={language === 'es' ? 'Escribe tu mensaje…' : 'Type your message…'}
                className="flex-1 px-3 py-2.5 bg-transparent border border-[var(--border)] rounded-sm text-sm text-ink-900 dark:text-ink-50 placeholder:text-ink-500"
                aria-label={language === 'es' ? 'Mensaje' : 'Message'}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center bg-ink-900 hover:bg-ink-800 dark:bg-ink-50 dark:hover:bg-ink-100 disabled:opacity-40 disabled:cursor-not-allowed text-ink-50 dark:text-ink-950 rounded-sm transition-colors duration-200"
                aria-label={language === 'es' ? 'Enviar' : 'Send'}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
