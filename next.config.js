/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Allow external images for dev
  async headers() {
    return [
      {
        source: '/api/formbricks-webhook',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://app.formbricks.com' },
          { key: 'Access-Control-Allow-Methods', value: 'POST' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
