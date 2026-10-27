import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/i18n'

// The page itself is a client component, which cannot export metadata, so it
// lives here.
export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Revisiones de seguridad para apps hechas con IA y vibe coding, integraciones de IA, webs y tiendas online, sitios bilingües y software a medida. Un solo ingeniero, en inglés y español.',
  alternates: alternatesFor('/services', 'es'),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
