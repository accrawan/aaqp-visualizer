import mqtt from 'mqtt'
import wsInstance from '~/websocketInstance';
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  // const mqttClient = mqtt.connect(config.public.mqtt.uri);

  // mqttClient.on('connect', () => {
  //   console.log('Client Connected')
  //   mqttClient.subscribe('#', err => {
  //     if (!err)
  //       console.log('Client Subscribed')
  //   })
  // })

  // mqttClient.on('message', (topic, message, packet) => {
  //   console.log(topic, message);
  //   wsInstance.send(message);
  //   //   if (global.wss)
  //   //     console.log('global.wss wai')
  //   //   if (globalThis && globalThis.clients)
  //   //     globalThis.clients.forEach((client, isBinary) => {
  //   //       if (client.readyState === WebSocket.OPEN)
  //   //         client.send(message.toString())
  //   //     })
  //   //   else console.log('no connected clients')
  //   //   // console.log('topic, message, packet');
  // });
  // nuxtApp.vueApp.use(mqttClient);
  // nuxtApp.provide('mqtt', mqttClient)
})
