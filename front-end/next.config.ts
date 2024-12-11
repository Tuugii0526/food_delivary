import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "/food-delivary/**",
      },
      {
        protocol: "https",
        hostname: "profile.accounts.firefox.com",
        pathname: "/v1/avatar/**",
      },
    ],
  },
};

export default nextConfig;
