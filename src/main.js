import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import fastClick from 'fastclick'
import '@/assets/iconFont/iconfont.css'
import http from './utils/http'
require('../mock')
Vue.use(http)
fastClick.attach(document.body)
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
