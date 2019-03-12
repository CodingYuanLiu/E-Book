import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/config/menu-config'
import index from '@/components/Index/Index.vue'
import detbook1 from '@/components/Details/DetBook1.vue'
import detbook2 from '@/components/Details/DetBook2.vue'
import engineering from '@/components/Index/Categories/Engineering.vue'
import novel from '@/components/Index/Categories/Novel.vue'
import login from '@/components/Login/Login.vue'
import signup from '@/components/Sign-up/Sign-up.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/details/book1',
      name: 'detbook1',
      component: detbook1
    },
    {
      path: '/details/book2',
      name: 'detbook2',
      component: detbook2
    },
    {
      path: '/engineering',
      name: 'engineering',
      component: engineering
    },
    {
      path: '/novel',
      name: 'novel',
      component: novel
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: signup
    }
  ]
})
