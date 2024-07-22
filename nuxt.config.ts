// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/seo', '@nuxtjs/tailwindcss', '@nuxtjs/tailwindcss', "nuxt-gtag"],
  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700, 900],
    },
  },
  gtag: {
    id: 'G-7NHZPV6N6F'
  }
});