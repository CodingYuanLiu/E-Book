<template>
<div>
    <el-table
    :data="salestatistic"
    style="width: 100%">
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

    <el-table-column label="数量" width="120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.totalnum }}</span>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script src="./Statistic.js">

</script>
