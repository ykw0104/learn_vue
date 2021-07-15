<template>
  <!-- 添加和修改文章共用该组件 -->
  <div class="publish-container">
    <el-card class="box-card box1">
      <template #header>
        <!-- 1.1 面包屑路径 开始-->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/toutiao/tt_bg/bg_home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{$route.query.id?'修改文章':'发布文章'}}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 1.1 面包屑路径 结束-->
      </template>

      <!-- 1.2 文章发布 开始 -->
      <el-form ref="articleForm"
               :model="article"
               :rules="articleRules"
               label-width="50px">

        <el-form-item label="标题"
                      prop="title">
          <el-input v-model="article.title"
                    style="width:500px;"></el-input>
        </el-form-item>

        <el-form-item label="内容"
                      prop="content">
          <el-input type="textarea"
                    v-model="article.content"></el-input>
        </el-form-item>

        <el-form-item label="封面">
          <el-radio-group v-model="article.cover.type">
            <el-radio :label="1">单图</el-radio>
            <el-radio :label="3">三图</el-radio>
            <el-radio :label="0">无图</el-radio>
            <el-radio :label="-1">自动</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="频道"
                      prop="channel_id">
          <el-select v-model="article.channel_id"
                     placeholder="请选择频道">
            <el-option v-for="channel in channels"
                       :label="channel.name"
                       :value="channel.id"
                       :key="channel.id"></el-option>

          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary"
                     @click="onPublish(false)">发表</el-button>
          <el-button @click="onPublish(true)">存入草稿</el-button>
        </el-form-item>
      </el-form>
      <!-- 1.2 文章发布 结束 -->
    </el-card>
  </div>
</template>

<script>
import {
  getArticleChannels,
  addArticle,
  getArticle,
  updateArticle,
} from './utils/article'

export default {
  name: 'TouTiaoBgPublish',
  data() {
    return {
      article: {
        title: '', // 文章标题
        content: '', // 文章内容
        cover: {
          type: 0, // 封面类型 -1:自动 0:无图 1:一张图 3:三张图
          images: [], // 封面图片地址
        },
        channel_id: null, //文章频道ID
      },

      channels: [], // 文章频道

      // 表单验证
      articleRules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          {
            min: 5,
            max: 30,
            message: '长度在 5 到 30 个字符',
            trigger: 'blur',
          },
        ],
        content: [
          { required: true, message: '请输入文章内容', trigger: 'blur' },
        ],
        channel_id: [{ required: true, message: '请选择文章频道' }],
      },
    }
  },
  created() {
    this.loadChannels()

    // 有Id,说明是内容管理页点击编辑按钮跳转过来的
    if (this.$route.query.id) {
      this.loadArticle() // 加载文章内容
    }
  },
  methods: {
    /* 加载文章频道 */
    loadChannels() {
      getArticleChannels().then((res) => {
        this.channels = res.data.data.channels
      })
    },

    /* 发布(添加/更新)文章 */
    onPublish(draft = false) {
      this.$refs['articleForm'].validate((valid) => {
        if (!valid) {
          return // 表单验证失败
        }

        // 提交表单
        const articleId = this.$route.query.id

        if (articleId) {
          // 更新文章
          updateArticle(articleId, this.article, draft).then((res) => {
            this.$message({
              message: `${draft ? '更新并存入草稿' : '更新并发布'}`,
              type: 'success',
            })

            this.$router.push('/toutiao/tt_bg/bg_article') // 更新完后跳转到内容管理页面
          })
        } else {
          // 添加新文章
          addArticle(this.article, draft).then((res) => {
            this.$message({
              message: `${draft ? '已存入草稿' : '已发布'}`,
              type: 'success',
            })

            this.$router.push('/toutiao/tt_bg/bg_article') // 添加完后跳转到内容管理页面
          })
        }
      })
    },

    /* 加载文章内容 */
    loadArticle() {
      getArticle(this.$route.query.id).then((res) => {
        this.article = res.data.data
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.box1 {
  background-color: rgba($color: #ffffff, $alpha: 0.3);
}
</style>