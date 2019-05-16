import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})
