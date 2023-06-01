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

  build: {},
};
