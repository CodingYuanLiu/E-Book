<template>
    <div class=book>
    <el-container>
        <el-aside width="160px">
            <div class=bookimage>
            <router-link to="/details/book2">
            <img src="@/images/mingdynasty.jpg" style="height:190px"></img>
            </router-link>
            </div>
        </el-aside>
        <el-main>
            <div class=bookinfo>
                <router-link to="/details/book2">
                <div class=title align=left>明朝那些事儿</div>
                </router-link>
                <div class=author align=left>作者：当年明月</div>
                <div class=price align=left>库存:12 ISBN编号：001</div>
                <div class=price align=left>58￥</div>
            </div>
        </el-main>
    </el-container>
    </div>
</template>
<style scoped>
    @import './book.css';
</style>