<template>
<div>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    ref="multipleTable">
    <el-table-column width="130" label="商品信息">
      <template slot-scope="scope">
        <img :src="scope.row.pic" style="height:100px"></img>
      </template>
    </el-table-column>
    
    <el-table-column
      width="270">
      <template slot-scope="scope" > 
        <el-popover trigger="hover" placement="top">
          <p>书名: {{ scope.row.name }}</p>
          <p>作者: {{ scope.row.author }}</p>
          <p>ISBN: {{scope.row.bnum}}</p>
          <div slot="reference" class="name-wrapper" >
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column
      label="单价"
      width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">￥{{ scope.row.price }}</span>
      </template>
    </el-table-column>

    <el-table-column label="数量" width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.num }}</span>
      </template>
    </el-table-column>
    <el-table-column label="金额" width="100">
      <template slot-scope="scope">
        <p>￥{{scope.row.num*scope.row.price}}</p>
      </template>
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          pic:require('@/images/icsimage.jpg'),
          name:"深入理解计算机系统",
          author:'Bryant,Hallaron',
          bnum:'000',
          num: 2,
          price:128,
        }, 
        {
          pic:require('@/images/mingdynasty.jpg'),
          name:'明朝那些事儿',
          author:'当年明月',
          bnum:'002',
          num: 1,
          price:68,
        }],
        search:''
      }
    }
    
  }
</script>

<style scoped>
  @import "./Order.css";
</style>
