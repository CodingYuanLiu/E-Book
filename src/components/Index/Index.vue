<template>
<div>
    <el-row style="height:30px;">
        <div align=left class=stroke>今日推荐：</div>
    </el-row>
    <el-row class=el-row-books>
    <div class="line_split"></div>
    <div style="height:15px"></div>
        <el-col :span="8">
            <book1></book1>
        </el-col>
        <el-col :span="8">
            <book2></book2>
        </el-col>
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
      }
}
</script>
<style scoped>
    @import './Index.css';
</style>