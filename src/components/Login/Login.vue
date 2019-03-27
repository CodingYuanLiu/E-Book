<template>
<div align=center>
    <el-card class=border shadow="never">
    <el-container>
    <el-header>
        <div class=title>
            登陆
        </div>
    </el-header>
    <el-main>
    <el-form ref="form" status-icon :model="form" :rules="loginrule">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item align=left>
            <el-button type="primary" style="width:150px; margin-top:50px;" @click="submitForm('form')">登陆</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
    </el-form>
    </el-main>
    </el-container>
    </el-card>
</div>
</template>
<script src="./Login.js"></script>
<style scoped>
    @import './Login.css';
</style>
