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
      <el-table-column label="账号" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="投诉理由" width="250" align="center">
        <template slot-scope="scope">
          {{ scope.row.standard }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="投诉类型" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getSuppliesList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        极端激进: 'gray',
        违反法律: 'warning',
      }
      return statusMap[status]
    }
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
      getSuppliesList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
