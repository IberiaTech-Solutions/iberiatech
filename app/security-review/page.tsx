import type { Metadata } from 'next'
import SecurityReviewContent from './SecurityReviewContent'
import { faqData } from './content'
import { alternatesFor } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Security review for vibe coded apps',
  description:
    'Built your app with Lovable, Bolt, Cursor, Replit, v0 or Claude Code? I check Supabase row level security, authorization, payments, exposed keys and AI features, the way an attacker would. Fixed scope, fixed price, one week.',
  alternates: alternatesFor('/security-review', 'en'),
}

export default function SecurityReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData('en')) }}
      />
      <SecurityReviewContent />
    </>
  )
}
