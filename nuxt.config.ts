// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-mapbox',
    'nuxt-socket-io'
  ],
  plugins: [
    {
      src: 'plugins/mqtt.ts',
      mode: 'server'
    },
    {
      src: 'plugins/websocket.server.ts',
      mode: 'server'
    }
  ],
  mapbox: {
    accessToken: process.env.MAPBOX_ACCESS_TOKEN
  },
  io: {
    sockets: [{
      name: 'main',
      url: process.env.SOCKET_URI
    }]
  },
  runtimeConfig: {
    public: {
      mqtt: {
        uri: `mqtt://${process.env.MQTT_SERVER_USERNAME}:${process.env.MQTT_SERVER_PASSWORD}@${process.env.MQTT_SERVER_PUBLIC_ADDRESS}`
      }
    }
  }
})
