<template>
  <map-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MapView from '@/views/MapView.vue';

export default defineComponent({
  name: 'App',
  components: {
    MapView
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
