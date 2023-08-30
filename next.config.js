/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      turbo: {
        loaders: {
          '.tsx': {

          },
      },
    },
  }
}

module.exports = withPWA(nextConfig)