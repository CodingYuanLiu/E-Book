<template>
<div>
    <el-container>
        <el-aside width="320px">
            <div>
                <img src="@/images/icsimage.jpg" class=bookimage align=right> </img>
            </div>
        </el-aside>
        <el-main>
            <el-container>
                <el-header>
                    <el-card shadow="hover" class=titlecard align=left>
                        <div class=title>深入理解计算机系统</div>
                        <div class=abstract>上海交大软件学院ICS教材</div>    
                    </el-card>
                </el-header>
                <el-main>
                    <el-card shadow="hover" align=left class=maincard>
                        <el-row>
                            <el-col :span="8">
                                <div align=left class=author>
                                    作者: Bryant,Hallaron
                                </div>
                            </el-col>
                            <el-col :span="16">
                                <div align=left class=author>
                                    出版社:机械工业出版社
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
                                    128.00
                                </div>
                            </el-col>
                            <el-col :span="19">
                                <div class=author style= "line-height:70px;">
                                    （库存：10）
                                </div>
                            </el-col>
                            
                        </el-row>
                    </el-card>    
                </el-main>
                <el-footer height="150px ">
                    <el-card shadow="hover" class=footercard>
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