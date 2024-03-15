<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <p>Welicomp</p>
    <MapboxMap
      map-id="'s32k'"
      style="
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
      "
      :options="{
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-0.2623019, 5.5913738],
        zoom: 12,
      }"
    >
      <LazyMapboxDefaultMarker v-model:lnglat="lnglat" marker-id="marker1">
        <LazyMapboxDefaultPopup
          popup-id="popup1"
          :lnglat="lnglat"
          :options="{
            closeOnClick: false,
            color: '#fff',
          }"
          :paint="{
            'marker-color': '#fff',
          }"
        >
          <h2>Location Data Card</h2>
        </LazyMapboxDefaultPopup>
      </LazyMapboxDefaultMarker>
    </MapboxMap>
  </div>
</template>

<script setup lang="ts">
const lnglat = ref([-0.2623079, 5.5913738] as [number, number]);
const paint = {
  'circle-radius': 6,
  'circle-color': '#B42222',
};

import { v4 as uuid } from 'uuid';
// import socket from './middleware/socket';
const message = ref<string>('');

// const { $socket } = useNuxtApp();
// const uid = uuid();

onMounted(() => {
  console.log('mounted');
  this.socket = this.$nuxtSocket({ channel: '/' });
  // $socket.on
  // console.log($socket);
  // $socket.onopen = () => {
  //   localStorage.setItem(`connection-${uid}`, uid);
  //   console.log('socket open');
  //   $socket.send(uid);
  // };
  // $socket.onmessage = ({ data }: any) => {
  //   console.log('data', data);
  //   message.value = data;
  // };
  // $socket.onclose = () => {
  //   console.log('disconnected');
  // };
  // $socket.onerror = function (error) {
  //   alert(`[error]`);
  // };
});
</script>
