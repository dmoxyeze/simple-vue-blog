import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import { store } from './store'
const fb = require('./firebase/firebaseConfig')

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuetify)


Vue.config.productionTip = false



let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
      app = new Vue({
          el: '#app',
          router,
          store,
          vuetify: new Vuetify(),
          render: h => h(App)
      })
  }
})



//const router = new VueRouter({ mode: 'history' ,  routes  })
/*
new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
*/
