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
      <el-form v-loading="loading"
               label-width="40px"
               size="mini">

        <el-form-item label="状态">
          <el-radio-group v-model="status">
            <el-radio :label="null">全部</el-radio>
            <el-radio label="0">草稿</el-radio>
            <el-radio label="1">待审核</el-radio>
            <el-radio label="2">审核通过</el-radio>
            <el-radio label="3">审核失败</el-radio>
            <el-radio label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="频道">
          <el-select v-model="channelId"
                     placeholder="请选择频道">
            <el-option label="全部"
                       value="all"></el-option>
            <el-option v-for="channel in channels"
                       :label="channel.name"
                       :value="channel.id"
                       :key="channel.id"></el-option>

          </el-select>
        </el-form-item>

        <el-form-item label="日期">
          <el-date-picker v-model="rangeDate"
                          type="datetimerange"
                          start-placeholder="开始日期"
                          end-placeholder="截止日期"
                          format="YYYY-MM-DD"
                          value-format="YYYY-MM-DD"
                          :default-time="defaultTime1"
                          size="mini">
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary"
                     :disabled="loading"
                     @click="loadArticles(1)">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- 1.2 筛选查询的表单 结束-->
    </el-card>

    <el-card class="box-card2">
      <template #header>
        根据筛选条件共查到 {{totalCount}} 条数据
      </template>
      <!-- 2.1 内容显示 开始 -->
      <el-table class="list-table"
                :data="articles"
                :row-style="getRowStyle"
                :header-cell-style="getHeaderCellStyle"
                v-loading="loading"
                style="width: 100%"
                size="mini">
        <el-table-column prop="cover"
                         label="封面">
          <template #default="scope">
            <el-image :src="scope.row.cover.images[0]"
                      style="width: 60px; height: 60px;"
                      fit="cover"
                      lazy>
              <template #placeholder>
                <div class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </template>
            </el-image>
            <!-- <img v-if="scope.row.cover.images[0]"
                 class="article-cover"
                 :src="scope.row.cover.images[0]"
                 alt="">
            <img v-else
                 class="article-cover"
                 src="./images/no_pic.webp"
                 alt=""> -->
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
                       icon="el-icon-delete"
                       @click="onDeleteArticle(scope.row.id)" />

          </template>
        </el-table-column>
      </el-table>
      <!-- 2.1 内容显示 结束 -->

      <!-- 2.2 分页 开始-->
      <el-pagination class="content-pagination"
                     :total="totalCount"
                     :page-size="pageSize"
                     @current-change="onCurrentChange"
                     :disabled="loading"
                     layout="prev, pager, next"
                     background />
      <!-- 2.2 分页 结束-->
    </el-card>

  </div>
</template>

<script>
import {
  getArticles,
  getArticleChannels,
  deleteArticle,
} from './utils/article.js'

export default {
  name: 'TouTiaoBgArticle',
  data() {
    return {
      defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)],

      /* 分页相关 */
      articles: [], // 文章数据列表
      totalCount: 0, //总页数
      pageSize: 20, // 每页显示多少
      status: null, // 状态: 全部, 草稿, 待审核, 审核通过, 审核失败, 已删除
      channels: {}, // 频道
      channelId: null, //频道Id
      rangeDate: [], // [开始日期, 截止日期]

      loading: true, // 表格显示加载
    }
  },
  created() {
    this.loadChannels()
    this.loadArticles(1)
  },
  methods: {
    /* 数据请求相关 开始*/
    // 1. 获取某页的文章数据 -- 分页请求
    loadArticles(page = 1) {
      this.loading = true // 开启加载显示

      getArticles({
        page, // 当前页
        per_page: this.pageSize, // 每页显示多少
        status: this.status, // 状态: 全部, 草稿, 待审核, 审核通过, 审核失败, 已删除
        channel_id: this.channelId === 'all' ? null : this.channelId, // 频道Id
        begin_pubdate: this.rangeDate ? this.rangeDate[0] : null, // 开始日期
        end_pubdate: this.rangeDate ? this.rangeDate[1] : null, // 截止日期
      }).then((res) => {
        const { results, total_count } = res.data.data
        this.articles = results // 文章数据
        this.totalCount = total_count // 文章总条数

        this.loading = false // 关闭加载
      })
    },

    // 2. 获取频道
    loadChannels() {
      getArticleChannels().then((res) => {
        this.channels = res.data.data.channels
      })
    },

    // 3. 删除文章
    onDeleteArticle(articleId) {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          deleteArticle(articleId)
            .then((res) => {
              console.log(res)
            })
            .catch((err) => {
              console.log(err)
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
    /* 数据请求相关 结束*/

    /* 分页相关事件 开始*/
    onCurrentChange(page) {
      this.loadArticles(page) // page:当前页
    },
    /* 分页相关事件 结束 */

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