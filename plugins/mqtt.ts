import * as mqtti from 'vue-mqttsocket'
// const mqtt = require('vue-mqttsocket').default;
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const mqtt = mqtti.default;
  nuxtApp.vueApp.use(mqtt, {
    uri: config.public.MQTT_URI,
  })
})
