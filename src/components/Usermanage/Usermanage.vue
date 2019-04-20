<template>
    <div>
        <el-table
        :data="userinfo"
        style="width:100%">
        <el-table-column
        label="ID">
            <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.userid }}</span>
            </template>
        </el-table-column>
        <el-table-column
        label="用户名">
            <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.username }}</span>
            </template>
        </el-table-column>
        <el-table-column
        label="用户权限">
            <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.authority }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button v-if="scope.row.authority=='USER'"
                size="mini"
                @click="handleBlock(scope.$index, scope.row)">禁用
            </el-button>
            <el-button v-if="scope.row.authority=='BLOCKED'"
                size="mini"
                @click="handleunBlock(scope.$index, scope.row)">解禁
            </el-button>
        </template>
        </el-table-column>
        </el-table>
    </div>
</template>
<script src="./Usermanage.js">

</script>

