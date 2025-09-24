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
    ],
  },
}

module.exports = nextConfig
