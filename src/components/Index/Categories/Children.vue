<template>
<div>
    <el-row>
        <div align=left class=stroke>儿童类书籍推荐：</div>
    </el-row>
    <el-row class=el-row-books>
    <div class="line_split"></div>
    <div v-for="book in this.books" v-if="book.type==5">
        <el-col :span="8">
            <book1 :info="book"></book1>
        </el-col>
    </div>
    </el-row>
</div>
</template>
<script>
    import Scanning from "@/components/Scanning/Scanning.vue"
    import book1 from "@/components/Index/Books/book1.vue"
    export default{
        mixins:[Scanning],
        components:{
            book1
        }
    }
</script>
<style scoped>
    @import '../Index.css';
</style>