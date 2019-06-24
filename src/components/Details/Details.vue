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
                                <el-col :span="7">
                                    <el-input-number v-model="num" 
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
    <el-card style="width:800px;margin-left:40px;" shadow="never">
        <div slot="header" class="title" style="margin-top:0px;height:30px;line-height:30px;" align=left>
            <span>评论</span>
        </div>
        <div v-if="comment==null" class = "text" align=left>
            无
        </div>
        <div v-else>
        <div v-for="o in comment" :key="o.comment" class="text item" align=left>
            <el-card shadow="never">
            <div style="font-size:160%;">
                {{o.username+"："}}
            </div>
            <div style="margin-left:30px;font-size:120%">
                {{"-- "+o.comment}}
            </div>
            </el-card>
        </div>
        </div>
    </el-card>
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
        num:1,
        book:null,
        comment:null
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
            this.addCart({book:this.book,count:this.num});
            this.$router.push(this.$route.query.redirect || '/')
          }
      }
    },
    created() {
        //this.book=this.$route.query.name;
        this.book = JSON.parse(decodeURIComponent(this.$route.query.name));
        this.$http.post('http://localhost:8080/comment',{
                        bnum:this.book.bnum
                    }).then( res =>{
                        this.comment = res.body.data;
                    }
                    );
    },
    computed:{
        ...mapState({
            isLogin:state=>state.user.isLogin
        })
    }
  };
</script>