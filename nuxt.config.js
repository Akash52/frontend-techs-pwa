export default {
  ssr: false,
  target: "static",

  head: {
    title: "Rental App",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Rental App is a web application that allows users to rent out their properties and also rent properties from other users.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/css/styles.css", "@/assets/css/tailwind.css"],

  plugins: [],

  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],

  modules: ["@nuxtjs/pwa"],

  pwa: {
    manifest: {
      name: "Rentals Nuxt App", // name of the app
      short_name: "Rentals App", // short name of the app
      description: "Rentals App built with Nuxt.js", // description of the app
      theme_color: "#3b82f6", // theme color of the app
      lang: "en", // language of the app
      background_color: "#3b82f6", // background color of the app
    },
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512], // size of the icon
    },
    meta: {
      name: "Rentals Nuxt App",
      description: "Rentals App built with Nuxt.js",
      author: "🆚",
      theme_color: "#3b82f6",
      nativeUi: true,
      appleStatusBarStyle: "black",
      mobileAppIOS: true,
    },
    // OFFLINE CACHING
    workbox: {
      offline: true,

      runtimeCaching: [
        // Cache assets
        {
          urlPattern: /\.(?:png|gif|jpg|jpeg|svg|css|js)$/,
          handler: "cacheFirst",
          options: {
            cacheName: "assets-cache", // cache name
            expiration: {
              maxEntries: 50, // max number of entries
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
            },
          },
        },
        // Chache API calls
        {
          urlPattern: "https://mock-json-server-39aq.onrender.com/rentals",
          handler: "networkFirst",
          options: {
            cacheName: "api-cache", // cache name
            expiration: {
              maxEntries: 50, // max number of entries
              maxAgeSeconds: 60 * 60, // 1 hour
            },
          },
        },
      ],
    },
  },

  build: {},
};
