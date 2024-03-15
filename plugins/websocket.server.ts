import WebSocket, { WebSocketServer } from "ws"
// import socket from "~/middleware/socket"

type Client = {
  id: string
  send: (message: string) => void
  readyState: number
}
// let wss: WebSocketServer
let clients: Client[] = []
// declare
// declare global {
//   var wss: WebSocketServer
//   var clients: Client[]
// }
// export default defineNuxtPlugin((nitroApp) => {
//   const wss = new WebSocketServer({
//     // server: 'ws://localhost:8080',
//     // host: 'ws://localhost:3000',
//     port: 3001,
//     // noServer: true


//   })

//   wss.on('connection', function connection(ws) {
//     console.log("socket connected")
//   })
//   console.log(wss)
// })

// export default defineNuxtPlugin({
//   name: "wss-plugin",
//   setup: {
  
//   }
//   hooks: {
//     // You can directly register Nuxt app runtime hooks here
//     'ready'() {
//       console.log("app-created")
//       // const nuxtApp = useNuxtApp()
//       // do something in the hook
//       const wss = new WebSocketServer({
//         port: 3001,
//       })

//       wss.on("connection", () => console.log("wss  connected"))

//     }
//   },
// })
