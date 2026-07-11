import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.sahadhfazal.com' }],
        destination: 'https://sahadhfazal.com/:path*',
        permanent: true, // 308 redirect
      },
    ];
  },
};

export default nextConfig;
