import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { loadCss, loadScript, setDefaultOptions } from 'esri-loader'

// preload arcgis js api and css
setDefaultOptions({
  version: process.env.VUE_APP_ARCGIS_VERSION, 
})

loadCss()

loadScript()

createApp(App).mount('#app')
