import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'

import index from '@/components/Index/Index.vue'
import detbook1 from '@/components/Details/DetBook1.vue'
import detbook2 from '@/components/Details/DetBook2.vue'
import engineering from '@/components/Index/Categories/Engineering.vue'
import novel from '@/components/Index/Categories/Novel.vue'
import login from '@/components/Login/Login.vue'
import signup from '@/components/Sign-up/Sign-up.vue'
import cart from '@/components/Cart/Cart.vue'
import order from '@/components/Order/Order.vue'
import science from '@/components/Index/Categories/Science.vue'
import arts from '@/components/Index/Categories/Arts.vue'
import children from '@/components/Index/Categories/Children.vue'
import details from '@/components/Details/Details.vue'

import scanning from '@/components/Scanning/Scanning.vue'


Vue.use(Router)
const router = new Router({
  mode:"history",
  //base:"/EBook/",
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
      path:'/details/',
      name:'details',
      component:details
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
    },
    {
      path:'/cart',
      name:'cart',
      component:cart,
      meta:{
        requireLogin:true
      }
    },
    {
      path:'/order',
      name:'order',
      component:order,
      meta:{
        requireLogin:true
      }
    },
    {
      path:'/scanning',
      name:'scanning',
      component:scanning
    },
    {
      path:'/science',
      name:'science',
      component:science
    },
    {
      path:'/arts',
      name:'arts',
      component:arts
    },
    {
      path:'/children',
      name:'children',
      component:children
    },
    {
      path:'**',
      redirect:'/'
    }
  ]
})


router.beforeEach((to,from,next) =>{
  if(to.matched.some(r=>r.meta.requireLogin)){
    console.log(store.state.user.isLogin);
    if(store.state.user.isLogin){
      next();
    }
    else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }
  else{
    next();
  }
});

export default router;