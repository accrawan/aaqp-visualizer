// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-mapbox'
  ],
  plugins: [
    {
      src: 'plugins/mqtt.ts',
      mode: 'client'
    }
  ],
  mapbox: {
    accessToken: process.env.MAPBOX_ACCESS_TOKEN
  },
  publicRuntimeConfig: {
    MQTT_URI: `ws://${process.env.MQTT_SERVER_USERNAME}:${process.env.MQTT_SERVER_PASSWORD}@${process.env.MQTT_SERVER_PUBLIC_ADDRESS}`
  }
})
