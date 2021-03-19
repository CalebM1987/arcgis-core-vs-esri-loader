import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueMapboxTs from "vue-mapbox-ts"

createApp(App).use(VueMapboxTs).mount('#app')
