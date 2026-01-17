/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Configure for GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  // Base path for GitHub Pages (update if your repo name is different)
  basePath: process.env.NODE_ENV === 'production' ? '/Dust-funeral-Service-' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Dust-funeral-Service-' : '',
}

module.exports = nextConfig
