/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            port: '',
            pathname: '/images/I/**',
          },
          {
            protocol: 'https',
            hostname: 'pic.616pic.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
