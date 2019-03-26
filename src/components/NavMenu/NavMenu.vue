<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo"
      @open="handleOpen" 
      @close="handleClose"
      unique-opened
      background-color="#545c64" text-color="#fff" 
      style="min-height:800px">
      <el-submenu v-for="item in menu" v-if="item.sub.length" :index="item.id" :key="item.id">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span v-text="item.name"></span>
        </template>
        <el-menu-item-group v-for="sub in item.sub" :key="sub.component">
          <router-link :to= "'/'+sub.componentName" style="text-decoration: none;color:white">
          <el-menu-item :index="sub.componentName" v-text="sub.name">
          </el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item v-for="item in menu" v-if="!item.sub.length" :index="item.id" :key="item.id">
        <template slot="title">
            <router-link :to= "'/'+item.id" style="text-decoration: none;color:white">
            <div>
              <i class="el-icon-location"></i>
              <span v-text="item.name"></span>
            </div>
          </router-link>
        </template>
      </el-menu-item>
<!--
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航二</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航三</span>
          </template>
        </el-menu-item>
        -->
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
/* eslint-disable */
  import menu from '@/config/menu-config'
  export default {
    data() {
      return{
        menu: menu
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
.router-link-active {
  text-decoration: none;
}
</style>