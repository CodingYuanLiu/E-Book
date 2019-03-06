<template>
<div>
    <el-row style="height:30px;">
        <div align=left class=stroke>中文小说推荐：</div>
    </el-row>
    <el-row class=el-row-books>
    <div class="line_split"></div>
    <div style="height:15px"></div>
        <el-col :span="8">
            <book2></book2>
        </el-col>
    </el-row>
</div>
</template>
<script>
import book2 from "@/components/Index/Books/book2.vue"
export default{
      components:{
          'book2':book2,
      }
}
</script>
<style scoped>
    @import '../Index.css';
</style>