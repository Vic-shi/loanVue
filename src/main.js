// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import layer from 'vue-layer'
// Vue.prototype.$layer = layer(Vue)
import 'vue-layer-mobile/need/layer.css'
import layer from 'vue-layer-mobile'
Vue.use(layer)

Vue.use(VueAwesomeSwiper)
axios.defaults.baseURL = '/api'
axios.defaults.transformRequest = [function (data) {
  return qs.stringify(data)
}]
Vue.prototype.$axios = axios
Vue.prototype.HOST = '/api'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
