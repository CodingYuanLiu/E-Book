<template>
  <el-row  class="head-wrap">
    <el-col :span="16">
     欢迎来到E-book商城~
    </el-col>
    <el-col :span="1">
      <div v-if="authority=='USER' ||authority==null">&nbsp</div>
      <div v-if="authority=='ADMIN'">
        <router-link to="/statistic">
          统计
        </router-link>
      </div>
    </el-col>
    <el-col :span="1">
      <div v-if="authority=='USER'||authority==null">&nbsp</div>
      <div v-if="authority=='ADMIN'">
        <router-link to="/usermanage">
          用户管理
        </router-link>
      </div>
    </el-col>
    <el-col :span="1">
      <router-link to="/cart">
        <i class="el-icon-goods">购物车</i>
      </router-link>
    </el-col>
    <el-col :span="1">
      <router-link to="/order">
      <div v-if="authority=='USER'||authority==null">
        我的订单
      </div>
      <div v-if="authority=='ADMIN'">
        所有订单
      </div>
      </router-link>
    </el-col>
    <el-col :span="1">
      <router-link to="/scanning">
      <div v-if="authority=='USER'||authority==null">
        书籍浏览
      </div>
      <div v-if="authority=='ADMIN'">
        书籍管理
      </div>
      </router-link>
    </el-col>
    <el-col :span="2">
      <div v-if="!isLogin">
        <router-link to="/login">
          登陆
        </router-link>
      </div>
      <div v-if="isLogin">
        您好，{{userinfo}}
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
      authority: state=>state.user.authority,
      userid:state=>state.user.userid
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
