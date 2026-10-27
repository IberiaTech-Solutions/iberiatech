import type { Metadata } from 'next'
import SecurityReviewContent from './SecurityReviewContent'
import { CONTENT } from './content'

export const metadata: Metadata = {
  title: 'Security review for vibe coded apps',
  description:
    'Built your app with Lovable, Bolt, Cursor, Replit, v0 or Claude Code? I check Supabase row level security, authorization, payments, exposed keys and AI features, the way an attacker would. Fixed scope, fixed price, one week.',
  alternates: {
    canonical: '/security-review',
  },
}

// Built from the English FAQ the page renders by default, so the structured
// data and the visible answers never drift apart.
const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CONTENT.en.faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function SecurityReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <SecurityReviewContent />
    </>
  )
}
