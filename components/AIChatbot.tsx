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
        ? 'Lo siento, no pude procesar tu solicitud. Por favor contacta directamente a luis.lozoya.tech@gmail.com o llama al (864) 365-7897.'
        : 'Sorry, I could not process your request. Please contact us directly at luis.lozoya.tech@gmail.com or call (864) 365-7897.'
    }
  }

  const getCommonResponse = (message: string): string | null => {
    // Common questions and responses
    const responses = {
      en: {
        greeting: "Hello! I'm here to help you with IberiaTech Solutions. What would you like to know?",
        pricing: "We offer three packages with clear price ranges so you know if we fit your budget: **Starter ($1,000 – $1,800)** – Ideal for first-time websites. Up to 4 pages, basic SEO, 3–4 weeks, 2 rounds of revisions, English & Spanish, 1 month support. **Business ($2,000 – $4,000)** – Contact form leads, Google visibility, multi-lingual reach. Up to 7 pages, advanced SEO + Analytics, 4–6 weeks, 3 months support. **Custom ($4,000+)** – eCommerce, booking systems, member portals. Custom scope, 6–10 weeks, revisions included, 6 months support. We also offer optional monthly support: Basic $49/mo, Growth $99/mo, Premium $199/mo. All packages include free consultation. Would you like details on a specific tier?",
        services: "We specialize in: **Custom Web Development** - Modern websites built with React/Next.js. **Mobile-First Design** - Optimized for all devices. **Bilingual Websites** - English and Spanish for US/Spanish markets. **Security & Authentication** - Secure user data and login systems. **Performance Optimization** - Fast loading and SEO optimization. **Ongoing Support** - Comprehensive care plans with backups and updates. Which service interests you most?",
        contact: "You can reach us at **luis.lozoya.tech@gmail.com** or call **(864) 365-7897**. We're located in Charleston, SC and respond within 24 hours. You can also use WhatsApp for quick questions!",
        portfolio: "Check out our featured project: **Cursor Rules Hub** - A professional platform that helps developers work faster and more efficiently. You can see the live demo at cursor-rules-virid.vercel.app and view the code on GitHub. We're building more projects for small and medium companies.",
        bilingual: "Yes! We create **bilingual websites in English and Spanish**, perfect for reaching both US and Spanish markets. We handle professional translation by our bilingual team, SEO optimization for both languages, and cultural adaptation for authentic communication. This helps you expand your business internationally.",
        timeline: "Project timelines vary by complexity: **Simple websites** (2-4 weeks), **Business websites** (4-6 weeks), **Complex projects** (6-8 weeks). We provide a detailed timeline during our free consultation. We also offer ongoing support and maintenance after launch.",
        policy: "Our policies: **Free consultation** for all projects. **Transparent pricing** with no hidden fees. **24-hour response time** for all inquiries. **Ongoing support** available with comprehensive care plans. **Secure hosting** and regular backups included. **Bilingual support** in English and Spanish. **Mobile-first** approach for all projects.",
        support: "We offer comprehensive ongoing support including: **Regular backups**, **Security monitoring**, **Performance optimization**, **Content updates**, **Technical support**, **Hosting management**, and **SEO maintenance**. Support plans are available for all our packages.",
        default: "I'd be happy to help! You can ask me about our services, pricing, portfolio, policies, support, or how to get started. You can also contact us directly at luis.lozoya.tech@gmail.com or call (864) 365-7897."
      },
      es: {
        greeting: "¡Hola! Estoy aquí para ayudarte con IberiaTech Solutions. ¿Qué te gustaría saber?",
        pricing: "Ofrecemos tres paquetes con rangos claros: **Básico (1.000 – 1.800 $)** – Ideal para primer sitio. Hasta 4 páginas, SEO básico, 3–4 semanas, 2 rondas de revisiones, inglés y español, 1 mes de soporte. **Empresarial (2.000 – 4.000 $)** – Leads por formulario, visibilidad en Google, alcance multilingüe. Hasta 7 páginas, SEO avanzado + Analytics, 4–6 semanas, 3 meses de soporte. **Personalizado (desde 4.000 $)** – eCommerce, reservas, portales de socios. Alcance a medida, 6–10 semanas, revisiones incluidas, 6 meses de soporte. Soporte mensual opcional: Básico 49 €/mes, Crecimiento 99 €/mes, Premium 199 €/mes. Todos incluyen consulta gratuita. ¿Quieres detalles de algún nivel?",
        services: "Nos especializamos en: **Desarrollo Web Personalizado** - Sitios web modernos construidos con React/Next.js. **Diseño Mobile-First** - Optimizado para todos los dispositivos. **Sitios Web Bilingües** - Inglés y español para mercados de EE.UU./España. **Seguridad y Autenticación** - Datos seguros y sistemas de login. **Optimización de Rendimiento** - Carga rápida y optimización SEO. **Soporte Continuo** - Planes de cuidado integral con respaldos y actualizaciones. ¿Qué servicio te interesa más?",
        contact: "Puedes contactarnos en **luis.lozoya.tech@gmail.com** o llamar al **(864) 365-7897**. Estamos ubicados en Charleston, SC y respondemos en 24 horas. ¡También puedes usar WhatsApp para preguntas rápidas!",
        portfolio: "Echa un vistazo a nuestro proyecto destacado: **Cursor Rules Hub** - Una plataforma profesional que ayuda a los desarrolladores a trabajar más rápido y eficientemente. Puedes ver la demo en vivo en cursor-rules-virid.vercel.app y el código en GitHub. Construimos más proyectos para pequeñas y medianas empresas.",
        bilingual: "¡Sí! Creamos **sitios web bilingües en inglés y español**, perfectos para llegar a mercados de EE.UU. y España. Nos encargamos de la traducción profesional por nuestro equipo bilingüe, optimización SEO para ambos idiomas, y adaptación cultural para comunicación auténtica. Esto te ayuda a expandir tu negocio internacionalmente.",
        timeline: "Los tiempos de proyecto varían según la complejidad: **Sitios web simples** (2-4 semanas), **Sitios web empresariales** (4-6 semanas), **Proyectos complejos** (6-8 semanas). Proporcionamos un cronograma detallado durante nuestra consulta gratuita. También ofrecemos soporte continuo y mantenimiento después del lanzamiento.",
        policy: "Nuestras políticas: **Consulta gratuita** para todos los proyectos. **Precios transparentes** sin tarifas ocultas. **Tiempo de respuesta de 24 horas** para todas las consultas. **Soporte continuo** disponible con planes de cuidado integral. **Hosting seguro** y respaldos regulares incluidos. **Soporte bilingüe** en inglés y español. **Enfoque mobile-first** para todos los proyectos.",
        support: "Ofrecemos soporte continuo integral incluyendo: **Respaldos regulares**, **Monitoreo de seguridad**, **Optimización de rendimiento**, **Actualizaciones de contenido**, **Soporte técnico**, **Gestión de hosting**, y **Mantenimiento SEO**. Los planes de soporte están disponibles para todos nuestros paquetes.",
        default: "¡Estaré encantado de ayudarte! Puedes preguntarme sobre nuestros servicios, precios, portafolio, políticas, soporte, o cómo comenzar. También puedes contactarnos directamente en luis.lozoya.tech@gmail.com o llamar al (864) 365-7897."
      }
    }

    const langResponses = responses[language as keyof typeof responses]

    if (message.includes('hello') || message.includes('hi') || message.includes('hola')) {
      return langResponses.greeting
    }
    if (message.includes('price') || message.includes('cost') || message.includes('precio') || message.includes('costo') || message.includes('package') || message.includes('paquete')) {
      return langResponses.pricing
    }
    if (message.includes('service') || message.includes('servicio') || message.includes('what do you do') || message.includes('qué haces') || message.includes('offer') || message.includes('ofrecemos')) {
      return langResponses.services
    }
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('teléfono') || message.includes('reach') || message.includes('contactar')) {
      return langResponses.contact
    }
    if (message.includes('portfolio') || message.includes('project') || message.includes('proyecto') || message.includes('work') || message.includes('example') || message.includes('ejemplo')) {
      return langResponses.portfolio
    }
    if (message.includes('bilingual') || message.includes('spanish') || message.includes('español') || message.includes('bilingüe') || message.includes('language') || message.includes('idioma')) {
      return langResponses.bilingual
    }
    if (message.includes('time') || message.includes('timeline') || message.includes('tiempo') || message.includes('cuándo') || message.includes('how long') || message.includes('cuánto tiempo')) {
      return langResponses.timeline
    }
    if (message.includes('policy') || message.includes('policies') || message.includes('política') || message.includes('políticas') || message.includes('terms') || message.includes('términos')) {
      return langResponses.policy
    }
    if (message.includes('support') || message.includes('soporte') || message.includes('maintenance') || message.includes('mantenimiento') || message.includes('help') || message.includes('ayuda')) {
      return langResponses.support
    }
    
    return null // Return null if no common response found
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
          ? 'Lo siento, hubo un error. Por favor contacta directamente a luis.lozoya.tech@gmail.com o llama al (864) 365-7897.'
          : 'Sorry, there was an error. Please contact us directly at luis.lozoya.tech@gmail.com or call (864) 365-7897.',
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
                      ? 'bg-brand-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && (
                      <span className="text-brand-600 dark:text-brand-400">🤖</span>
                    )}
                    <div className="text-sm whitespace-pre-wrap leading-relaxed">
                      {message.text.split('**').map((part, index) => {
                        if (index % 2 === 1) {
                          return <strong key={index} className="font-semibold text-brand-600 dark:text-brand-400">{part}</strong>
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
                              ? 'Lo siento, hubo un error. Por favor contacta directamente a luis.lozoya.tech@gmail.com o llama al (864) 365-7897.'
                              : 'Sorry, there was an error. Please contact us directly at luis.lozoya.tech@gmail.com or call (864) 365-7897.',
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
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="p-2 bg-brand-600 hover:bg-brand-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200"
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