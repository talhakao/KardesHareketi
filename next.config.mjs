/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "iili.io" },
      { protocol: "https", hostname: "i.imghippo.com" },
      { protocol: "https", hostname: "img.freepik.com" },
    ],
  },
  serverExternalPackages: ["@prisma/client", "bcryptjs"],
};

export default nextConfig;
