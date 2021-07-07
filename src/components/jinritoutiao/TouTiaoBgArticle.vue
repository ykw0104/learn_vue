<template>
  <div class="article-container">

    <el-card class="box-card box-card1">
      <template #header>
        <!-- 1.1 面包屑路径 开始-->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/toutiao/tt_bg/bg_home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 1.1 面包屑路径 结束-->
      </template>
      <!-- 1.2 筛选查询的表单 开始-->
      <el-form :model="contentForm"
               label-width="80px"
               size="mini">

        <el-form-item label="状态">
          <el-radio-group v-model="contentForm.status">
            <el-radio label="全部"></el-radio>
            <el-radio label="草稿"></el-radio>
            <el-radio label="待审核"></el-radio>
            <el-radio label="审核通过"></el-radio>
            <el-radio label="审核失败"></el-radio>
            <el-radio label="已删除"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="频道">
          <el-select placeholder="请选择频道"
                     v-model="contentForm.channel">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="日期">
          <el-date-picker v-model="contentForm.date1"
                          type="datetimerange"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          :default-time="defaultTime1">
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- 1.2 筛选查询的表单 结束-->
    </el-card>

    <el-card class="box-card2">
      <!-- 2.1 内容显示 开始 -->
      <el-table class="box-card2-table"
                :data="tableData"
                :row-style="getRowStyle"
                :header-cell-style="getHeaderCellStyle"
                style="width: 100%">
        <el-table-column prop="date"
                         label="日期"
                         width="180">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址">
        </el-table-column>
      </el-table>
      <!-- 2.1 内容显示 结束 -->

      <!-- 2.2 分页 开始-->
      <el-pagination :total="1000"
                     layout="prev, pager, next"
                     background>
      </el-pagination>
      <!-- 2.2 分页 结束-->
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'TouTiaoBgArticle',
  data() {
    return {
      // 表单数据
      contentForm: {
        status: '',
        channel: '',
        date1: '',
      },

      defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)],

      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
  methods: {
    getRowStyle({ row, rowIndex }) {
      return `background-color: rgba(255, 255, 255, 0.8)`
    },
    getHeaderCellStyle({ row, rowIndex }) {
      return `background-color: rgb(0, 32, 51);color:#fff;` // 设置半透明效果无效, 原因是组件设置了这个样式 .el-table th {background:#fff;}
    },
  },
}
</script>
<style lang="scss" scoped>
.box-card1 {
  background-color: rgba(255, 255, 255, 0.8); // 自定义面包屑背景色
}

.box-card2 {
  margin-top: 20px;
  background-color: transparent;
  .box-card2-table {
    background-color: transparent;
  }
}
</style>