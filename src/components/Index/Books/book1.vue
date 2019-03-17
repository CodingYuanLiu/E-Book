<template>
<el-card shadow="hover" style="border-radius:20px;">
    <div class=book>
    <el-container>
        <el-aside width="160px" style="overflow:hidden;">
            <router-link to="/details/book1" style="text-decoration: none">
            <div class=bookimage>
            <img src="@/images/icsimage.jpg" style="height:180px"></img>
            </div>
            </router-link>
        </el-aside>
        <el-main style="overflow:hidden;">
            <div class=bookinfo >
                <div :class="{'title': display,'title1':!display}" align=left @click="changecolor()">深入理解计算机基础</div>
                <div class=author align=left>作者：Bryant,Hallaron</div>
                <div class=remain align=left>库存:10 ISBN编号:000</div>
                <div class=price align=left>128￥</div>
            </div>
        </el-main>
    </el-container>
    </div>
</el-card>
</template>
<style scoped>
    @import './book.css';
</style>
<script src='./book.js'>
</script>