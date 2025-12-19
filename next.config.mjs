/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "nationalmarketingprojects.com",
      },
      {
        protocol: "https",
        hostname: "nidmm.in",
      },
      {
        protocol: "https",
        hostname: "wanderon-images.gumlet.io",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
