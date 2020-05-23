import Vue from 'vue'
import App from './App.vue'
import './assets/css/bulmawatch_dark.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')