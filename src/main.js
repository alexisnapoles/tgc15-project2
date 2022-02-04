import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import 'bulma/css/bulma.min.css'


// axios.defaults.headers allows the https api request


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
