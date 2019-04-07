<template>
<div>
  <div v-if="returnbooks != null">
  <el-table
    :data="returnbooks.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      label="封面"
      width="180">
      <template slot-scope="scope">
        <img :src="scope.row.pic" style="height:100px"></img>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="书名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者">
    </el-table-column>
    <el-table-column
      prop="remain"
      label="库存"
      sortable>
    </el-table-column>
    <el-table-column
      prop="bnum"
      label="ISBN编号"
      sortable>
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价"
      sortable width="100">
    </el-table-column>
    <el-table-column>
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
    </el-table-column>
  </el-table>
  </div>
  <el-button type="danger" @click="SubmitRequest()">SubmitRequest</el-button>
</div>
</template>

<script  src="./Scanning.js">

</script>