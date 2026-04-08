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
    // Common questions and responses
    const responses = {
      en: {
        greeting: "Hello! I'm Luis from IberiaTech Solutions. What can I help you with?",
        pricing: "No big upfront cost. I design, build, and maintain your site for a flat monthly fee. Starter is $149/mo for a simple site (up to 4 pages). Business is $249/mo for a full site with blog, SEO, and analytics. Custom is $449/mo+ for eCommerce, apps, or anything complex. Hosting and a standard .com domain are included. 12-month commitment, then you keep it at a lower rate or own the site. Want details on a specific plan?",
        services: "I build custom websites with React and Next.js, optimized for mobile, with English and Spanish built in from day one. I also handle SEO, performance, and ongoing maintenance after launch. What does your business need?",
        contact: "Email me at luis@iberiatechsolutions.com or call (864) 365-7897. I'm in Charleston, SC and I respond within 24 hours. WhatsApp works too for quick questions.",
        portfolio: "Check out Cursor Rules Hub, a platform I built for developers. You can see it live at cursor-rules-virid.vercel.app. I'm taking on more projects for small and medium businesses right now.",
        bilingual: "Yes, every site I build comes in English and Spanish. I grew up in Spain and live in Charleston, so both languages are native to me. It's not a plugin or translation tool. SEO for both languages and cultural adaptation are included in every plan.",
        timeline: "Starter plans are live in 1 to 2 weeks. Business plans take 2 to 4 weeks. Custom projects take 4 to 7 weeks. I'll give you a detailed timeline on a free strategy call. After launch, maintenance and updates are ongoing as part of your plan.",
        policy: "Free strategy call before we start. Transparent monthly pricing with no hidden fees. I respond within 24 hours. Hosting, domain, maintenance, and bilingual support are all included. 12-month commitment, then it's flexible.",
        support: "Support is included in every plan. I handle site maintenance, performance, content updates, technical issues, hosting, and SEO. Higher plans get faster response times and more updates per month.",
        default: "I'd be happy to help! You can ask me about services, pricing, portfolio, or how to get started. You can also reach me directly at luis@iberiatechsolutions.com or call (864) 365-7897."
      },
      es: {
        greeting: "¡Hola! Soy Luis de IberiaTech Solutions. ¿En qué puedo ayudarte?",
        pricing: "Sin costo inicial grande. Diseño, construyo y mantengo tu sitio por una tarifa mensual fija. Inicio es 149 €/mes para un sitio simple (hasta 4 páginas). Empresarial es 249 €/mes con blog, SEO y analytics. Personalizado es 449 €/mes+ para eCommerce, apps o lo que necesites. Hosting y dominio .com estándar incluidos. Compromiso de 12 meses, después tarifa reducida o el sitio es tuyo. ¿Quieres detalles de algún plan?",
        services: "Construyo sitios web personalizados con React y Next.js, optimizados para móvil, con inglés y español desde el primer día. También me encargo del SEO, rendimiento y mantenimiento continuo después del lanzamiento. ¿Qué necesita tu negocio?",
        contact: "Escríbeme a luis@iberiatechsolutions.com o llámame al (864) 365-7897. Estoy en Charleston, SC y respondo en 24 horas. WhatsApp también funciona para preguntas rápidas.",
        portfolio: "Mira Cursor Rules Hub, una plataforma que construí para desarrolladores. Puedes verla en cursor-rules-virid.vercel.app. Estoy tomando más proyectos para pequeñas y medianas empresas.",
        bilingual: "Sí, cada sitio que construyo viene en inglés y español. Crecí en España y vivo en Charleston, así que los dos idiomas son nativos para mí. No es un plugin ni herramienta de traducción. SEO para ambos idiomas y adaptación cultural incluidos en cada plan.",
        timeline: "Los planes Inicio están online en 1 a 2 semanas. Empresarial tarda 2 a 4 semanas. Personalizado entre 4 y 7 semanas. Te doy un cronograma detallado en una llamada estratégica gratuita. Después del lanzamiento, el mantenimiento y las actualizaciones son parte de tu plan.",
        policy: "Llamada estratégica gratuita antes de empezar. Precio mensual transparente sin costos ocultos. Respondo en 24 horas. Hosting, dominio, mantenimiento y soporte bilingüe incluidos. Compromiso de 12 meses, después flexible.",
        support: "El soporte está incluido en cada plan. Me encargo del mantenimiento, rendimiento, contenido, problemas técnicos, hosting y SEO. Los planes superiores tienen respuesta más rápida y más actualizaciones al mes.",
        default: "¡Encantado de ayudarte! Puedes preguntarme sobre servicios, precios, portafolio, o cómo empezar. También puedes contactarme en luis@iberiatechsolutions.com o llamar al (864) 365-7897."
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