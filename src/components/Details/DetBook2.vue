<template>
<div>
    <el-container>
        <el-aside width="320px">
            <div>
                <img src="@/images/mingdynasty.jpg" class=bookimage align=right> </img>
            </div>
        </el-aside>
        <el-main>
            <el-container>
                <el-header>
                    <el-card shadow="never" class=titlecard align=left>
                        <div class=title>明朝那些事儿</div>
                        <div class=abstract>历史本身也能很好玩儿</div>    
                    </el-card>
                </el-header>
                <el-main>
                    <el-card shadow="never" align=left class=maincard>
                        <el-row>
                            <el-col :span="8">
                                <div align=left class=author>
                                    作者: 当年明月
                                </div>
                            </el-col>
                            <el-col :span="16">
                                <div align=left class=author>
                                    出版社: 机械工业出版社
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
                            <el-col :span="3">
                                <div align=left class=price>
                                    58.00
                                </div>
                            </el-col>
                            <el-col :span="19">
                                <div class=author style= "line-height:70px;color:black;">
                                    （库存：12）
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
                                    @change="handleChange" :min="1" 
                                    label="描述文字">
                                    </el-input-number>
                                </el-col>
                                <el-col :span="4">
                                    <el-button type="danger" plain>加入购物车</el-button>
                                </el-col>
                                <el-col :span="6">
                                    <el-button type="warning">立即购买</el-button>
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
  export default {
    data() {
      return {
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>