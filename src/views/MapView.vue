<template>
  <div class="map-wrapper">
    <div id="viewDiv" ref="viewDiv"></div>
  </div>
</template>

<script lang="ts">
/// <reference types="@types/arcgis-js-api" />
import { defineComponent, onMounted } from 'vue'
import { loadModules } from 'esri-loader'

interface MapViewData {
  map?: __esri.Map;
  view?: __esri.MapView;
}

export default defineComponent({

  async setup(){

    onMounted(async ()=> {

      try {
  
        const [
          Map,
          MapView,
          esriConfig
        ] = await loadModules<[
          __esri.MapConstructor,
          __esri.MapViewConstructor,
          __esri.config
        ]>([
          "esri/Map",
          "esri/views/MapView",
          "esri/config"
        ])
      
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
        
        view.when(()=> {
          console.log('view loaded')
        })
  
      } catch(err){
        console.warn(err)
        console.error('failed load esri modules')
      }
    })

    /**
     * since map and view are actually created asynchronously, and using ref() will create
     * problems due to conflicts with the esri.Accessor, it would make sense to store these
     * properties in a vuex store if they need to be accessed outside of the setup function
     */
    return {
      
    }

  },

  

  
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