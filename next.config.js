/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public", // output directory
  register: true, // register pwa
  skipWaiting: true, // skip waiting for old service worker to be disabled
  disable: process.env.NODE_ENV === "development", // disable in development
  runtimeCaching: [
    //cache assets & data from external api
    {
      urlPattern: /.*/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "others", // cache name
        expiration: {
          maxEntries: 32, // max cache entries
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
        networkTimeoutSeconds: 20, // fall back to cache if api does not response within 20 seconds
      },
    },
  ],
});

const nextConfig = withPWA({
  reactStrictMode: false,
});

module.exports = nextConfig;
