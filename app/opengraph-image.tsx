import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'IberiaTech Solutions - Charleston Bilingual Web Development'
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
          background: 'linear-gradient(135deg, #001122 0%, #002F71 50%, #001122 100%)',
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
            Charleston Web Development
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#f8fafc',
              lineHeight: 1.1,
            }}
          >
            IberiaTech Solutions
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#94a3b8',
              lineHeight: 1.4,
            }}
          >
            Bilingual Websites for Small & Medium Businesses
          </div>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '16px',
            }}
          >
            {['Web Design', 'SEO', 'Bilingual', 'React', 'Next.js', 'AI Addons'].map(
              (tag) => (
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
              )
            )}
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
          iberiatech.com
        </div>
      </div>
    ),
    { ...size }
  )
}
