// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-mapbox'
  ],
  mapbox: {
    accessToken: process.env.MAPBOX_ACCESS_TOKEN
  }
})
