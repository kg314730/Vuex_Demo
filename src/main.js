import Vue from 'vue'
import App from './App.vue'

//importing store from Vuex
import {store} from './store/store'


Vue.config.productionTip = false

new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')
