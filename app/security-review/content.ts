// Copy for /security-review, in both languages. The FAQ entries also feed the
// page's FAQPage structured data, so what Google shows is word for word what
// the page says. Every claim here repeats one already made in the services
// copy: no prices, no turnaround other than one week, no tools beyond the
// ones the review actually uses.

export const TOOLS = ['Lovable', 'Bolt', 'Cursor', 'Replit', 'v0', 'Claude Code']

export const CONTENT = {
  en: {
    eyebrow: 'Security review for vibe coded apps',
    title: 'You vibe coded the app. I check that it can’t be broken into.',
    intro:
      'Lovable, Bolt, Cursor, Replit, v0 and Claude Code get an app working fast. What they don’t do is stop and ask who can read whose data, whether the paywall can be skipped, or what happens when someone sends your AI feature something it wasn’t expecting. I go through your app the way an attacker would, and tell you what’s broken in plain English.',
    toolsLabel: 'Built with',
    checksTitle: 'What I check',
    checks: [
      {
        title: 'Who can read whose data',
        body: 'Row level security in Supabase, and authorization on every API route. The most common hole in a vibe coded app is one user being able to read or change another user’s records.',
      },
      {
        title: 'Payments and the paywall',
        body: 'Whether someone can reach paid features without paying, and whether your Stripe integration trusts the browser for things only the server should decide.',
      },
      {
        title: 'Keys and secrets',
        body: 'API keys shipped to the browser or committed to the repo, and service keys used where a limited one belongs.',
      },
      {
        title: 'AI features',
        body: 'Prompt injection, model output used without checking it, and anything that lets a stranger run up your OpenAI bill. These are the checks llm-audit, my open source scanner, was built for.',
      },
    ],
    stepsTitle: 'How the review works',
    steps: [
      'An automated scan with llm-audit.',
      'I read the code by hand, for what a scanner misses.',
      'Every finding written up, each with a prompt you can paste into your AI tool to fix it.',
      'A call where I walk you through all of it.',
    ],
    terms: 'Fixed scope, fixed price, back to you in one week.',
    cta: 'Get a human review',
    faqTitle: 'Questions',
    faq: [
      {
        q: 'Why do vibe coded apps have security problems?',
        a: 'AI coding tools are built to make the app work, and they are good at it. Security is mostly about what the app should refuse to do, and nobody asked for that. So the checks that keep one customer out of another customer’s data are often missing, and the app still looks finished.',
      },
      {
        q: 'Which tools do you review apps from?',
        a: 'Lovable, Bolt, Cursor, Replit, v0, Claude Code, or anything else. The review is of the code, not the tool. I know React, Next.js, Supabase and Stripe best, and that is what most of these tools produce.',
      },
      {
        q: 'Do I have to stop building while you review?',
        a: 'No. Keep shipping. You get the findings as fix prompts, so you can fix them in the same tool you built the app with.',
      },
      {
        q: 'How long does it take, and what does it cost?',
        a: 'One week. The scope and the price are fixed before I start, so the number you agree to is the number you pay.',
      },
    ],
  },
  es: {
    eyebrow: 'Revisión de seguridad para apps hechas con vibe coding',
    title: 'Hiciste la app con vibe coding. Yo compruebo que no te la puedan reventar.',
    intro:
      'Lovable, Bolt, Cursor, Replit, v0 y Claude Code te dejan una app funcionando en nada. Lo que no hacen es pararse a preguntar quién puede ver los datos de quién, si alguien puede saltarse el pago o qué pasa cuando alguien le manda a tu función de IA algo que no esperaba. Reviso tu app como lo haría un atacante y te cuento qué falla sin tecnicismos.',
    toolsLabel: 'Hecha con',
    checksTitle: 'Qué reviso',
    checks: [
      {
        title: 'Quién puede ver los datos de quién',
        body: 'Seguridad a nivel de fila en Supabase y autorización en cada ruta de la API. El fallo más común en una app hecha con vibe coding es que un usuario pueda leer o cambiar los datos de otro.',
      },
      {
        title: 'Pagos y zona de pago',
        body: 'Si alguien puede llegar a lo que es de pago sin pagar, y si tu integración con Stripe se fía del navegador para cosas que solo debería decidir el servidor.',
      },
      {
        title: 'Claves y secretos',
        body: 'Claves de API que acaban en el navegador o en el repositorio, y claves de servicio usadas donde tocaba una limitada.',
      },
      {
        title: 'Funciones de IA',
        body: 'Inyección de prompts, salida del modelo usada sin comprobarla y cualquier cosa que deje a un desconocido dispararte la factura de OpenAI. Para esto hice llm-audit, mi escáner open source.',
      },
    ],
    stepsTitle: 'Cómo funciona la revisión',
    steps: [
      'Un escaneo automático con llm-audit.',
      'Leo el código a mano, para lo que el escáner no ve.',
      'Cada fallo por escrito, con un prompt que puedes pegar en tu herramienta de IA para arreglarlo.',
      'Una llamada en la que te lo explico todo.',
    ],
    terms: 'Alcance cerrado, precio cerrado, la tienes en una semana.',
    cta: 'Pide una revisión humana',
    faqTitle: 'Preguntas',
    faq: [
      {
        q: '¿Por qué las apps hechas con vibe coding tienen fallos de seguridad?',
        a: 'Las herramientas de IA están hechas para que la app funcione, y lo hacen bien. La seguridad va sobre todo de lo que la app debería negarse a hacer, y eso nadie lo pidió. Así que suelen faltar las comprobaciones que impiden que un cliente vea los datos de otro, y la app parece terminada igual.',
      },
      {
        q: '¿Con qué herramientas trabajas?',
        a: 'Lovable, Bolt, Cursor, Replit, v0, Claude Code o cualquier otra. Reviso el código, no la herramienta. Donde más experiencia tengo es React, Next.js, Supabase y Stripe, que es lo que generan la mayoría.',
      },
      {
        q: '¿Tengo que dejar de desarrollar mientras revisas?',
        a: 'No. Sigue publicando. Recibes los fallos como prompts para arreglarlos, así que los corriges con la misma herramienta con la que hiciste la app.',
      },
      {
        q: '¿Cuánto tarda y cuánto cuesta?',
        a: 'Una semana. El alcance y el precio se cierran antes de empezar, así que lo que acuerdas es lo que pagas.',
      },
    ],
  },
} as const

// FAQPage structured data, built from the same answers the page shows in that
// language, so what search engines read never drifts from what people read.
export function faqData(language: 'en' | 'es') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: language,
    mainEntity: CONTENT[language].faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}
