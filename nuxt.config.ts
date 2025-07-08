// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ["plugins/fontawesome.ts"],
  modules: ["@pinia/nuxt", "@nuxt/eslint"],

  build: {
    transpile: ["@fortawesome/fontawesome-svg-core"],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_mixins.scss" as *;',
        },
      },
    },
  },

  app: {
    // document head injections
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        {
          property: "og:title",
          content: "Justin Shilling | Frontend Developer",
        },
        {
          property: "og:url",
          content: "https://www.justinshilling.com",
        },
        {
          property: "og:site_name",
          content: "Justin Shilling",
        },
        {
          name: "description",
          content:
            "Senior Frontend Developer with extensive experience building production websites & interactive web applications. I can consistently turn designs into front ends that are responsive, elegant, performant, and pixel perfect. ",
        },
        {
          name: "keywords",
          content:
            "justin, shilling, developer, frontend, coding, senior, engineer, vue",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
      script: [],
      style: [],
      link: [],
      title: "Justin Shilling - Frontend Developer",
    },
  },

  css: ["@/assets/scss/main.scss"],

  ssr: false,
  compatibilityDate: "2025-02-14",
});
