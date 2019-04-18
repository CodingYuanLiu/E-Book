<template>
<div>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    :span-method="objectSpanMethod"
    ref="multipleTable">
    <el-table-column label="订单号" width="150">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.orderid }}</span>
      </template>
    </el-table-column>
    <el-table-column label="下单时间" width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
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
        <span style="margin-left: 10px">{{ scope.row.price }}</span>
      </template>
    </el-table-column>

    <el-table-column label="数量" width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.num }}</span>
      </template>
    </el-table-column>
    <el-table-column label="金额" width="100">
      <template slot-scope="scope">
        <p>{{scope.row.num*parseInt(scope.row.price)}}￥</p>
      </template>
    </el-table-column>
    <el-table-column
      align="right" width="200">
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

<script src="./Order.js">
  
</script>

<style scoped>
  @import "./Order.css";
</style>
