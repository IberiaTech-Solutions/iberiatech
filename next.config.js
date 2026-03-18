/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'querri.com',
      },
      {
        protocol: 'https',
        hostname: 'gdna.io',
      },
      {
        protocol: 'https',
        hostname: 'neva-estudio.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'coastal-millwork.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'portfolio-hub-tawny.vercel.app',
      },
    ],
  },
}

module.exports = nextConfig
