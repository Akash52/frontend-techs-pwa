import { fileURLToPath, URL } from "node:url";
import { VitePWA } from "vite-plugin-pwa";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      devOptions: {
        enabled: true,
      },
      injectRegister: "auto",
      manifest: {
        name: "My Rentals App",
        short_name: "My Rentals",
        theme_color: "#ffffff",
        icons: [
          {
            src: "icons/icon-72x72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "icons/icon-96x96.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "icons/icon-128x128.png",
            type: "image/png",
            sizes: "128x128",
          },
          {
            src: "icons/icon-144x144.png",
            type: "image/png",
            sizes: "144x144",
          },
          {
            src: "icons/icon-152x152.png",
            type: "image/png",
            sizes: "152x152",
          },
          {
            src: "icons/icon-192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/assets/icons/icon-384x384.png",
            type: "image/png",
            sizes: "384x384",
          },
          {
            src: "icons/icon-512x512.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: "icons/icon-72x72.png",
            type: "image/png",
            sizes: "72x72",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: new RegExp(
              "^https://fonts.(?:googleapis|gstatic).com/(.*)"
            ),
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts",
              expiration: {
                maxEntries: 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images",
              expiration: {
                maxEntries: 60,
              },
            },
          },
          {
            urlPattern: /\.(?:js|css)$/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-resources",
              expiration: {
                maxEntries: 60,
              },
            },
          },
          {
            urlPattern: new RegExp(
              "^https://mock-json-server-39aq.onrender.com/(.*)"
            ),
            handler: "NetworkFirst",
            options: {
              cacheName: "api",
              expiration: {
                maxEntries: 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
