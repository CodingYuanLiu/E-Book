<template>
    <div class=book>
    <el-container>
        <el-aside width="160px">
            <div class=bookimage>
            <router-link to="/details/book1">
            <img src="@/images/icsimage.jpg" style="height:190px"></img>
            </router-link>
            </div>
        </el-aside>
        <el-main>
            <div class=bookinfo>
                <router-link to="/details/book1">
                <div class=title align=left>深入理解计算机基础</div>
                </router-link>
                <div class=author align=left>作者：Bryant,Hallaron</div>
                <div class=price align=left>库存:10 ISBN编号:000</div>
                <div class=price align=left>128￥</div>
            </div>
        </el-main>
    </el-container>
    </div>
</template>
<style scoped>
    @import './book.css';
</style>