<template>
  <div class="map-wrapper">
    <div id="viewDiv" ref="viewDiv"></div>
  </div>
</template>

<script lang="ts">
/// <reference types="@types/arcgis-js-api" />
import { defineComponent } from 'vue'

export default defineComponent({
  setup(){

    // set api key (use .env.local file)
    esriConfig.apiKey = process.env.VUE_APP_ARCGIS_ACCESS_TOKEN

    // set map and view
    const map: __esri.Map =new Map({
      basemap: 'topo'
    })

    const view = new MapView({
      map: this.map,
      container: this.$refs.viewDiv,
      center: [-94, 45],
      zoom: 12
    })

  }
})

</script>

<style lang="scss">

#viewDiv {
  height: 100%;
  width: 100%;
}
.map-wrapper {
  height: calc(98vh);
  width: 100%;
}
  
</style>