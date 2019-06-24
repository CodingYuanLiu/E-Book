# e-book
[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)
> E-book project for testing or using

## Introduction
   E-book网上电子商城。利用Vue.js及ElementUI 打造。
 ## 第一次作业: 
 1. 写了主页（点击左上角E-Book图标），工科教科书、小说类两个分类（即分类的图书列表），以及图书详情页面（点击书籍可查看）。
 2. 第一次作业用了许多css文件。其中BackGround部分可套用两套css，位于src/component/BackGround文件夹下。将BackGround.vue底部的import的CSS文件修改一下即可见到不同的版型。
## 第二次作业:
1. 点击书籍列表的标题，会切换成红色。再点击一次会切换回来。
2. 在顶端的登陆界面点击按钮，会弹窗显示用户输入的用户名。
## Servlet作业：
首先启动springboot后端的服务器（在8080端口），然后npm run dev启动前端服务器（在8081端口），在scanning界面加了按钮，点击后，后端（8080端口）讲图书信息以json发回到前端（8081），在8081中显示图书信息。
图书的封面图片存在前端的静态文件夹static里面。
## ORM JDBC作业：
利用JPA来操作后端数据库。

## Build Setup

``` bash
# install element-ui
npm i element-ui

# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

```
