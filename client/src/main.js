import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire'
import VueFlashMessage from 'vue-flash-message'
import SmartTable from 'vuejs-smart-table'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)
Vue.use(SmartTable)
Vue.use(VueFlashMessage)
Vue.use(VueFire)
Vue.config.productionTip = false

require('./css/FlashMessage.css')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
