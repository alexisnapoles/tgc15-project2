import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'

// this line allows axios to be registered globally to avoid repeating the import from different components
window.axios = require('axios');
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  Vuex,
  axios,
  render: h => h(App),
}).$mount('#app')
