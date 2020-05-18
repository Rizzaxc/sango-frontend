import Vue from 'vue'
import App from './App.vue'
import './assets/css/bulmawatch_dark.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/** 
 * TODO:
 *  Add small Delete button to each KanjiCard; when pressed the card's removed
 *  WK Level OverView
 *  Attach Logo
 */