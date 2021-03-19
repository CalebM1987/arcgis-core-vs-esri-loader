<template>
  <!-- <div class="map-wrapper">
    <div id="map" ref="mapDiv"></div>
  </div> -->
  <mapbox-map :accessToken="accessToken" :mapStyle="mapStyle"/>
</template>

<script lang="ts">
// import { Map } from '@types/mapbox-gl'
import { defineComponent, ref } from 'vue'
import { MapboxMap } from 'vue-mapbox-ts'
// import { Map } from "mapbox-gl"
// import { MglMap } from "vue-mapbox" // eslint-disable-line


export default defineComponent({
  components: { MapboxMap },
  name: 'MapView',

  setup(){
    
    // set api key (use .env.local file)
    const accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN

    const mapStyle = ref('streets-v11')



    // set map 


    return {
      accessToken,
      mapStyle,
      // map,
      // map,
      // view
    }
  },

  created(){
    console.log('mapbox map created', this.$refs.mapDiv, document.getElementById('map'))
    // const map: Map = new Map({
    //   container: 'map', //this.$refs.mapDiv,
    //   style: this.mapStyle,
    //   center: [-94, 45],
    //   zoom: 12
    // })

    // nextTick(()=> this.map.container = this.$refs.mapDiv)
    
  }

})

</script>

<style lang="scss">

@import url(https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css);

#map {
  height: 100%;
  width: 100%;
}
.map-wrapper {
  height: calc(98vh);
  width: 100%;
}
  
</style>