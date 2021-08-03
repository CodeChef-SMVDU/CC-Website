import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueResource from 'vue-resource'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  vuetify,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
