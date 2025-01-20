/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  poweredByHeader: false,
  headers: () => {
    return [{
      source: '/(.*?)',
      headers: [
        { key: 'X-Client-Release', value: process.env.NEXT_PUBLIC_RELEASE },
        { key: 'X-Client-Release-At', value: process.env.NEXT_PUBLIC_RELEASE_AT },
        { key: 'X-Client-Mode', value: process.env.NEXT_PUBLIC_MODE },

      ],
    }]
  },
}

export default nextConfig
