import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.min.css'

// this line allows axios to be registered globally to avoid repeating the import from different components

Vue.config.productionTip = false

new Vue({

  render: h => h(App),
}).$mount('#app')
