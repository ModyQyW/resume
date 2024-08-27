// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/i18n", "@vueuse/nuxt"],

  colorMode: {
    classSuffix: "",
  },

  css: ["./assets/css/html.css"],

  i18n: {
    locales: ["zh-CN", "en-US"],
    defaultLocale: "zh-CN",
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./assets/icons",
      },
    ],
  },

  compatibilityDate: "2024-08-26",
});
