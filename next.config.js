/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["lh3.googleusercontent.com","firebasestorage.googleapis.com"]
  }
}
module.exports = {
  productionBrowserSourceMaps: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  future: {
    webpack5: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  excludeDefaultMomentLocales: true,
}