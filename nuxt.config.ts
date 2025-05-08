// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ["plugins/fontawesome.ts"],
  modules: ["@pinia/nuxt"],

  build: {
    transpile: ['@fortawesome/fontawesome-svg-core'],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_mixins.scss" as *;',
        }
      }
    }
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

      ],
      htmlAttrs: {
        lang: 'en'
      },
      script: [],
      style: [],
      link: [],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: "Javascript is required" },
      ],
    },
  },

  css: [
    "@/assets/scss/main.scss",
  ],

  ssr: false,
  compatibilityDate: "2025-02-14",
});