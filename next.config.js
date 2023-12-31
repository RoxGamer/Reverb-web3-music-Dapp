/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  images: {
    domains: [
      'i.scdn.co',
      'resources.tidal.com',
      'encrypted-tbn1.gstatic.com',
      'avatars.dicebear.com',
      'media.npr.org',
      'kajabi-storefronts-production.kajabi-cdn.com',
      'upload.wikimedia.org',
      'i.ytimg.com',
      'angartwork.akamaized.net'
    ],
    loader: 'akamai',
    path: '/',
  },
}

module.exports = nextConfig
