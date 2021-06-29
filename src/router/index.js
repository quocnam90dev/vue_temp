import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: () => import('@/pages/Landing.vue')
  },
  {
    path: '/card',
    component: () => import('@/pages/Card.vue')
  },
  {
    path: '/credit',
    component: () => import('@/pages/Credit.vue')
  },
]

export default new VueRouter({
  mode: 'history',
  routes
})
