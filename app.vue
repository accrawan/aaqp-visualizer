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
let Devices: { end_device_ids: Record<string, unknown> }[] = [];
const paint = {
  'circle-radius': 6,
  'circle-color': '#B42222',
};

import { v4 as uuid } from 'uuid';
const message = ref<string>('');
// const {} = useNuxtApp();
const uid = uuid();

onMounted(() => {
  console.log('mounted');
  const config = useRuntimeConfig();
  const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  let socket = new WebSocket(
    `${wsProtocol}//${window.location.hostname}:${config.public.socket.port}`
  );

  socket.onopen = () => {
    localStorage.setItem(`connection-${uid}`, uid);
    console.log('socket open');
    socket.send(uid);
  };

  socket.onmessage = async (e) => {
    const dataIn = await e.data?.text();
    const parsed = JSON.parse(dataIn);
    console.log(parsed);
    let refToDevice = Devices.findIndex(
      (device) =>
        device.end_device_ids.dev_eui === parsed.end_device_ids.dev_eui
    );

    if (refToDevice !== -1) {
      Devices[refToDevice] = parsed;
    } else {
      Devices.push(parsed);
    }
    console.log(Devices);
  };
});
</script>
