import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/i18n'

export const metadata: Metadata = {
  title: {
    absolute: 'IberiaTech Solutions: revisiones de seguridad para apps hechas con IA y vibe coding',
  },
  description:
    'La IA te hizo la app. Yo me aseguro de que no te la hackeen. Revisiones de seguridad para apps hechas con Lovable, Bolt, Cursor, Replit o v0: alcance y precio cerrados, escaneo automático, revisión humana del código, prompts para arreglar cada fallo y una llamada, en una semana. También hago webs, tiendas online y software a medida en inglés y español.',
  alternates: alternatesFor('/', 'es'),
  openGraph: {
    locale: 'es_ES',
    url: 'https://iberiatechsolutions.com/es',
    title: 'IberiaTech Solutions: revisiones de seguridad para apps hechas con IA',
    description:
      'La IA te hizo la app. Yo me aseguro de que no te la hackeen. Revisiones de seguridad con alcance y precio cerrados, en una semana.',
  },
}

// Same page as /; the language comes from the /es in the URL.
export { default } from '../page'
