<template>
<div>
    <el-row style="height:30px;">
        <div align=left class=stroke>今日推荐：</div>
    </el-row>
    <el-row class=el-row-books>
    <div class="line_split"></div>
    <div style="height:15px"></div>
    <div v-for="book in books">
        <el-col :span="8">
            <book1 :info="book"></book1>
        </el-col>
    </div>
    </el-row>
</div>
</template>
<script>
import book1 from "@/components/Index/Books/book1.vue"
import book2 from "@/components/Index/Books/book2.vue"
export default{
      components:{
          'book1':book1,
          'book2':book2
      },
      data() {
          return {
            books:[{
                name: '深入理解计算机基础',
                author:'作者：Bryant,Hallaron',
                remain:'库存：10 ISBN编号：000',
                price:'128￥'
            },
            {
               name: '深入理解计算机基础2',
                author:'作者：Bryant,Hallaron2',
                remain:'库存：10 ISBN编号：0002',
                price:'128￥' 
            }]
          }
      }
}
</script>
<style scoped>
    @import './Index.css';
</style>