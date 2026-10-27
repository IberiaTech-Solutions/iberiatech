import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/i18n'

// The page itself is a client component, which cannot export metadata, so it
// lives here.
export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Reserva una llamada o escríbeme para una revisión de seguridad de tu app hecha con vibe coding, o para una web, tienda online o software a medida. Charleston (SC), con clientes en EE. UU. y Europa.',
  alternates: alternatesFor('/contact', 'es'),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
