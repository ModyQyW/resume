// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/i18n", "@vueuse/nuxt"],

  colorMode: {
    classSuffix: "",
  },

  css: ["./app/assets/css/html.css"],

  i18n: {
    locales: ["zh-CN", "en-US"],
    defaultLocale: "zh-CN",
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
  },

  compatibilityDate: "2025-07-01",
});
