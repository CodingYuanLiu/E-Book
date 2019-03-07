<template>
<router-link to="/details/book2" style="text-decoration: none;">
<el-card shadow="hover"  style="border-radius:20px;">
    <div class=book>
    <el-container>
        <el-aside width="160px">
            <div class=bookimage>
            <img src="@/images/mingdynasty.jpg" style="height:190px"></img>
            </div>
        </el-aside>
        <el-main>
            <div class=bookinfo>
                <div class=title align=left>明朝那些事儿</div>
                <div class=author align=left>作者：当年明月</div>
                <div class=remain align=left>库存:12 ISBN编号：001</div>
                <div class=price align=left>58￥</div>
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