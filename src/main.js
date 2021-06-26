import Vue from 'vue'
import App from './App.vue'
import './quasar'

Vue.config.productionTip = false

const func = {
  getStaticImage: (img_name) => {
    return require(`@/assets/${img_name}`)
  }
}

Vue.prototype.$func = func

new Vue({
  render: h => h(App),
}).$mount('#app')
