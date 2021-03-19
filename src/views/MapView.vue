<template>
  <mapbox-map 
    :accessToken="accessToken" 
    mapStyle="streets-v11"
    :center="[-95, 45]"
    :zoom="12"
    height="800px"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { MapboxMap } from 'vue-mapbox-ts'


export default defineComponent({
  components: { MapboxMap },
  name: 'MapView',

  setup(){
    
    // set api key (use .env.local file)
    const accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN
    
    return {
      accessToken,
    }
  },

  created(){
    console.log('mapbox map created')
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