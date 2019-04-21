<template>
<div>
  <div v-if="books != null">
  <el-table
    :data="books.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
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
      label="书名"
      sortable
      width="180">
      <template slot-scope="scope">
        <div v-if="isEdit[scope.$index] && authority=='ADMIN'">
          <el-input v-model="scope.row.name">
          </el-input>
        </div>
        <div v-else>{{scope.row.name}}</div>
      </template>
    </el-table-column>
    <el-table-column
      label="作者">
      <template slot-scope="scope">
        <div v-if="isEdit[scope.$index] && authority=='ADMIN'">
          <el-input v-model="scope.row.author">
          </el-input>
        </div>
        <div v-else>{{scope.row.author}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="remain"
      label="库存"
      sortable>
      <template slot-scope="scope">
        <div v-if="isEdit[scope.$index] && authority=='ADMIN'">
          
          <el-input-number v-model="scope.row.remain" :min="1" :max="100000">

          </el-input-number>
        </div>
        <div v-else>{{scope.row.remain}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="bnum"
      label="ISBN编号"
      sortable>
    </el-table-column>
    <el-table-column
      label="单价"
      sortable width="100">
      <template slot-scope="scope">
        <div v-if="isEdit[scope.$index] && authority=='ADMIN'">
          <el-input v-model="scope.row.price">
          </el-input>
        </div>
        <div v-else>{{scope.row.price}}</div>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="100" v-if="authority=='ADMIN'">
        <template slot-scope="scope">
            <el-button 
            size="mini" type="danger" v-if="!isEdit[scope.$index]"
            @click="handleEdit(scope.$index)">编辑</el-button>
            <el-button 
            size="mini" type="danger" v-else
            @click="handleEnsure(scope.$index,scope.row)">确认</el-button>

        </template>
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
</div>
</template>

<script  src="./Scanning.js">

</script>