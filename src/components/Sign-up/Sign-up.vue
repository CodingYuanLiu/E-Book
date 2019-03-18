<template>
<div align=center>
    <el-card class=border shadow="never">
    <el-container>
    <el-header>
        <div class=title>
            注册
        </div>
    </el-header>
    <el-main>
    <el-row>
        <div>
        <el-col :span="6" align=right  class=inputline> 
            用户名： 
        </el-col>

        <el-col :span="14" class=inputline>
            <el-input v-model="username" placeholder="请输入内容" 
            prefix-icon="el-icon-service"></el-input>
        </el-col>
        </div>
    </el-row>
    <el-row>
        <div>
        <el-col :span="6" align=right  class=inputline>
            密码： 
        </el-col>
        <el-col :span="14" class=inputline>
                <el-input placeholder="请输入密码" v-model="password" show-password 
                prefix-icon="el-icon-edit"></el-input>
        </el-col>
        </div>
    </el-row>
    <el-row>
        <div>
        <el-col :span="6" align=right  class=inputline>
            重复密码： 
        </el-col>
        <el-col :span="14" class=inputline>
                <el-input placeholder="请输入密码" v-model="dup_password" show-password 
                prefix-icon="el-icon-edit"></el-input>
        </el-col>
        </div>
    </el-row>
    <el-row>
        <div>
        <el-col :span="6" align=right  class=inputline>
            邮箱： 
        </el-col>
        <el-col :span="14" class=inputline>
                <el-input placeholder="请输入email" v-model="email"  
                prefix-icon="el-icon-edit"></el-input>
        </el-col>
        </div>
    </el-row>
    <el-row>
      <el-button type="primary" style="width:200px;" @click="output()">Sign-up</el-button>
    </el-row>
    </el-main>
    </el-container>
    </el-card>
</div>
</template>
<script src="./Sign-up.js"></script>
<style scoped>
    @import './Sign-up.css';
</style>
