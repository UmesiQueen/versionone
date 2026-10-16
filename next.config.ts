import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    if (process.env.VERCEL_ENV !== 'production') return [];
    // Only apply on the staging production deployment
    if (process.env.NEXT_PUBLIC_APP_ENV === 'staging') {
      return [
        {
          source: '/:path*',
          headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
        },
      ];
    }
    return [];
  },
};

export default nextConfig;