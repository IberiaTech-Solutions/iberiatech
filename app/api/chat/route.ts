import { NextRequest, NextResponse } from 'next/server'

const RATE_WINDOW_MS = 60_000
const RATE_MAX_REQUESTS = 10
const MAX_MESSAGE_LENGTH = 2000

// This endpoint spends money on every call, so it only answers requests that
// came from our own pages. Not a security boundary on its own (a header is
// trivially forged), but it stops the endpoint being scraped and used as a
// free model proxy, which is the realistic abuse here.
const ALLOWED_ORIGINS = [
  'https://iberiatechsolutions.com',
  'https://www.iberiatechsolutions.com',
]

function isAllowedOrigin(request: NextRequest): boolean {
  if (process.env.NODE_ENV !== 'production') return true
  // Preview deployments get a generated *.vercel.app origin that we cannot
  // enumerate ahead of time, so only production is locked to the allowlist.
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') return true

  const origin = request.headers.get('origin')
  if (origin) return ALLOWED_ORIGINS.includes(origin)

  // Same-origin fetches from some browsers omit Origin; fall back to Referer.
  const referer = request.headers.get('referer')
  if (referer) {
    try {
      return ALLOWED_ORIGINS.includes(new URL(referer).origin)
    } catch {
      return false
    }
  }

  return false
}

// In-memory per-instance rate limit. Survives warm invocations on the same
// Vercel instance; resets on cold start. Good enough to stop casual spam from
// a single session; upgrade to Upstash Ratelimit + Vercel KV for distributed
// enforcement if abuse becomes an issue.
const ipHits = new Map<string, number[]>()

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const recent = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  if (recent.length >= RATE_MAX_REQUESTS) {
    ipHits.set(ip, recent)
    return false
  }
  recent.push(now)
  ipHits.set(ip, recent)
  return true
}

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const ip = getClientIp(request)
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute.' },
        { status: 429 },
      )
    }

    const { message, language = 'en' } = await request.json()

    if (typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message too long (max ${MAX_MESSAGE_LENGTH} characters)` },
        { status: 400 },
      )
    }

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      // Do not tell an unauthenticated caller which env vars are missing.
      console.error('Chat API: OPENAI_API_KEY is not set')
      return NextResponse.json(
        { error: 'Failed to get AI response' },
        { status: 500 },
      )
    }

    const systemPrompt =
      language === 'es'
        ? `Eres el asistente de IberiaTech Solutions. Tu trabajo es responder preguntas de forma clara, profesional y útil, sin presión comercial.

SOBRE IBERIATECH SOLUTIONS:
- Práctica de desarrollo web liderada por Luis Javier Lozoya, ingeniero de software con enfoque en seguridad.
- Ubicación: Charleston, SC. Trabajamos con clientes en EE. UU. y Europa.
- Contacto: luis@iberiatechsolutions.com. Respondemos en un máximo de dos días laborables.

QUÉ HACEMOS (cinco áreas de servicio):
1. Web y Ecommerce. Sitios web y tiendas online modernas construidas con Next.js. Rápidas, optimizadas para SEO, mobile-first, con pago vía Stripe.
2. Sitios Bilingües y Multilingües. Sitios profesionalmente localizados en inglés, español y alemán. Internacionalización adecuada, adaptación cultural, SEO en cada idioma.
3. Aplicaciones de Negocio a Medida. Software full-stack a medida: plataformas SaaS, paneles de administración, marketplaces, portales para clientes. Construido con Next.js, Supabase, Stripe.
4. Auditorías y Refuerzo de Seguridad. Revisiones de seguridad para aplicaciones web: auditorías OWASP Top 10, refuerzo de autenticación y autorización, políticas de seguridad a nivel de fila, manejo seguro de pagos e integraciones.
5. Integraciones de IA. Chatbots bilingües y flujos de WhatsApp que cogen reservas, responden preguntas frecuentes y captan leads.

PROYECTOS RECIENTES:
- NEVA Estudio: sitio para un estudio de arquitectura en Asturias (bilingüe, accesible).
- Coastal Millwork: contratista comercial de carpintería en Carolina del Sur.
- Tinta Gallery: galería online bilingüe para dos acuarelistas españoles.
- ShopEssentialsHub: plataforma de afiliados curada.
- Axis: plataforma SaaS de suscripción para asesores de planificación de salida, en producción (axis.southernexits.com). Construida bajo contrato para Southern Exits, que es dueño del producto. Puedes decir eso. No compartas detalles del stack, la arquitectura, la metodología de evaluación ni los precios.
- llm-audit: herramienta open source de análisis estático para código de aplicaciones LLM. Doce reglas mapeadas al OWASP LLM Top 10. Publicada en npm, código en github.com/Javierlozo/llm-audit.
- Little Bolleria Bäckerei: actualmente en desarrollo. Detalles próximamente. No compartas información técnica ni del stack sobre este proyecto.

PROCESO:
1. Descubrimiento. Llamada breve para entender objetivos.
2. Diseño y planificación. Wireframes, arquitectura, cronograma.
3. Desarrollo en una URL real que el cliente puede abrir cuando quiera.
4. Lanzamiento y soporte. Despliegue, entrega, formación, mantenimiento si lo quiere.

STACK TÉCNICO: Next.js, React, TypeScript, Tailwind CSS, Supabase (Postgres + Auth + RLS), Stripe, Vercel, AWS, next-intl.

INSTRUCCIONES:
- Responde siempre en español.
- Sé claro, profesional y útil. Nunca uses presión comercial.
- Mantén las respuestas concisas (2 a 4 frases cuando sea posible).
- No uses guiones largos en tus respuestas.
- No menciones precios ni tarifas (los plazos y el alcance varían por proyecto).
- Para preguntas específicas o cotizaciones, dirige al usuario a luis@iberiatechsolutions.com o a reservar una llamada de 30 minutos en /contact.
- Si no sabes algo, dilo y sugiere contactar directamente.`
        : `You are the assistant for IberiaTech Solutions. Your job is to answer questions clearly, professionally, and helpfully, without sales pressure.

ABOUT IBERIATECH SOLUTIONS:
- A web development practice led by Luis Javier Lozoya, a security-focused software engineer.
- Based in Charleston, SC. Working with clients across the US and Europe.
- Contact: luis@iberiatechsolutions.com. We respond within two business days.

WHAT WE DO (five service areas):
1. Web & Ecommerce. Modern websites and online stores built on Next.js. Fast, SEO-ready, mobile-first, Stripe-powered checkout.
2. Bilingual & Multilingual Sites. Professionally localized sites in English, Spanish, and German. Proper internationalization, cultural adaptation, SEO for every language.
3. Custom Business Applications. Full-stack custom software: SaaS platforms, admin dashboards, marketplaces, client portals. Built with Next.js, Supabase, Stripe.
4. Security Audits & Hardening. Application security reviews: OWASP Top 10 audits, authentication and authorization hardening, database row-level security policies, secure handling of payments and third-party APIs.
5. AI Integrations. Bilingual chatbots and WhatsApp flows that take bookings, answer common questions, and capture leads.

RECENT WORK:
- NEVA Estudio: architecture studio site in Asturias (bilingual, accessible).
- Coastal Millwork: commercial millwork contractor in South Carolina.
- Tinta Gallery: bilingual online gallery for two Spanish watercolorists.
- ShopEssentialsHub: curated affiliate platform.
- Axis: subscription SaaS platform for exit-planning advisors, live in production (axis.southernexits.com). Built under contract for Southern Exits, who own the product. That much you can say. Do not share stack, architecture, assessment methodology, or pricing.
- llm-audit: open-source static analysis tool for LLM application code. Twelve rules mapped to the OWASP LLM Top 10. Published on npm, source at github.com/Javierlozo/llm-audit.
- Little Bolleria Bäckerei: currently in development. Details coming soon. Do not share technical or stack details about this project.

PROCESS:
1. Discovery. Short call to understand goals.
2. Design & planning. Wireframes, architecture, timeline.
3. Build. Development on a real URL the client can open any time.
4. Launch & support. Deployment, handover, training, maintenance if they want it.

TECH STACK: Next.js, React, TypeScript, Tailwind CSS, Supabase (Postgres + Auth + RLS), Stripe, Vercel, AWS, next-intl.

INSTRUCTIONS:
- Always respond in English.
- Be clear, professional, and helpful. Never use sales pressure.
- Keep responses concise (2 to 4 sentences when possible).
- Do not use em-dashes in your responses.
- Do not mention specific prices or rates (timelines and scope vary by project).
- For specific questions or quotes, direct users to email luis@iberiatechsolutions.com or book a 30-minute call at /contact.
- If you don't know something, say so and suggest contacting us directly.`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: message,
          },
        ],
        max_tokens: 500,
        temperature: 0.5,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    const aiResponse =
      data.choices[0]?.message?.content || 'Sorry, I could not process your request.'

    return NextResponse.json({
      response: aiResponse,
      model: 'gpt-4o-mini',
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to get AI response' },
      { status: 500 },
    )
  }
}
