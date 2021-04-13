import Vue from 'vue'
import App from './App.vue'
import router, { asynRouter } from './router'
// import 'animate.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

Vue.config.productionTip = false
let role = null
const addAsynRouter = (role) => {
  const list = []
  asynRouter.forEach(item => {
    const roles = (item.meta || {}).roles
    if (!roles) {
      list.push(item)
      return true
    }
    if (roles.indexOf(role) > -1) {
      list.push(item)
      return true
    }
  })
  router.addRoutes(list)
}

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (!role) {
    role = 'admin'
    addAsynRouter(role)
    next({ ...to, replace: true })
  }
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    NProgress.done()
  }, 800)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

