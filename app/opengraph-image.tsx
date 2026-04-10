import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'IberiaTech Solutions — Modern web & custom applications'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 80px',
          background:
            'linear-gradient(135deg, #001122 0%, #002F71 50%, #001122 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: '#00C389',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            IberiaTech Solutions
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: '#f8fafc',
              lineHeight: 1.1,
            }}
          >
            Modern web &amp; custom applications.
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#94a3b8',
              lineHeight: 1.4,
              maxWidth: '900px',
            }}
          >
            Websites, ecommerce, bilingual experiences, and custom business
            software. Next.js, React, and modern cloud infrastructure.
          </div>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '16px',
              flexWrap: 'wrap',
            }}
          >
            {[
              'Web & Ecommerce',
              'Bilingual',
              'Custom Apps',
              'Security Audits',
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 16,
                  color: '#cbd5e1',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  border: '1px solid #334155',
                  background: 'rgba(51, 65, 85, 0.5)',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: 16,
            color: '#475569',
          }}
        >
          iberiatechsolutions.com
        </div>
      </div>
    ),
    { ...size },
  )
}
