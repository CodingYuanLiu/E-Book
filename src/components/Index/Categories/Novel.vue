<template>
<div>
    <el-row>
        <div align=left class=stroke>中文小说推荐：</div>
    </el-row>
    <el-row class=el-row-books>
    <div class="line_split"></div>
    <div style="height:15px"></div>
    <div v-for="book in books" v-if="book.type==3">
        <el-col :span="8">
            <book1 :info="book"></book1>
        </el-col>
    </div>
    </el-row>
</div>
</template>
<script>
import book1 from "@/components/Index/Books/book1.vue"
import books from "@/config/book-info.js"
export default{
      components:{
          'book1':book1,
      },
      data() {
          return {
              books
          }
      }
}
</script>
<style scoped>
    @import '../Index.css';
</style>