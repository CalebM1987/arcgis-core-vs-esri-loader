<template>
  <div class="map-wrapper">
    <div id="viewDiv" ref="viewDiv"></div>
  </div>
</template>

<script lang="ts">
/// <reference types="@types/arcgis-js-api" />
import { defineComponent, onMounted } from 'vue'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import esriConfig from '@arcgis/core/config'
import '@arcgis/core/assets/esri/themes/light/main.css'


export default defineComponent({
  setup(){
    
    // set api key (use .env.local file)
    esriConfig.apiKey = process.env.VUE_APP_ARCGIS_ACCESS_TOKEN

    // set map and view
    const map = new Map({
      basemap: 'topo'
    })

    const view = new MapView({
      map,
      container: 'viewDiv',
      center: [-94, 45],
      zoom: 12
    })

    onMounted(()=> {
      const view = new MapView({
        map,
        container: 'viewDiv',
        center: [-94, 45],
        zoom: 12
      })

      view.when(()=> {
        console.log('view loaded')
      })
      
    })

    return {
      map,
      view
    }

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