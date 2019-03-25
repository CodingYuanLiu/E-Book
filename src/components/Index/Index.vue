<template>
<div>
    <el-row>
        <el-col :span="15">
        <div align=left class=stroke>今日推荐：</div>
        </el-col>
        <el-col :span="8">
        <div class=input>
              <el-input
              placeholder="查找你喜欢的图书"
              v-model="inputsearch"
              clearable
              prefix-icon="el-icon-search">
              </el-input>
        </div>
        </el-col>
    </el-row>
    <el-row class=el-row-books>
                    <div class="line_split"></div>

    <div v-for="book in sortbooks">
        <el-col :span="8">
            <div style="height:300px;">
            <book1 :info="book"></book1>
            </div>
        </el-col>
    </div>
    </el-row>
</div>
</template>
<script src='./Index.js'>

</script>
<style scoped>
    @import './Index.css';
</style>