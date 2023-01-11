/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [],
  },
  experimental: {
    nextScriptWorkers: false,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  // async redirects() {
  //   return [
  //     {
  //       source: "/case/:path*",
  //       destination: "/task/:path*",
  //       permanent: true,
  //     },
  //   ];
  // },
};
