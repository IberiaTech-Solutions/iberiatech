'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Modern web & custom applications.',
    'hero.subtitle':
      'We build websites, ecommerce, bilingual experiences, and custom business software. Based in Charleston, SC. Working with clients across the US and Europe.',
    'hero.cta.work': 'See our work',
    'hero.cta.contact': 'Get in touch',

    // Services overview
    'services.title': 'What we do',
    'services.subtitle':
      'Five service areas, one consistent standard: thoughtful, fast, secure, built to last.',
    'services.web.title': 'Web & Ecommerce',
    'services.web.desc':
      'Modern websites and online stores built on Next.js. Fast, SEO-ready, mobile-first. Stripe-powered checkout, CMS-driven content, performance-first architecture.',
    'services.bilingual.title': 'Bilingual & Multilingual Sites',
    'services.bilingual.desc':
      'Professionally localized sites in English, Spanish, and German. Proper internationalization, cultural adaptation, SEO for every language.',
    'services.apps.title': 'Custom Business Applications',
    'services.apps.desc':
      'Full-stack custom software: SaaS platforms, admin dashboards, marketplaces, client portals. Built with Next.js, Supabase, Stripe, and the modern cloud.',
    'services.security.title': 'Security Audits & Hardening',
    'services.security.desc':
      'Application security reviews for web apps and custom software. OWASP Top 10 audits, authentication and authorization hardening, database row-level security policies, secure handling of payments and third-party APIs, and security-first development practices.',
    'services.ai.title': 'AI Integrations',
    'services.ai.desc':
      'Custom chatbots, WhatsApp Business automations, and AI-powered workflows for bookings, FAQs, lead capture, and follow-ups. Bilingual in English and Spanish, built on OpenAI and the modern AI stack, wired into your existing site, CRM, or calendar.',
    'services.cta': 'See all services',

    // Process
    'process.title': 'How we work',
    'process.discovery.title': 'Discovery',
    'process.discovery.desc':
      'A short call to understand your goals, audience, and scope.',
    'process.design.title': 'Design & planning',
    'process.design.desc': 'Wireframes, architecture, and a clear timeline.',
    'process.build.title': 'Build',
    'process.build.desc':
      'Iterative development with regular updates and transparent progress.',
    'process.launch.title': 'Launch & support',
    'process.launch.desc': 'Deployment, training, and ongoing maintenance.',

    // Portfolio / Work
    'work.title': 'Selected work',
    'work.subtitle':
      'A selection of recent projects across web, ecommerce, marketplaces, and custom business applications.',
    'work.view': 'View project',
    'work.viewLive': 'View live site',
    'work.cta': 'See all work',
    'work.comingSoon': 'Coming soon',
    'work.role': 'Role',
    'work.problem': 'The problem',
    'work.solution': 'The solution',
    'work.tech': 'Technologies',
    'work.back': 'Back to all work',

    // Contact
    'contact.title': "Let's talk about your project.",
    'contact.subtitle':
      'We respond to every inquiry within two business days.',
    'contact.email.label': 'Email',
    'contact.book.label': 'Book a call',
    'contact.book.desc': 'Schedule a 30-minute call at a time that works for you.',

    // About
    'about.kicker': 'Meet the founder',
    'about.heading': "I'm Luis. I founded IberiaTech to build the kind of software clients deserve.",
    'about.body':
      "I'm a security-focused software engineer based in the Charleston, SC area, originally from Spain. My path into software wasn't linear: an architectural engineering degree from IE University, six years in commercial construction, then a coding bootcamp in 2020. The detour matters. I think about software the way I learned to think about buildings: structure first, then everything else. Five years in, I work directly with every client, design and ship the software myself, and bring an application-security lens to everything I build.",
    'about.security':
      "GIAC GSEC and GFACT certified, with GCIH currently in progress through the SANS CyberTalent Academy. 1st place at HackOps 2024, speaker and judge at HarborHack, and SANS Cyber Academy scholarship recipient.",
    'about.photoAlt': 'Luis Lozoya, founder of IberiaTech Solutions',

    // Footer
    'footer.tagline': 'Modern web & custom applications.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.work': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',

    // Hero
    'hero.title': 'Web moderna y aplicaciones a medida.',
    'hero.subtitle':
      'Construimos sitios web, ecommerce, experiencias bilingües y software empresarial a medida. Con base en Charleston, SC. Trabajamos con clientes en EE. UU. y Europa.',
    'hero.cta.work': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',

    // Servicios overview
    'services.title': 'Qué hacemos',
    'services.subtitle':
      'Cinco áreas de servicio, un mismo estándar: cuidado, rápido, seguro y duradero.',
    'services.web.title': 'Web y Ecommerce',
    'services.web.desc':
      'Sitios web y tiendas online modernas construidas con Next.js. Rápidas, optimizadas para SEO, mobile-first. Pagos con Stripe, contenido gestionado, arquitectura centrada en rendimiento.',
    'services.bilingual.title': 'Sitios Bilingües y Multilingües',
    'services.bilingual.desc':
      'Sitios profesionalmente localizados en inglés, español y alemán. Internacionalización adecuada, adaptación cultural, SEO en todos los idiomas.',
    'services.apps.title': 'Aplicaciones de Negocio a Medida',
    'services.apps.desc':
      'Software full-stack a medida: plataformas SaaS, paneles de administración, marketplaces, portales para clientes. Construido con Next.js, Supabase, Stripe y la nube moderna.',
    'services.security.title': 'Auditorías y Refuerzo de Seguridad',
    'services.security.desc':
      'Revisiones de seguridad para aplicaciones web y software a medida. Auditorías OWASP Top 10, refuerzo de autenticación y autorización, políticas de seguridad a nivel de fila en la base de datos, manejo seguro de pagos e integraciones, y prácticas de desarrollo orientadas a la seguridad.',
    'services.ai.title': 'Integraciones de IA',
    'services.ai.desc':
      'Chatbots a medida, automatizaciones de WhatsApp Business y flujos con IA para reservas, FAQs, captación de leads y seguimientos. Bilingüe en inglés y español, construido con OpenAI y el stack moderno de IA, conectado a tu sitio, CRM o calendario actual.',
    'services.cta': 'Ver todos los servicios',

    // Proceso
    'process.title': 'Cómo trabajamos',
    'process.discovery.title': 'Descubrimiento',
    'process.discovery.desc':
      'Una llamada breve para entender tus objetivos, tu audiencia y el alcance del proyecto.',
    'process.design.title': 'Diseño y planificación',
    'process.design.desc':
      'Wireframes, arquitectura y un cronograma claro.',
    'process.build.title': 'Desarrollo',
    'process.build.desc':
      'Desarrollo iterativo con actualizaciones regulares y progreso transparente.',
    'process.launch.title': 'Lanzamiento y soporte',
    'process.launch.desc':
      'Despliegue, formación y mantenimiento continuo.',

    // Portafolio / Proyectos
    'work.title': 'Proyectos seleccionados',
    'work.subtitle':
      'Una selección de proyectos recientes en web, ecommerce, marketplaces y aplicaciones de negocio a medida.',
    'work.view': 'Ver proyecto',
    'work.viewLive': 'Ver sitio en vivo',
    'work.cta': 'Ver todos los proyectos',
    'work.comingSoon': 'Próximamente',
    'work.role': 'Rol',
    'work.problem': 'El problema',
    'work.solution': 'La solución',
    'work.tech': 'Tecnologías',
    'work.back': 'Volver a todos los proyectos',

    // Contacto
    'contact.title': 'Hablemos sobre tu proyecto.',
    'contact.subtitle':
      'Respondemos a cada consulta en un máximo de dos días laborables.',
    'contact.email.label': 'Email',
    'contact.book.label': 'Reservar llamada',
    'contact.book.desc':
      'Agenda una llamada de 30 minutos en el horario que mejor te venga.',

    // Sobre nosotros
    'about.kicker': 'Conoce al fundador',
    'about.heading': 'Soy Luis. Fundé IberiaTech para construir el tipo de software que los clientes merecen.',
    'about.body':
      'Soy ingeniero de software con enfoque en seguridad, basado en el área de Charleston, SC, y originario de España. Mi camino hacia el software no fue lineal: un grado en arquitectura técnica por IE University, seis años en construcción comercial y luego un bootcamp de programación en 2020. El desvío importa. Pienso en el software de la misma forma que aprendí a pensar en los edificios: primero la estructura, después todo lo demás. Cinco años después, trabajo directamente con cada cliente, diseño y entrego el software yo mismo, y aplico una mirada de seguridad a todo lo que construyo.',
    'about.security':
      'Certificado GIAC GSEC y GFACT, con GCIH en curso a través de la SANS CyberTalent Academy. Primer puesto en HackOps 2024, ponente y jurado en HarborHack, y becario de la SANS Cyber Academy.',
    'about.photoAlt': 'Luis Lozoya, fundador de IberiaTech Solutions',

    // Footer
    'footer.tagline': 'Web moderna y aplicaciones a medida.',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language | null
      if (saved === 'en' || saved === 'es') {
        setLanguageState(saved)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }

  const t = (key: string): string => {
    const langDict = translations[language] as Record<string, string>
    return langDict[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
