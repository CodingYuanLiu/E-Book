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
        <div v-if="isEdit[scope.$index] && authority=='ADMIN'">
          <el-input v-model="scope.row.pic">
          </el-input>
        </div>
        <div v-else>
        <img :src="scope.row.pic" style="height:100px"></img>
        </div>
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
          
          <el-input-number v-model="scope.row.remain" :min="1" :max="100000" size="small">

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
      sortable width="120">
      <template slot-scope="scope">
        <div v-if="isEdit[scope.$index] && authority=='ADMIN'">
          <el-input v-model="scope.row.price">
          </el-input>
        </div>
        <div v-else>{{scope.row.price}}</div>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="300" v-if="authority=='ADMIN'">
        <template slot-scope="scope">
          <div v-if="authority=='ADMIN'&&isEdit[scope.$index]">
            <el-row>
              <el-col :span="4" style="margin-top:10px;">
                种类：
              </el-col>
              <el-col :span="4">
                <el-input v-model="scope.row.type" placeholder="种类"></el-input>
              </el-col>
              <el-col :span="4" style="margin-top:10px;">
                简介：
              </el-col>
              <el-col :span="8">  
                <el-input v-model="scope.row.router" placeholder="简介"></el-input>
              </el-col>
              <el-col :span="4" style="margin-top:5px;">
              <el-button 
                size="mini" type="danger"
                @click="handleEnsure(scope.$index,scope.row)">确认</el-button>
              </el-col>
            </el-row>
          
          </div>
            <el-button 
            size="mini" type="danger" v-if="!isEdit[scope.$index]"
            @click="handleEdit(scope.$index)">编辑</el-button>
            

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
  <div v-if="authority=='ADMIN'" align=left style="height:30px;line-height:30px;margin-top:10px;">
      <el-button type="warning" @click="Addbook">添加图书</el-button>
    </div>
</div>
</template>

<script  src="./Scanning.js">

</script>