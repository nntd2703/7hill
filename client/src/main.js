import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire'
import VueFlashMessage from 'vue-flash-message'

Vue.use(VueFlashMessage)
Vue.use(VueFire)
Vue.config.productionTip = false

require('./css/FlashMessage.css')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
