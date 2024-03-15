import WebSocket, { WebSocketServer } from "ws"
import wsInstance from "./websocketInstance"
import mqtt from "mqtt";

const MQTT_CONFIG_URI = `mqtt://${process.env.MQTT_SERVER_USERNAME}:${process.env.MQTT_SERVER_PASSWORD}@${process.env.MQTT_SERVER_PUBLIC_ADDRESS}`

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-mapbox',
    'nuxt-socket-io'
  ],
  hooks: {
    ready: (nuxt) => {
      wsInstance.connect();

      wsInstance.on('connection', function connection(ws) {
        console.log("socket connected")
      })

      const mqttClient = mqtt.connect(MQTT_CONFIG_URI)
      mqttClient.on('connect', () => {
        console.log('Client Connected')
        mqttClient.subscribe('#', err => {
          if (!err)
            console.log('Client Subscribed')
        })
      })

      mqttClient.on('message', (topic, message, packet) => {
        console.log(topic, message.toString());
        wsInstance.send(message);
        //   if (global.wss)
        //     console.log('global.wss wai')
        //   if (globalThis && globalThis.clients)
        //     globalThis.clients.forEach((client, isBinary) => {
        //       if (client.readyState === WebSocket.OPEN)
        //         client.send(message.toString())
        //     })
        //   else console.log('no connected clients')
        //   // console.log('topic, message, packet');
      });
    }
  },
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
      ,
      socket: {
        port: process.env.SOCKET_PORT
      }
    }
  }
})
