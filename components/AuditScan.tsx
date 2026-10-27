'use client'

import { useEffect, useRef, useState, type RefObject } from 'react'
import { useLanguage } from './LanguageProvider'

// Illustrative route handler with the three bug classes llm-audit is built
// for. Not real llm-audit output: the findings name the OWASP category, not
// a rule id, so nothing here goes stale when rules are renamed.
const CODE: { text: string; finding?: number }[] = [
  { text: "import OpenAI from 'openai'" },
  { text: "import { tools } from './tools'" },
  { text: '' },
  { text: "const ai = new OpenAI({ apiKey: 'sk-proj-9f2c…' })", finding: 0 },
  { text: '' },
  { text: 'export async function POST(req: Request) {' },
  { text: '  const { prompt } = await req.json()' },
  { text: '  const res = await ai.responses.create({' },
  { text: "    model: 'gpt-4.1'," },
  { text: '    input: prompt,' },
  { text: '  })' },
  { text: '  const call = JSON.parse(res.output_text)', finding: 1 },
  { text: '  return tools[call.name](call.args)', finding: 2 },
  { text: '}' },
]

const FINDINGS = [
  {
    owasp: 'LLM02',
    en: { title: 'Provider key hardcoded in source', fix: 'Move it to a server env var and rotate it.' },
    es: { title: 'Clave del proveedor en el código', fix: 'Pásala a una variable de entorno y rótala.' },
  },
  {
    owasp: 'LLM05',
    en: { title: 'Model output parsed without a schema', fix: 'Validate it before anything uses it.' },
    es: { title: 'Salida del modelo parseada sin esquema', fix: 'Valídala antes de que nada la use.' },
  },
  {
    owasp: 'LLM06',
    en: { title: 'The model picks which tool runs', fix: 'Allowlist the tools and check the args.' },
    es: { title: 'El modelo elige qué herramienta se ejecuta', fix: 'Limita las herramientas y valida los argumentos.' },
  },
] as const

// The scan finishes at 80% of the track so the result holds on screen for
// the last stretch before the page moves on.
const SCAN_END = 0.8

const clamp = (n: number) => Math.min(1, Math.max(0, n))

/**
 * Scroll progress, 0 to 1. On large screens the hero is pinned and progress
 * runs across the section's extra height. Below that nothing is pinned, so
 * progress runs while the panel itself crosses the viewport.
 */
function useScrollProgress(
  trackRef: RefObject<HTMLElement>,
  panelRef: RefObject<HTMLElement>
) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1)
      return
    }
    const pinned = window.matchMedia('(min-width: 1024px)')
    let frame = 0

    const measure = () => {
      frame = 0
      const vh = window.innerHeight
      if (pinned.matches && trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect()
        const range = rect.height - vh
        setProgress(range > 0 ? clamp(-rect.top / range) : 1)
      } else if (panelRef.current) {
        const rect = panelRef.current.getBoundingClientRect()
        setProgress(clamp((vh * 0.9 - rect.top) / (vh * 0.6)))
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    pinned.addEventListener('change', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      pinned.removeEventListener('change', onScroll)
    }
  }, [trackRef, panelRef])

  return progress
}

export default function AuditScan({ trackRef }: { trackRef: RefObject<HTMLElement> }) {
  const { language } = useLanguage()
  const panelRef = useRef<HTMLDivElement>(null)
  const progress = useScrollProgress(trackRef, panelRef)

  const scan = clamp(progress / SCAN_END)
  const done = scan >= 1
  // A line counts as scanned once the beam has passed its middle.
  const scannedLines = Math.floor(scan * CODE.length + 0.5)
  const found = CODE.slice(0, scannedLines).filter((l) => l.finding !== undefined).length

  const status = done
    ? language === 'es'
      ? `${found} hallazgos`
      : `${found} findings`
    : scan > 0
      ? language === 'es'
        ? 'analizando…'
        : 'scanning…'
      : language === 'es'
        ? 'desliza para analizar'
        : 'scroll to scan'

  return (
    <div
      ref={panelRef}
      className="rounded-md overflow-hidden bg-primary-950/80 border border-ink-50/10 shadow-2xl shadow-black/40 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink-50/10">
        <span className="text-[10px] text-ink-300 tracking-wide font-mono">
          app/api/chat/route.ts
        </span>
        <span
          className={`text-[10px] uppercase tracking-[0.2em] tabular-nums transition-colors duration-300 ${
            done ? 'text-accent-300' : 'text-ink-500'
          }`}
          aria-live="polite"
        >
          {status}
        </span>
      </div>

      <div className="relative py-3 font-mono text-[11px] sm:text-xs leading-[1.65]">
        {CODE.map((line, i) => {
          const flagged = line.finding !== undefined && i < scannedLines
          return (
            <div
              key={i}
              className={`flex whitespace-pre transition-colors duration-500 border-l-2 ${
                flagged
                  ? 'bg-red-500/10 border-red-400 text-ink-50'
                  : i < scannedLines
                    ? 'border-transparent text-ink-300'
                    : 'border-transparent text-ink-500'
              }`}
            >
              <span aria-hidden className="w-9 shrink-0 pr-3 text-right text-ink-600 select-none">
                {i + 1}
              </span>
              <span className="overflow-hidden text-ellipsis pr-4">{line.text || ' '}</span>
            </div>
          )
        })}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 h-10 -translate-y-1/2 transition-opacity duration-500"
          style={{
            top: `calc(0.75rem + ${scan} * (100% - 1.5rem))`,
            opacity: scan > 0 && !done ? 1 : 0,
            background:
              'linear-gradient(to bottom, transparent, oklch(73% 0.170 158 / 0.12) 50%, transparent)',
            borderBottom: '1px solid oklch(73% 0.170 158 / 0.5)',
          }}
        />
      </div>

      <ol className="border-t border-ink-50/10 px-4 py-3 space-y-2.5">
        {FINDINGS.map((f, i) => {
          const shown = i < found
          const copy = f[language === 'es' ? 'es' : 'en']
          return (
            <li
              key={f.owasp}
              className="flex gap-3 text-xs transition-all duration-500"
              style={{
                opacity: shown ? 1 : 0.15,
                transform: shown ? 'none' : 'translateY(4px)',
              }}
            >
              <span className="shrink-0 font-mono text-[10px] text-red-300 border border-red-400/40 rounded px-1.5 py-0.5 h-fit">
                {f.owasp}
              </span>
              <span>
                <span className="block text-ink-100">{copy.title}</span>
                <span className="block text-ink-400">{copy.fix}</span>
              </span>
            </li>
          )
        })}
      </ol>

      <div
        className="flex items-center justify-between gap-4 px-4 py-2.5 border-t border-ink-50/10 text-[10px] tracking-wide transition-opacity duration-500"
        style={{ opacity: done ? 1 : 0 }}
      >
        <span className="text-ink-300">
          {language === 'es' ? 'Detectado antes del commit' : 'Caught before the commit lands'}
        </span>
        <a
          href="https://github.com/Javierlozo/llm-audit"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={done ? 0 : -1}
          className="text-ink-400 hover:text-accent-300 uppercase tracking-[0.2em] transition-colors"
        >
          llm-audit
        </a>
      </div>
    </div>
  )
}
