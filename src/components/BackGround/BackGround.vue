<template>
    <el-container>
      <el-header height="100px" class=header>
        <el-row style="margin-top:20px">
          <el-col :span="15">
              <div>
              <router-link to='/'>
              <img src="@/images/E-book.png" class="tit" align=left></img>
              </router-link>
              </div>
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
      },
      methods: {
        sendSearchinfo() {
          //window.alert(this.inputsearch)
          /*
          this.$router.push({
            name:'index',
            params: {
              searchinfo: this.inputsearch,
              num:123
            }
          })*/
        }
      }
    }
</script>

<style scoped>
    @import "./BackGround.css";
</style>
