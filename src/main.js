import Vue from "vue"
import App from "./App.vue"
import "./quasar"
import router from "./router/"
Vue.config.productionTip = false

const func = {
  getStaticImage: img_name => {
    return require(`@/assets/${img_name}`)
  }
}

Vue.prototype.$func = func

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
