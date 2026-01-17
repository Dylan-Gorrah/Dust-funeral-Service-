/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Configure for GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig
