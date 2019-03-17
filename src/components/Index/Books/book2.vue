<template>
<el-card shadow="hover"  style="border-radius:20px;">
    <div class=book>
    <el-container>
        <el-aside width="160px" style="overflow:hidden;">
            <router-link to="/details/book2" style="text-decoration: none;">
            <div class=bookimage>
            <img src="@/images/mingdynasty.jpg" style="height:190px"></img>
            </div>
            </router-link>
        </el-aside>
        <el-main style="overflow:hidden;">
            <div class=bookinfo>
                <div :class="{'title': display,'title1':!display}" align=left @click="changecolor()">明朝那些事儿</div>
                <div class=author align=left>作者：当年明月</div>
                <div class=remain align=left>库存:12 ISBN编号：001</div>
                <div class=price align=left>58￥</div>
            </div>
        </el-main>
    </el-container>
    </div>
</el-card>
</template>
<style scoped>
    @import './book.css';
</style>

<script>
export default {
	name: 'mytest',
	data() {
		return {
            display: true
        }
	},
	mounted() {},
	computed: {},
	methods: {
       changecolor: function(){
            this.display=!this.display;
        }
    }
}
</script>
