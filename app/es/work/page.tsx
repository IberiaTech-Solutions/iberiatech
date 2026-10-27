import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Proyectos de IberiaTech Solutions. Webs, tiendas online, marketplaces, una plataforma de suscripción y un escáner de seguridad open source.',
  alternates: alternatesFor('/work', 'es'),
}

// Same page as /work; the language comes from the /es in the URL.
export { default } from '../../work/page'
