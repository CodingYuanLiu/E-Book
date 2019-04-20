import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'

import index from '@/components/Index/Index.vue'
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

import statistic from '@/components/Statistic/Statistic.vue'
import usermanage from '@/components/Usermanage/Usermanage.vue'
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
      path:'/statistic',
      name:'statistic',
      component:statistic,
      meta:{
        requireLogin:true,
        requireAdmin:true
      }
    },
    {
      path:'/usermanage',
      name:'usermanage',
      component:usermanage,
      meta:{
        requireLogin:true,
        requireAdmin:true
      }
    },
    {
      path:'**',
      redirect:'/'
    }
  ]
})


router.beforeEach((to,from,next) =>{
  if(to.matched.some(r=>r.meta.requireAdmin)){
    if(store.state.user.authority=="ADMIN"){
      next();
    }
    else{
      window.alert("抱歉，您不是管理员。请重新登陆");
      next({
        path:'/login',
      })
    }
  }
  if(to.matched.some(r=>r.meta.requireLogin)){
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