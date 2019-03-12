<template>
  <el-row  class="head-wrap">
    <el-col :span="19">
     欢迎来到E-book商城~
    </el-col>
    <el-col :span="1">
        <i class="el-icon-goods">购物车</i>
    </el-col>
    <el-col :span="2">
        我的订单
    </el-col>
    <router-link to="/login">
    <el-col :span="1">
        登陆
    </el-col>
    </router-link>
    <router-link to="/sign-up">
    <el-col :span="1">
        注册
    </el-col>
    </router-link>
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