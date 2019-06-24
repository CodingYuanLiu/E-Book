<template>
<router-link :to="{path:'/details',query:{name:encodeURIComponent(JSON.stringify(info))}}" style="text-decoration: none">
<el-card shadow="hover" style="border-radius:20px;">
    <div class=book>
    <el-container>
        <el-aside width="160px" style="overflow:hidden;">
            <div class=bookimage>
            <img :src="info.pic" style="height:190px"></img>
            </div>
        </el-aside>
        <el-main style="overflow:hidden;">
            <div class=bookinfo>
                <div class=title align=left>{{info.name}}</div>
                <div class=author align=left>作者: {{info.author}}</div>
                <div class=remain align=left>库存: {{info.remain}}</div>
                <div class=remain align=left> ISBN编号: {{info.isbn}}</div>
                <div class=price align=left>￥{{info.price}}</div>
            </div>
        </el-main>
    </el-container>
    </div>
</el-card>
</router-link>
</template>
<style scoped>
    @import './book.css';
</style>
<script src='./book.js'>
</script>