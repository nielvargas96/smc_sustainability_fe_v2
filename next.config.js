/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageKitLoader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/smc/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
}

module.exports = nextConfig
