import Vue from 'vue'
import App from './App.vue'
import './quasar'
import store from './store'
import router from './router/'

Vue.config.productionTip = false

const func = {
  getStaticImage: (img_name) => {
    return require(`@/assets/${img_name}`)
  }
}

Vue.prototype.$func = func

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
