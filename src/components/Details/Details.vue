<template>
<div>
    <el-container>
        <el-aside width="320px">
            <div>
                <img :src="book.pic" class=bookimage align=right> </img>
            </div>
        </el-aside>
        <el-main>
            <el-container>
                <el-header>
                    <el-card shadow="never" class=titlecard align=left>
                        <div class=title>{{book.name}}</div>
                        <div class=abstract>{{book.router}}</div>    
                    </el-card>
                </el-header>
                <el-main>
                    <el-card shadow="never" align=left class=maincard>
                        <el-row>
                            <el-col :span="8">
                                <div align=left class=author>
                                    作者: {{book.author}}
                                </div>
                            </el-col>
                            <el-col :span="16">
                                <div align=left class=author>
                                    ISBN编号: {{book.isbn}}
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <div style="height:30px;line-height:30px">
                                价格：
                            </div>
                        </el-row>
                        <el-row>
                            <el-col :span="1" align=right 
                            class=dollar>￥</el-col>
                            <el-col :span="4">
                                <div align=left class=price>
                                    {{parseInt(book.price)}}
                                </div>
                            </el-col>
                            <el-col :span="19">
                                <div class=author style= "line-height:70px;color:black;">
                                    （库存：{{book.remain}}）
                                </div>
                            </el-col>
                            
                        </el-row>
                    </el-card>    
                </el-main>
                <el-footer height="150px ">
                    <el-card shadow="never" class=footercard>
                        <div style="margin-top:-50px;" align=left>
                            <el-row>
                                <el-col :span="6">
                                    <el-input-number v-model="num1" 
                                    :min="1" 
                                    label="描述文字">
                                    </el-input-number>
                                </el-col>
                                <el-col :span="4">
                                    <el-button type="danger" plain @click="submitItem">加入购物车</el-button>
                                </el-col>
                            </el-row>

                        </div>
                    </el-card>
                </el-footer>
            </el-container>
        </el-main>
    </el-container>
</div>
</template>
<style scoped>
    @import "./Details.css";
</style>
<script>
  import {mapMutations,mapState} from 'vuex'
  export default {
    data() {
      return {
        num1: 1,
        book:null
      };
    },
    methods: {
      ...mapMutations(['addCart']),
      handleChange(value) {
        console.log(value);
      },
      submitItem() {
          if(!this.isLogin){
              this.$message("请先登录噢亲~")
              this.$router.push('login')
          }
          else{
            this.addCart({book:this.book,count:this.num1});
            this.$router.push(this.$route.query.redirect || '/')
          }
      }
    },
    created() {
        this.book=this.$route.query.name;
    },
    computed:{
        ...mapState({
            isLogin:state=>state.user.isLogin
        })
    }
  };
</script>