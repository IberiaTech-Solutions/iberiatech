'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from './LanguageProvider'

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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
    const message = userMessage.toLowerCase()
    
    // Check if it's a common question first (Q&A system)
    const commonResponse = getCommonResponse(message)
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

  const getCommonResponse = (message: string): string | null => {
    const responses = {
      en: {
        greeting:
          "Hi, I'm the IberiaTech Solutions assistant. I can answer questions about our services, recent work, process, and how to get in touch. What would you like to know?",
        services:
          "We focus on four areas: Web & Ecommerce, Bilingual & Multilingual Sites (EN/ES/DE), Custom Business Applications (SaaS, dashboards, marketplaces, portals), and Security Audits & Hardening. Everything is built on Next.js, React, Supabase, and modern cloud infrastructure. Want me to go deeper on any one?",
        web:
          "Web & Ecommerce work covers modern websites and online stores built on Next.js. Fast, SEO-ready, mobile-first, with Stripe-powered checkout when needed. We focus on performance and clean architecture from day one.",
        bilingual:
          "We build sites in English, Spanish, and German with proper internationalization, cultural adaptation, and SEO for every language. Luis grew up in Spain and lives in the US, so the bilingual side is native, not a plugin.",
        apps:
          "Custom Business Applications are our deeper engagements: full-stack SaaS platforms, admin dashboards, marketplaces, and client portals. We currently have several in active development that we'll share more about soon.",
        security:
          "Security Audits & Hardening cover application security reviews for web apps and custom software: OWASP Top 10 audits, authentication and authorization hardening, database row-level security policies, secure handling of payments and third-party APIs, and security-first development practices.",
        portfolio:
          "Recent work includes NEVA Estudio (architecture studio site in Asturias), Coastal Millwork (commercial contractor in South Carolina), and ShopEssentialsHub (curated affiliate platform). Several other projects are in active development. You can see the full list at /work on this site.",
        process:
          "Our process has four steps: Discovery (a short call to understand your goals), Design & Planning (wireframes, architecture, timeline), Build (iterative development with regular updates), and Launch & Support (deployment, training, ongoing maintenance).",
        contact:
          "You can reach us by email at luis@iberiatechsolutions.com, book a 30-minute call from the Contact page, or message us on WhatsApp using the floating button. We respond to every inquiry within two business days.",
        timeline:
          "Timelines depend entirely on scope. A focused website project might run 2–6 weeks. A custom business application can take a few months. We give you a clear, realistic timeline after the discovery call.",
        stack:
          "We work primarily with Next.js, React, TypeScript, Tailwind CSS, Supabase (Postgres + Auth + RLS), Stripe, Vercel for deployment, and AWS where needed. For internationalization we use next-intl.",
        location:
          "We're based in Charleston, SC and work remotely with clients across the US and Europe, including Spain, where Luis grew up.",
        default:
          "Happy to help. You can ask about our services, recent work, process, technology stack, or how to get in touch. For anything more specific, the best way is to email luis@iberiatechsolutions.com or book a 30-minute call.",
      },
      es: {
        greeting:
          "Hola, soy el asistente de IberiaTech Solutions. Puedo responder preguntas sobre nuestros servicios, proyectos recientes, proceso de trabajo y cómo ponerte en contacto. ¿Qué te gustaría saber?",
        services:
          "Nos centramos en cuatro áreas: Web y Ecommerce, Sitios Bilingües y Multilingües (EN/ES/DE), Aplicaciones de Negocio a Medida (SaaS, paneles, marketplaces, portales) y Auditorías y Refuerzo de Seguridad. Todo construido con Next.js, React, Supabase y cloud moderno. ¿Quieres que profundice en alguna área?",
        web:
          "El área de Web y Ecommerce cubre sitios web y tiendas online modernas construidas con Next.js. Rápidas, optimizadas para SEO, mobile-first, y con pago via Stripe cuando se necesita. Nos centramos en rendimiento y arquitectura limpia desde el primer día.",
        bilingual:
          "Construimos sitios en inglés, español y alemán con internacionalización adecuada, adaptación cultural y SEO en todos los idiomas. Luis creció en España y vive en EE. UU., así que el lado bilingüe es nativo, no un plugin.",
        apps:
          "Las Aplicaciones de Negocio a Medida son nuestros proyectos más profundos: plataformas SaaS full-stack, paneles de administración, marketplaces y portales para clientes. Actualmente tenemos varios en desarrollo activo de los que compartiremos más detalles próximamente.",
        security:
          "Las Auditorías y Refuerzo de Seguridad cubren revisiones de seguridad para aplicaciones web y software a medida: auditorías OWASP Top 10, refuerzo de autenticación y autorización, políticas de seguridad a nivel de fila en la base de datos, manejo seguro de pagos e integraciones, y prácticas de desarrollo orientadas a la seguridad.",
        portfolio:
          "Proyectos recientes incluyen NEVA Estudio (sitio de un estudio de arquitectura en Asturias), Coastal Millwork (contratista comercial en Carolina del Sur) y ShopEssentialsHub (plataforma de afiliados curada). Tenemos otros proyectos en desarrollo activo. Puedes ver la lista completa en /work en este sitio.",
        process:
          "Nuestro proceso tiene cuatro pasos: Descubrimiento (una llamada corta para entender tus objetivos), Diseño y Planificación (wireframes, arquitectura, cronograma), Desarrollo (desarrollo iterativo con actualizaciones regulares) y Lanzamiento y Soporte (despliegue, formación y mantenimiento continuo).",
        contact:
          "Puedes contactarnos por email en luis@iberiatechsolutions.com, reservar una llamada de 30 minutos desde la página de Contacto, o escribirnos por WhatsApp usando el botón flotante. Respondemos a cada consulta en un máximo de dos días laborables.",
        timeline:
          "Los plazos dependen totalmente del alcance. Un proyecto web enfocado puede durar entre 2 y 6 semanas. Una aplicación de negocio a medida puede llevar varios meses. Te damos un cronograma claro y realista tras la llamada de descubrimiento.",
        stack:
          "Trabajamos principalmente con Next.js, React, TypeScript, Tailwind CSS, Supabase (Postgres + Auth + RLS), Stripe, Vercel para despliegue y AWS cuando es necesario. Para internacionalización usamos next-intl.",
        location:
          "Estamos basados en Charleston, SC y trabajamos en remoto con clientes en EE. UU. y Europa, incluyendo España, donde creció Luis.",
        default:
          "Encantado de ayudarte. Puedes preguntarme sobre nuestros servicios, proyectos recientes, proceso, stack tecnológico o cómo contactarnos. Para algo más específico, lo mejor es escribirnos a luis@iberiatechsolutions.com o reservar una llamada de 30 minutos.",
      },
    }

    const langResponses = responses[language as keyof typeof responses]

    if (message.includes('hello') || message.includes('hi ') || message === 'hi' || message.includes('hola')) {
      return langResponses.greeting
    }
    if (
      message.includes('security') ||
      message.includes('seguridad') ||
      message.includes('owasp') ||
      message.includes('audit') ||
      message.includes('auditoría') ||
      message.includes('pentest') ||
      message.includes('hardening')
    ) {
      return langResponses.security
    }
    if (
      message.includes('ecommerce') ||
      message.includes('e-commerce') ||
      message.includes('shop') ||
      message.includes('store') ||
      message.includes('tienda') ||
      message.includes('web') ||
      message.includes('website') ||
      message.includes('sitio')
    ) {
      return langResponses.web
    }
    if (
      message.includes('bilingual') ||
      message.includes('spanish') ||
      message.includes('german') ||
      message.includes('multilingual') ||
      message.includes('español') ||
      message.includes('alemán') ||
      message.includes('bilingüe') ||
      message.includes('idioma') ||
      message.includes('language')
    ) {
      return langResponses.bilingual
    }
    if (
      message.includes('saas') ||
      message.includes('app') ||
      message.includes('platform') ||
      message.includes('dashboard') ||
      message.includes('marketplace') ||
      message.includes('portal') ||
      message.includes('aplicación') ||
      message.includes('plataforma')
    ) {
      return langResponses.apps
    }
    if (
      message.includes('service') ||
      message.includes('servicio') ||
      message.includes('what do you do') ||
      message.includes('qué hacen') ||
      message.includes('qué haces') ||
      message.includes('offer') ||
      message.includes('ofrecen')
    ) {
      return langResponses.services
    }
    if (
      message.includes('process') ||
      message.includes('proceso') ||
      message.includes('how do you work') ||
      message.includes('cómo trabajan') ||
      message.includes('cómo trabajáis')
    ) {
      return langResponses.process
    }
    if (
      message.includes('portfolio') ||
      message.includes('project') ||
      message.includes('proyecto') ||
      message.includes('work') ||
      message.includes('example') ||
      message.includes('ejemplo') ||
      message.includes('case stud')
    ) {
      return langResponses.portfolio
    }
    if (
      message.includes('contact') ||
      message.includes('email') ||
      message.includes('phone') ||
      message.includes('teléfono') ||
      message.includes('reach') ||
      message.includes('contactar') ||
      message.includes('llamar') ||
      message.includes('call')
    ) {
      return langResponses.contact
    }
    if (
      message.includes('time') ||
      message.includes('timeline') ||
      message.includes('how long') ||
      message.includes('cuánto tiempo') ||
      message.includes('plazo') ||
      message.includes('cuándo')
    ) {
      return langResponses.timeline
    }
    if (
      message.includes('stack') ||
      message.includes('technology') ||
      message.includes('tech') ||
      message.includes('framework') ||
      message.includes('tecnología') ||
      message.includes('next.js') ||
      message.includes('react')
    ) {
      return langResponses.stack
    }
    if (
      message.includes('where') ||
      message.includes('location') ||
      message.includes('charleston') ||
      message.includes('dónde') ||
      message.includes('ubicación')
    ) {
      return langResponses.location
    }

    return null
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button - Now visible on all devices */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-4 md:right-6 z-50 bg-accent-500 hover:bg-accent-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 animate-pulse"
        aria-label={language === 'es' ? 'Abrir chat' : 'Open chat'}
      >
        <div className="flex items-center space-x-2">
          <span className="text-lg md:text-xl">🤖</span>
          <span className="hidden sm:block text-sm font-medium">
            {language === 'es' ? 'Chat IA' : 'AI Chat'}
          </span>
        </div>
      </button>

      {/* Chat Window - Now responsive for all devices */}
      {isOpen && (
        <div className={`fixed z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 ${
          isExpanded 
            ? 'inset-4 md:inset-8' 
            : 'inset-4 md:bottom-40 md:right-6 md:inset-auto md:w-80 md:h-96'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                🤖
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {language === 'es' ? 'Asistente IA' : 'AI Assistant'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {language === 'es' ? 'En línea' : 'Online'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 px-2 py-1 text-xs font-medium border border-gray-300 dark:border-gray-600 rounded"
                title={isExpanded ? (language === 'es' ? 'Contraer' : 'Collapse') : (language === 'es' ? 'Expandir' : 'Expand')}
              >
                {isExpanded ? (language === 'es' ? 'Pequeño' : 'Small') : (language === 'es' ? 'Grande' : 'Large')}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-sm px-4 py-3 rounded-lg ${
                    message.isUser
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && (
                      <span className="text-primary-600 dark:text-primary-400">🤖</span>
                    )}
                    <div className="text-sm whitespace-pre-wrap leading-relaxed">
                      {message.text.split('**').map((part, index) => {
                        if (index % 2 === 1) {
                          return <strong key={index} className="font-semibold text-primary-600 dark:text-primary-400">{part}</strong>
                        }
                        return part
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Example Questions - Show when no messages or only welcome message */}
            {messages.length <= 1 && (
              <div className="space-y-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center font-medium">
                  {language === 'es' ? 'Preguntas de ejemplo:' : 'Example questions:'}
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    language === 'es' ? '¿Cuáles son sus precios?' : 'What are your prices?',
                    language === 'es' ? '¿Qué servicios ofrecen?' : 'What services do you offer?',
                    language === 'es' ? '¿Cómo puedo contactarlos?' : 'How can I contact you?',
                    language === 'es' ? '¿Hacen sitios bilingües?' : 'Do you make bilingual websites?'
                  ].map((question, index) => (
                    <button
                      key={index}
                      onClick={async () => {
                        const userMessage: Message = {
                          id: Date.now().toString(),
                          text: question,
                          isUser: true,
                          timestamp: new Date()
                        }
                        setMessages(prev => [...prev, userMessage])
                        setIsTyping(true)

                        try {
                          const aiResponseText = await getAIResponse(question)
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
                      }}
                      className="text-left p-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-xs text-gray-700 dark:text-gray-300 transition-colors duration-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={language === 'es' ? 'Escribe tu mensaje...' : 'Type your message...'}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="p-2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}