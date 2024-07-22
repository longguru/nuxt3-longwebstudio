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
  site: {
    url: 'https://www.longwebstudio.net/',
    name: `Lỗ Văn Long - Nhà Thiết Kế Website Hiện Đại`,
    description: `Tôi là nhà thiết kế website hiện đại và chuyên nghiệp, cung cấp các giải pháp thiết kế như website cửa hàng, thiết kế website blog, và ứng dụng.`,
    defaultLocale: 'vi'
  },

  gtag: {
    id: 'G-7NHZPV6N6F'
  }
});