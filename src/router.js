import Vue from 'vue'
import Router from 'vue-router'
import Agents from './views/Agents'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/agents'
    },
    {
      path: '/agents',
      name: 'agents',
      component: Agents
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
    },
    {
      path: '/myCruise',
      name: 'myCruise',
      component: () => import(/* webpackChunkName: "myCruise" */ './views/MyCruise.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import(/* webpackChunkName: "help" */ './views/Help.vue')
    }
  ]
})
