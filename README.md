# e-book

> E-book project for testing or using

## Introduction
   E-book网上电子商城。利用Vue.js及ElementUI 打造。HTML,CSS全手写。
 ## 第一次作业: 
 1. 写了主页（点击左上角E-Book图标），工科教科书、小说类两个分类（即分类的图书列表），以及图书详情页面（点击书籍可查看）。
 2. 第一次作业用了许多css文件。其中BackGround部分可套用两套css，位于src/component/BackGround文件夹下。将BackGround.vue底部的import的CSS文件修改一下即可见到不同的版型。
## 第二次作业:
1. 点击书籍列表的标题，会切换成红色。再点击一次会切换回来。
2. 在顶端的登陆界面点击按钮，会弹窗显示用户输入的用户名。
## Servlet作业：
首先启动springboot后端的服务器（在8080端口），然后npm run dev启动前端服务器（在8081端口），在scanning界面加了按钮，点击后可以从8081，讲图书信息转换为json发送跨域请求到8080，以json格式返回图书信息。解析后，用window.alert输出返回的图书信息。
## Build Setup

``` bash
# install element-ui
npm i element-ui

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```

## Log
* 还没有正确解决details问题。
* 没有解决搜索框文本内容跨组件传参的问题，暂时在index里面建立文本框，故ui非常丑陋，待完善。
* 没有解决管理员和用户的区分问题。目前所有数据写死。
* scanning界面（router地址为/scanning）为课堂demo表格，做了备用（可能书籍管理会用到）。