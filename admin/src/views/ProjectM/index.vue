<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <!-- <el-table-column label="项目名称" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.pro_name }}</span>
        </template>
      </el-table-column> -->
      <el-table-column label="帖子序号" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.demander_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="帖子简介" width="250" align="center">
        <template slot-scope="scope">
          {{ scope.row.introduction }}
        </template>
      </el-table-column>
      <!--<el-table-column label="项目地址" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.rec_address }}
        </template>
      </el-table-column> -->
      <!-- <el-table-column label="需求物资" width="300" align="center">
        <template slot-scope="scope">
          {{ scope.row.materials }}
        </template>
      </el-table-column> -->
      <el-table-column class-name="status-col" label="帖子类别" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.category | typeFilter">{{ scope.row.category }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="发帖时间" width="150">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.init_time }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column align="center" prop="created_at" label="截止时间" width="150">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.end_time }}</span>
        </template>
      </el-table-column> -->
      <el-table-column class-name="status-col" label="帖子状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getProjectList} from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        讨论中: 'success',
        已封贴: 'gray',
        待审核:'warning',
        待发布: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(status) {
      const statusMap = {
        求助: 'success',
        注水: 'gray',
        警示: 'danger'
      }
      return statusMap[status]
    }
    // contentFilter(content){
    //   const 
    // }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getProjectList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
