import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ['assets.aceternity.com',
      "api.microlink.io",
    ],
     // Add the external domain here
  },
};
export default nextConfig;
