/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    // The site loads nothing from a third-party host: fonts are self-hosted by
    // next/font at build time, every image is local, there are no analytics
    // scripts and no embeds. So default-src can be 'self' and stay there.
    //
    // script-src needs 'unsafe-inline' because the App Router emits inline
    // hydration scripts. The alternative is a per-request nonce from
    // middleware, which would force every page to render dynamically and cost
    // us the fully static build. Not worth it on a marketing site with no
    // user input rendered into the page.
    // Dev only: Next's hot-reload (react-refresh) evaluates code via eval, which
    // a strict script-src blocks, breaking client JS locally (the page renders
    // blank below the fold). Allow eval in development; production stays strict.
    const scriptSrc =
      process.env.NODE_ENV === 'development'
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
        : "script-src 'self' 'unsafe-inline'"

    const csp = [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      'upgrade-insecure-requests',
    ].join('; ')

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
