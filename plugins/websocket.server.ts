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
export default defineNuxtPlugin((nitroApp) => {
  // const wss = new WebSocketServer({
  //   // server: 'ws://localhost:8080',
  //   host: 'ws://localhost',
  //   port: 3000,
  //   // noServer: true


  // })

  // wss.on('connection', function connection(ws) {
  //   console.log("socket connected")
  // })
  // console.log(wss)
})
