<template>
  <div class="article-container">

    <el-card class="filter-card">
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
               label-width="40px"
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
      <template #header>
        根据筛选条件共查到 xxxx 条数据
      </template>
      <!-- 2.1 内容显示 开始 -->
      <el-table class="list-table"
                :data="articles"
                :row-style="getRowStyle"
                :header-cell-style="getHeaderCellStyle"
                style="width: 100%"
                size="mini">
        <el-table-column prop="cover"
                         label="封面">
          <template #default="scope">
            <img v-if="scope.row.cover.images[0]"
                 class="article-cover"
                 :src="scope.row.cover.images[0]"
                 alt="">
            <img v-else
                 class="article-cover"
                 src="./images/no_pic.webp"
                 alt="">
          </template>
        </el-table-column>
        <el-table-column prop="title"
                         label="标题">
        </el-table-column>
        <el-table-column label="状态">
          <template #default="scope">
            <el-tag v-if="scope.row.status === 0"
                    type="info">草稿</el-tag>
            <el-tag v-else-if="scope.row.status === 1"
                    type="primary">待审核</el-tag>
            <el-tag v-else-if="scope.row.status === 2"
                    type="success">审核通过</el-tag>
            <el-tag v-else-if="scope.row.status === 3"
                    type="warning">审核失败</el-tag>
            <el-tag v-else-if="scope.row.status === 4"
                    type="danger">已删除</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="pubdate"
                         label="发布时间">
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="mini"
                       type="primary"
                       circle
                       icon="el-icon-edit" />
            <el-button size="mini"
                       type="danger"
                       circle
                       icon="el-icon-delete" />
          </template>
        </el-table-column>
      </el-table>
      <!-- 2.1 内容显示 结束 -->

      <!-- 2.2 分页 开始-->
      <el-pagination class="content-pagination"
                     :total="1000"
                     layout="prev, pager, next"
                     background>
      </el-pagination>
      <!-- 2.2 分页 结束-->
    </el-card>

  </div>
</template>

<script>
import { getArticles } from './utils/article.js'

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

      articles: [], // 文章数据列表
    }
  },
  created() {
    this.loadArticles()
  },
  methods: {
    /* 请求文章 */
    loadArticles() {
      getArticles({
        page: 1,
        per_page: 30,
      }).then((res) => {
        this.articles = res.data.data.results
      })
    },

    /* 设置表格背景 */
    getRowStyle({ row, rowIndex }) {
      return `background-color: transparent;`
      // return `background-color: rgba(255, 255, 255, 0.8)`
    },
    getHeaderCellStyle({ row, rowIndex }) {
      return `background-color: rgb(0, 32, 51);color:#fff;` // 设置半透明效果无效, 原因是组件设置了这个样式 .el-table th {background:#fff;}
    },
  },
}
</script>
<style lang="scss" scoped>
$bgColor: transparent; // 设置背景透明

.filter-card {
  background-color: $bgColor;
}

.box-card2 {
  margin-top: 20px;
  background-color: $bgColor;

  // 封面大小
  .article-cover {
    width: 60px;
    background-size: cover;
  }

  .list-table {
    background-color: $bgColor;
  }
}

.content-pagination {
  margin-top: 10px;
}
</style>