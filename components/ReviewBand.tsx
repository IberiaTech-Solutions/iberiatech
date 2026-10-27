'use client'

import { useLanguage } from './LanguageProvider'

// The four parts of the security review, as a colour band between the hero
// and the next section. Same steps as the services copy, in the same order.
const STEPS = {
  en: ['Automated scan', 'Code read by hand', 'A fix prompt for every bug', 'Walkthrough call'],
  es: ['Escaneo automático', 'Código leído a mano', 'Un prompt para cada fallo', 'Llamada para explicarlo'],
}

export default function ReviewBand() {
  const { language } = useLanguage()

  return (
    <div className="bg-accent-400 text-ink-950 px-[clamp(1rem,4vw,2rem)] py-5">
      <ol className="container-max flex flex-wrap justify-between gap-x-8 gap-y-2 text-sm font-semibold uppercase tracking-[0.12em]">
        {STEPS[language === 'es' ? 'es' : 'en'].map((step) => (
          <li key={step} className="flex items-center gap-3">
            <span aria-hidden>✱</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  )
}
