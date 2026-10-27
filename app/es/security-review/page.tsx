import type { Metadata } from 'next'
import SecurityReviewContent from '../../security-review/SecurityReviewContent'
import { faqData } from '../../security-review/content'
import { alternatesFor } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Revisión de seguridad para apps hechas con vibe coding',
  description:
    '¿Hiciste tu app con Lovable, Bolt, Cursor, Replit, v0 o Claude Code? Reviso la seguridad a nivel de fila de Supabase, la autorización, los pagos, las claves expuestas y las funciones de IA, como lo haría un atacante. Alcance y precio cerrados, en una semana.',
  alternates: alternatesFor('/security-review', 'es'),
}

export default function SecurityReviewPageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData('es')) }}
      />
      <SecurityReviewContent />
    </>
  )
}
