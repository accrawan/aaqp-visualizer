// Copyright (c) 2024 Barnabas Nomo
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import Vue from 'vue';
// import mqtt from 'vue-mqttsocket'
// import mqtt from 'mq'
// if (process.browser) {
const mqtt = require('vue-mqttsocket').default;
Vue.use(mqtt, {
  uri: `mqtt://${process.env.MQTT_SERVER_USERNAME}:${process.env.MQTT_SERVER_PASSWORD}@${process.env.MQTT_SERVER_PUBLIC_ADDRESS}`,
});

// }
