<template>
    <el-container>
      <el-header height="100px" class=header>
        <el-row style="margin-top:20px">
          <el-col :span="15">
              <div>
              <router-link to="/">
              <img src="@/images/E-book.png" class="tit" align=left></img>
              </router-link>
              </div>
          </el-col>
          <el-col :span="7">
              <el-input
              placeholder="查找你喜欢的图书"
              v-model="inputsearch"
              clearable
              prefix-icon="el-icon-search">
              </el-input>
          </el-col>
          <el-col :span="1">
              <el-button type="primary" plain>
                  Search
              </el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="300px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import NavMenu from '@/components/NavMenu/Navmenu.vue'
    export default{
      components:{
          'navmenu':NavMenu
      },
      data() {
        return {
          inputsearch:""
    }
  }
}
</script>

<style scoped>
    @import "./BackGround.css";
</style>
