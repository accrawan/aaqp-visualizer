// Copyright (c) 2024 Barnabas Nomo
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { WebSocketServer } from "ws";

class Ws {
  ws: WebSocketServer | undefined;
  #initialized = false;
  connect() {
    if (this.#initialized) return;
    this.ws = new WebSocketServer({ port: process.env.SOCKET_PORT });
    this.#initialized = true;
  }
  on(event: string, cb: (msg?: Buffer | string) => void) {
    if (!this.ws) return;
    this.ws.on(event, cb);
  }

  send(data: Buffer) {
    if (!this.#initialized) this.connect();
    console.log("send called");
    console.log(this.ws?.clients)
    this.ws?.clients.forEach(client => {
      client.send(data);
    })
  }
}

const wsInstance = new Ws();

export default wsInstance;

const val = {
  "end_device_ids": {
    "device_id": "eui-814cb3ff00000005",
    "application_ids": {
      "application_id": "aaqp-v2"
    },
    "dev_eui": "814CB3FF00000005",
    "join_eui": "814CB3FF915E7731"
  },
  "correlation_ids": [
    "as:up:01HS1BQAM42SKQ3FPBZ1XA2YDQ",
    "rpc:/ttn.lorawan.v3.AppAs/SimulateUplink:6f0f8b02-21be-492b-8636-c869d61854d8"
  ],
  "received_at": "2024-03-15T15:29:38.947227620Z",
  "uplink_message": {
    "f_port": 1,
    "frm_payload": "h5hJSYRkhlSEmEZIRoRmYWh5",
    "decoded_payload": {
      "battery": -0.0016093254089355469,
      "bytes": [
        135,
        152,
        73,
        73,
        132,
        100,
        134,
        84,
        132,
        152,
        70,
        72,
        70,
        132,
        102,
        97,
        104,
        121
      ],
      "gases": {
        "co": 2.18505859375,
        "no2": -0.0016301870346069336
      },
      "humidity": null,
      "location": [
        7.0556640625,
        0.251007080078125
      ],
      "pm": {
        "pm10_0": -0.0015735626220703125,
        "pm1_0": 0.05340576171875,
        "pm2_5": 1.7669677734375
      },
      "srvDt": [
        15,
        3,
        2024
      ],
      "srvTm": [
        15,
        29,
        38
      ],
      "temperature": 17.578125
    },
    "rx_metadata": [
      {
        "gateway_ids": {
          "gateway_id": "test"
        },
        "rssi": 42,
        "channel_rssi": 42,
        "snr": 4.2
      }
    ],
    "settings": {
      "data_rate": {
        "lora": {
          "bandwidth": 125000,
          "spreading_factor": 7
        }
      },
      "frequency": "868000000"
    }
  },
  "simulated": true
}