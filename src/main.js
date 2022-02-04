import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bulma/css/bulma.min.css'

// this line allows axios to be registered globally to avoid repeating the import from different components
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({

  render: h => h(App),
}).$mount('#app')
