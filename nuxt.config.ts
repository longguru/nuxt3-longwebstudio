// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/tailwindcss'],
  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700, 900],
    },
  },
});
