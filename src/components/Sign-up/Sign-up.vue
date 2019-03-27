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
    <el-form ref="form" :model="form" :rules="signuprule"  status-icon>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="dup_password">
            <el-input type="password" v-model="form.dup_password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item align=left>
            <el-button type="primary" style="width:200px; margin-top:50px;" @click="submitForm('form')">注册</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
    </el-form>
    </el-main>
    </el-container>
    </el-card>
</div>
</template>
<script src="./Sign-up.js"></script>
<style scoped>
    @import './Sign-up.css';
</style>
