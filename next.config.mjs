/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kalynagroupserver.online',
        port: '',
        pathname: '/images/*',
        search: '',
      },
    ],
  },
};

export default nextConfig;
