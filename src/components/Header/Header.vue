<template>
  <el-row  class="head-wrap">
    <el-col :span="18">
     欢迎来到E-book商城~
    </el-col>
    <router-link to="/cart">
    <el-col :span="1">
        <i class="el-icon-goods">购物车</i>
    </el-col>
    </router-link>
    <router-link to="/order">
    <el-col :span="1">
        我的订单
    </el-col>
    </router-link>
    <router-link to="/scanning">
    <el-col :span="1">
        书籍浏览
    </el-col>
    </router-link>
    <el-col :span="2">
      <div v-if="!isLogin">
        <router-link to="/login">
          登陆
        </router-link>
      </div>
      <div v-if="isLogin">
        您好，{{userinfo}},权限:{{authority}}
      </div>
    </el-col>
    <el-col :span="1" >
      <router-link to="/sign-up">
      <div v-if="!isLogin">
        注册
      </div>
      </router-link>
      <div v-if="isLogin" @click="onLogout">
        退出登录
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.head-wrap{
  background-color: #d0d0d0;
  color: #000;
  padding:6px;
  line-height: 20px;
  padding-left:50px;
  font-size:13px;
}
</style>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed:{
    ...mapState({
      isLogin: state=>state.user.isLogin,
      userinfo: state=>state.user.userinfo,
      authority: state=>state.user.authority
    })
  },
  methods:{
    ...mapActions(['logout']),
    onLogout(){
      this.logout().then(()=>{
        this.$router.push('/');
      })
    }
  }
  
}
</script>
