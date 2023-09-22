// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "no",
        name: "Norsk",
      },
    ], // used in URL path prefix
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: false,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
