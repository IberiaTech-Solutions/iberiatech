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
      "Hey. Ask about Luis Javier's work, the stack, or how to start a project.",
    services:
      "Five: web and ecommerce, bilingual sites (EN/ES/DE), custom business apps, security audits, and AI integrations. Which one's relevant?",
    web:
      "Websites and online stores on Next.js. The goal is pages that load fast on a phone and a checkout that doesn't leak customers. Stripe when you need it.",
    bilingual:
      "Sites in English, Spanish, and German. Luis Javier grew up in Spain and lives in the US, so the Spanish side isn't a Google Translate pass. It's written.",
    apps:
      "The bigger engagements: SaaS platforms, admin dashboards, marketplaces, client portals. Axis, a subscription platform for exit planning advisors, is live in production and still being built on.",
    security:
      "Application security work: OWASP Top 10 reviews, auth hardening, row level security on the database, locking down how the app handles payments and third-party APIs. Luis Javier is GSEC and GFACT certified with GCIH in progress, and wrote llm-audit, an open source scanner for the OWASP LLM Top 10.",
    portfolio:
      "Shipped: Axis (subscription platform for exit planning advisors), NEVA Estudio (architecture studio in Asturias), Coastal Millwork (commercial contractor in SC), Tinta Gallery, ShopEssentialsHub. There's also llm-audit, an open source security scanner for LLM code. The full list is at /work.",
    process:
      "Four steps. A discovery call. Design and planning, which you sign off on. Then the build, on a URL you can open any time. Then launch, handover, and maintenance if you want it.",
    contact:
      "Email luis@iberiatechsolutions.com, or book a 30-minute call from the Contact page. WhatsApp button is at the bottom-right. You'll hear back within two business days.",
    timeline:
      "Depends on scope. A focused site runs 2–6 weeks. A custom business app is a few months. You get a real timeline after the discovery call, not a guess.",
    stack:
      "Next.js, React, TypeScript, Tailwind, Supabase (Postgres + Auth + RLS), Stripe, Vercel. AWS when the project calls for it. next-intl for multilingual.",
    location:
      "Charleston, SC. Remote work with clients across the US and Europe, Spain included, which is where Luis Javier is from.",
  },
  es: {
    greeting:
      'Hola. Pregunta sobre el trabajo de Luis Javier, el stack o cómo empezar un proyecto.',
    services:
      'Cinco: web y ecommerce, sitios bilingües (EN/ES/DE), aplicaciones de negocio a medida, auditorías de seguridad e integraciones de IA. ¿Cuál te interesa?',
    web:
      'Webs y tiendas online sobre Next.js. La idea es que carguen rápido en móvil y que el checkout no pierda clientes. Stripe cuando hace falta.',
    bilingual:
      'Sitios en inglés, español y alemán. Luis Javier creció en España y vive en EE. UU., así que el lado español no es Google Translate. Está escrito.',
    apps:
      'Los proyectos más grandes: plataformas SaaS, paneles de administración, marketplaces, portales de cliente. Axis, plataforma de suscripción para asesores de salida, está en producción y sigue creciendo.',
    security:
      'Seguridad aplicada: revisiones OWASP Top 10, refuerzo de autenticación, políticas RLS en base de datos, y cómo la app maneja pagos e integraciones de terceros. Luis Javier tiene GSEC y GFACT, está sacando GCIH, y escribió llm-audit, un escáner open source para el OWASP LLM Top 10.',
    portfolio:
      'Entregados: Axis (plataforma de suscripción para asesores de salida), NEVA Estudio (estudio de arquitectura en Asturias), Coastal Millwork (contratista comercial en SC), Tinta Gallery, ShopEssentialsHub. También está llm-audit, un escáner de seguridad open source para código LLM. La lista completa está en /work.',
    process:
      'Cuatro pasos. Llamada de descubrimiento. Diseño y planificación, que apruebas tú. El desarrollo, en una URL que puedes abrir cuando quieras. Y lanzamiento, entrega y mantenimiento si lo quieres.',
    contact:
      'Email a luis@iberiatechsolutions.com, o reserva una llamada de 30 minutos desde la página de Contacto. El botón de WhatsApp está abajo a la derecha. Te respondemos en máximo dos días laborables.',
    timeline:
      'Depende del alcance. Un sitio enfocado sale en 2–6 semanas. Una app de negocio a medida lleva varios meses. Después de la llamada de descubrimiento te damos un plazo real, no una estimación al aire.',
    stack:
      'Next.js, React, TypeScript, Tailwind, Supabase (Postgres + Auth + RLS), Stripe, Vercel. AWS cuando el proyecto lo pide. next-intl para el multilingüe.',
    location:
      'Charleston, SC. Trabajamos en remoto con clientes en EE. UU. y Europa, España incluida, que es de donde es Luis Javier.',
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
    "Not sure on that one. Ask me about services, projects, process, stack, or contact details. For anything specific, email luis@iberiatechsolutions.com or book a call from the Contact page.",
  es:
    'Esa no sé contestarla. Pregúntame sobre servicios, proyectos, proceso, stack o cómo contactar. Para algo más concreto, escribe a luis@iberiatechsolutions.com o reserva una llamada desde la página de Contacto.',
}
