<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column 
      type="selection"
      width = "120">
    </el-table-column>
    <el-table-column width="130" label="商品信息">
      <template slot-scope="scope">
        <img :src="scope.row.pic" style="height:100px"></img>
      </template>
    </el-table-column>
    
    <el-table-column
      width="350">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>书名: {{ scope.row.name }}</p>
          <p>作者: {{ scope.row.author }}</p>
          <p>ISBN: {{scope.row.bnum}}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column
      label="单价"
      width="250">
      <template slot-scope="scope">
        <span style="margin-left: 10px">￥{{ scope.row.price }}</span>
      </template>
    </el-table-column>

    <el-table-column label="数量" width="250">
      <template slot-scope="scope">
        <el-input-number size="mini" v-model="scope.row.num" :min=1 :step=1 ></el-input-number>
      </template>
    </el-table-column>
    <el-table-column label="金额">
      <template slot-scope="scope">
        <p>￥{{scope.row.num*scope.row.price}}</p>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="total">
    <el-row>
      <el-col :span="20">
        <p style="margin-top:0px; font-size:15px;" align=right>总价:&nbsp</p> 
      </el-col>
      <el-col :span="1">
        <p align=left style="margin-top:0px;font-size:30px;color:red">￥{{total}}</p>
      </el-col>
      <el-col :span="2" align=left> 
        <el-button type="danger" plain class="submitbut"> 提交 </el-button>
      </el-col>
    </el-row>
  </div>
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
          num: 1,
          price:128,
          select:false
        }, 
        {
          pic:require('@/images/mingdynasty.jpg'),
          name:'明朝那些事儿',
          author:'当年明月',
          bnum:'002',
          num: 1,
          price:68,
          select:false
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    computed: {
      total: function() {
          let sum=0
          for(let i=0;i< this.tableData.length ;i++) {
            sum += this.tableData[i].price * this.tableData[i].num
          }
          return sum
        }
    }
  }
</script>

<style scoped>
  @import "./Cart.css";
</style>
