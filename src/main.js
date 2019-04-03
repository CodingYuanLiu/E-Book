import Vue from 'vue'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

import App from './App'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueResource)

Vue.http.options.emulateJSON=true;
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})