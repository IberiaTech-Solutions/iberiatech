type Language = 'en' | 'es'
type Intent =
  | 'greeting'
  | 'services'
  | 'web'
  | 'bilingual'
  | 'apps'
  | 'security'
  | 'portfolio'
  | 'process'
  | 'contact'
  | 'timeline'
  | 'stack'
  | 'location'

const RESPONSES: Record<Language, Record<Intent, string>> = {
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
  },
  es: {
    greeting:
      'Hola, soy el asistente de IberiaTech Solutions. Puedo responder preguntas sobre nuestros servicios, proyectos recientes, proceso de trabajo y cómo ponerte en contacto. ¿Qué te gustaría saber?',
    services:
      'Nos centramos en cuatro áreas: Web y Ecommerce, Sitios Bilingües y Multilingües (EN/ES/DE), Aplicaciones de Negocio a Medida (SaaS, paneles, marketplaces, portales) y Auditorías y Refuerzo de Seguridad. Todo construido con Next.js, React, Supabase y cloud moderno. ¿Quieres que profundice en alguna área?',
    web:
      'El área de Web y Ecommerce cubre sitios web y tiendas online modernas construidas con Next.js. Rápidas, optimizadas para SEO, mobile-first, y con pago via Stripe cuando se necesita. Nos centramos en rendimiento y arquitectura limpia desde el primer día.',
    bilingual:
      'Construimos sitios en inglés, español y alemán con internacionalización adecuada, adaptación cultural y SEO en todos los idiomas. Luis creció en España y vive en EE. UU., así que el lado bilingüe es nativo, no un plugin.',
    apps:
      'Las Aplicaciones de Negocio a Medida son nuestros proyectos más profundos: plataformas SaaS full-stack, paneles de administración, marketplaces y portales para clientes. Actualmente tenemos varios en desarrollo activo de los que compartiremos más detalles próximamente.',
    security:
      'Las Auditorías y Refuerzo de Seguridad cubren revisiones de seguridad para aplicaciones web y software a medida: auditorías OWASP Top 10, refuerzo de autenticación y autorización, políticas de seguridad a nivel de fila en la base de datos, manejo seguro de pagos e integraciones, y prácticas de desarrollo orientadas a la seguridad.',
    portfolio:
      'Proyectos recientes incluyen NEVA Estudio (sitio de un estudio de arquitectura en Asturias), Coastal Millwork (contratista comercial en Carolina del Sur) y ShopEssentialsHub (plataforma de afiliados curada). Tenemos otros proyectos en desarrollo activo. Puedes ver la lista completa en /work en este sitio.',
    process:
      'Nuestro proceso tiene cuatro pasos: Descubrimiento (una llamada corta para entender tus objetivos), Diseño y Planificación (wireframes, arquitectura, cronograma), Desarrollo (desarrollo iterativo con actualizaciones regulares) y Lanzamiento y Soporte (despliegue, formación y mantenimiento continuo).',
    contact:
      'Puedes contactarnos por email en luis@iberiatechsolutions.com, reservar una llamada de 30 minutos desde la página de Contacto, o escribirnos por WhatsApp usando el botón flotante. Respondemos a cada consulta en un máximo de dos días laborables.',
    timeline:
      'Los plazos dependen totalmente del alcance. Un proyecto web enfocado puede durar entre 2 y 6 semanas. Una aplicación de negocio a medida puede llevar varios meses. Te damos un cronograma claro y realista tras la llamada de descubrimiento.',
    stack:
      'Trabajamos principalmente con Next.js, React, TypeScript, Tailwind CSS, Supabase (Postgres + Auth + RLS), Stripe, Vercel para despliegue y AWS cuando es necesario. Para internacionalización usamos next-intl.',
    location:
      'Estamos basados en Charleston, SC y trabajamos en remoto con clientes en EE. UU. y Europa, incluyendo España, donde creció Luis.',
  },
}

const INTENT_KEYWORDS: Array<{ intent: Intent; keywords: string[] }> = [
  { intent: 'greeting', keywords: ['hello', 'hi ', 'hola'] },
  { intent: 'security', keywords: ['security', 'seguridad', 'owasp', 'audit', 'auditoría', 'pentest', 'hardening'] },
  { intent: 'web', keywords: ['ecommerce', 'e-commerce', 'shop', 'store', 'tienda', 'web', 'website', 'sitio'] },
  { intent: 'bilingual', keywords: ['bilingual', 'spanish', 'german', 'multilingual', 'español', 'alemán', 'bilingüe', 'idioma', 'language'] },
  { intent: 'apps', keywords: ['saas', 'app', 'platform', 'dashboard', 'marketplace', 'portal', 'aplicación', 'plataforma'] },
  { intent: 'services', keywords: ['service', 'servicio', 'what do you do', 'qué hacen', 'qué haces', 'offer', 'ofrecen'] },
  { intent: 'process', keywords: ['process', 'proceso', 'how do you work', 'cómo trabajan', 'cómo trabajáis'] },
  { intent: 'portfolio', keywords: ['portfolio', 'project', 'proyecto', 'work', 'example', 'ejemplo', 'case stud'] },
  { intent: 'contact', keywords: ['contact', 'email', 'phone', 'teléfono', 'reach', 'contactar', 'llamar', 'call'] },
  { intent: 'timeline', keywords: ['time', 'timeline', 'how long', 'cuánto tiempo', 'plazo', 'cuándo'] },
  { intent: 'stack', keywords: ['stack', 'technology', 'tech', 'framework', 'tecnología', 'next.js', 'react'] },
  { intent: 'location', keywords: ['where', 'location', 'charleston', 'dónde', 'ubicación'] },
]

export function getCommonResponse(message: string, language: Language): string | null {
  const normalized = message.toLowerCase()
  const matched = INTENT_KEYWORDS.find(({ keywords }) =>
    keywords.some((kw) => (kw === 'hi ' ? normalized.includes('hi ') || normalized === 'hi' : normalized.includes(kw)))
  )
  if (!matched) return null
  return RESPONSES[language][matched.intent]
}

export const DEFAULT_FALLBACK = {
  en:
    'Happy to help. You can ask about our services, recent work, process, technology stack, or how to get in touch. For anything more specific, the best way is to email luis@iberiatechsolutions.com or book a 30-minute call.',
  es:
    'Encantado de ayudarte. Puedes preguntarme sobre nuestros servicios, proyectos recientes, proceso, stack tecnológico o cómo contactarnos. Para algo más específico, lo mejor es escribirnos a luis@iberiatechsolutions.com o reservar una llamada de 30 minutos.',
}
