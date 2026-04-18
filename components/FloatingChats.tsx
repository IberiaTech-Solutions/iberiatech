'use client'

import dynamic from 'next/dynamic'

const WhatsAppChat = dynamic(() => import('./WhatsAppChat'), { ssr: false })
const AIChatbot = dynamic(() => import('./AIChatbot'), { ssr: false })

export default function FloatingChats() {
  return (
    <>
      <WhatsAppChat phoneNumber="18643657897" />
      <AIChatbot />
    </>
  )
}
