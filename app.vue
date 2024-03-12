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
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-0.2623019, 5.5913738],
        zoom: 12,
      }"
    />
    <!-- <mapbox -->
  </div>
</template>
