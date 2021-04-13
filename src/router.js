import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export const asynRouter = [
  {
    path: '/Page1',
    name: 'Page1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/page1.vue'),
    meta: {
      roles: ['admin', 'visitor']
    }
  },
  {
    path: '/Page2',
    name: 'Page2',
    component: () => import('./views/page2.vue'),
    meta: {
      roles: ['admin']
    }
  },
  {
    path: '/Page3',
    name: 'Page3',
    component: () => import('./views/page3.vue'),
    meta: {
      roles: ['admin', 'test']
    }
  },
  {
    path: '/Page4',
    name: 'Page4',
    component: () => import('./views/page4.vue')
  }
]

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    // },
    // {
    //   path: '*',
    //   name: 'Error',
    //   component: () => import('./views/error.vue')
    }
  ]
})

