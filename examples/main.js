import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AllCountDown from '../src/vue-all-count-down/index.js'

Vue.use(AllCountDown);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
