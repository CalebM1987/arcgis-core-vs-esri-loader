<template>
  <div class="map-wrapper">
    <div id="viewDiv" ref="viewDiv"></div>
  </div>
</template>

<script lang="ts">
/// <reference types="@types/arcgis-js-api" />
import { defineComponent, nextTick } from 'vue'
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

    return {
      map,
      view
    }
  },

  created(){
    console.log('map and view: ', this.map, this.view)
    nextTick(()=> this.view.container = this.$refs.viewDiv as HTMLDivElement)
    this.view.when(()=> {
      console.log('view loaded')
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