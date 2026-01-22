/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["bizweb.dktcdn.net", "wuwa.kesug.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wuwa.kesug.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bizweb.dktcdn.net",
        pathname: "/**",
      },
    ],
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://wuwa.kesug.com/api/:path*",
      },
      {
        source: "/uploads/:path*",
        destination: "https://wuwa.kesug.com/uploads/:path*",
      },
      {
        source: "/storage/:path*",
        destination: "https://wuwa.kesug.com/storage/:path*",
      },
    ];
  },
};

export default nextConfig;
