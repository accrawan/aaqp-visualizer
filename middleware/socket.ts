// Copyright (c) 2024 Barnabas Nomo
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import WebSocket, { WebSocketServer } from 'ws'
import { defineEventHandler } from 'h3'

type Client = {
  id: string
  send: (message: string) => void
  readyState: number
}

// declare global {
//   var wss: WebSocketServer
//   var clients: Client[]
// }

let wss: WebSocketServer
let clients: Client[] = []

export default defineEventHandler((event) => {
  console.log(event.node.res.socket?.server)
  // wss = new WebSocketServer({ server: event.node.res.socket?.server })
  // if (!global.wss) {
  // console.log(wss)
  // wss.on('connection', function connection(socket) {
  //   console.log('socket connected')
  //   socket.send('connected')
  //   socket.on('message', message => {
  //     wss.clients.forEach(client => {
  //       if (client == socket && client.readyState === WebSocket.OPEN) {
  //         clients.push({
  //           id: message.toString(),
  //           send: (data: string) => client.send(data),
  //           readyState: client.readyState
  //         })
  //         global.clients = clients
  //       }
  //     })
  //   })
  // global.wss = wss
  // })

  // }
  // else console.log('wss already exists')
})