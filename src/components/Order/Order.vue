<template>
<div>
  <el-table
    :data="tableDatas"
    style="width: 100%;"
    :span-method="objectSpanMethod"
    ref="multipleTable">
    <el-table-column label="订单号" width="100">
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
      width="220">
      <template slot-scope="scope" > 
        <el-popover trigger="hover" placement="top">
          <p>书名: {{ scope.row.name }}</p>
          <p>作者: {{ scope.row.author }}</p>
          <p>ISBN: {{scope.row.isbn}}</p>
          <div slot="reference" class="name-wrapper" >
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column
      label="单价"
      width="110">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.price }}￥</span>
      </template>
    </el-table-column>

    <el-table-column label="数量" width="120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.num }}</span>
      </template>
    </el-table-column>
    <el-table-column label="金额" width="110">
      <template slot-scope="scope">
        <p>{{scope.row.num*parseInt(scope.row.price)}}￥</p>
      </template>
    </el-table-column>
    
    <el-table-column label="用户编号" width="100"  v-if="authority=='ADMIN'">
      <template slot-scope="scope">
        <p>{{scope.row.userid}}</p>
      </template>
    </el-table-column>

    <el-table-column
      align="right" width="200">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入书名搜索"/>
      </template>
    </el-table-column>
  </el-table>

  <el-row>
    <el-col :span="12">
      <el-card style="width:550px;" shadow="hover">
      <div slot="header" align=left  class="header">
        订单时间段查询：
      </div>
      <div class="timesetter" align=left>
      <el-date-picker
                v-model="timerange"
                type="datetimerange"
                value-format="yyyy-MM-dd HH:mm:ss"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
        </el-date-picker>
        <el-button @click="clear">清空</el-button>
      </div>
      </el-card>
    </el-col>


    <el-col :span="8" v-if="this.authority=='ADMIN'">
      <el-card style="width:550px;" shadow="hover">
      <div slot="header" style="height:30px;margin-top:-10px;" align=left  class="header">
        选择用户:
        <el-input style="width:50px;" v-model="selectuser">
        </el-input>
      </div>
      
      <div class="Total" align=left>
        总消费金额: {{usertotal}} ￥
      </div>
      </el-card>
    </el-col>
  </el-row>
          
  </div>
</template>

<script src="./Order.js">
  
</script>

<style scoped>
  @import "./Order.css";
</style>
