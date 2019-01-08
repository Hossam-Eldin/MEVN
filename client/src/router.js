import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { path: '/login', name: 'login', component: () => import('./components/auth/signin.vue') },
    {
      path: '/signup', name: 'signup', component: () => import('./components/auth/signup.vue'),},
    { path: '/dashboard', 
      name: 'dashboard', 
      component: () => import('./components/dashboard/dashboard.vue'),
      beforeEnter(to, from, next) {
        if (store.state.token) {
          next()
        } else {
          next('/login')
        }
      } 
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('./components/welcome/welcome.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
