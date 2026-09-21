import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/pogram-results",
        destination: "/our-impact",
        permanent: true,
      },
      {
        source: "/pogram-results/",
        destination: "/our-impact",
        permanent: true,
      },
      { source: "/donate", destination: "/ways-to-give", permanent: true },
      { source: "/donate/", destination: "/ways-to-give", permanent: true },
      { source: "/subscribe", destination: "/newsletter", permanent: true },
      { source: "/subscribe/", destination: "/newsletter", permanent: true },
    ];
  },
};

export default nextConfig;
