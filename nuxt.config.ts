// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'TypeORM Support', // default fallback title
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      ],
    },
  },
  modules: ['@nuxt/content', '@nuxt/fonts'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  fonts: {
    provider: 'google',
    defaults: {
      weights: [300, 400, 500, 600, 700, 800],
    }
  }
})
