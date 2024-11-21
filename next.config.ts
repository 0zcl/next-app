import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://github.com/vercel/next.js/issues/71638
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;
