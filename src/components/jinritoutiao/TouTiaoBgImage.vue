<template>
  <div class="image-container">
    <el-card class="box-card">
      <template #header>
        <!-- 1.1 面包屑路径 开始-->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/toutiao/tt_bg/bg_home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>素材管理</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 1.1 面包屑路径 结束-->

      </template>

      <!-- 按钮 -->
      <div class="action-head">
        <el-radio-group v-model="collect"
                        size="mini"
                        @change="onCollectChange">
          <el-radio-button :label="false">全部</el-radio-button>
          <el-radio-button :label="true">收藏</el-radio-button>
        </el-radio-group>

        <el-button type="success"
                   size="mini"
                   @click="dialogUpdateVisible = true">上传素材</el-button>
      </div>

      <!-- 素材列表 -->
      <el-row :gutter="
                           10">
        <el-col :xs="12"
                :sm="6"
                :md="6"
                :lg="4"
                v-for="image in images"
                :key="image.id">
          <el-image style="height: 100px"
                    :src="image.url"
                    fit="cover"></el-image>
        </el-col>
      </el-row>
    </el-card>

    <el-dialog class="upload-dialog"
               width="500px"
               title="上传素材"
               v-model="dialogUpdateVisible"
               :append-to-body="true">
      <!-- 
          1. 请求方法: 默认POST
          2. 请求路径: action
          3. 请求头: headers
      -->
      <el-upload class="upload-image"
                 drag
                 action="http://api-toutiao-web.itheima.net/mp/v1_0/user/images"
                 :headers="uploadHeaders"
                 name="image"
                 :show-file-list="false"
                 multiple
                 :on-success="onUploadSuccess">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
import { getImages } from './utils/image'

export default {
  name: 'TouTiaoBgImage',

  data() {
    const user = JSON.parse(window.localStorage.getItem('user')) // 从localStorage里获取user信息

    return {
      collect: false, // 默认查询全部
      images: [],

      dialogUpdateVisible: false, // 上传图片的弹出层是否可见

      uploadHeaders: { Authorization: `Bearer ${user.token}` },
    }
  },

  created() {
    this.loadImages(false) // 默认查询全部
  },

  methods: {
    /* 加载图片素材 */
    loadImages(collect = false) {
      getImages({
        collect,
      }).then((res) => {
        this.images = res.data.data.results
      })
    },

    /* 全部或收藏 */
    onCollectChange(value) {
      this.loadImages(value)
    },

    /* 上传成功 */
    onUploadSuccess() {
      this.dialogUpdateVisible = false // 关闭对话框
      this.loadImages(false) // 更新列表
    },
  },
}
</script>
<style lang="scss" scoped>
.action-head {
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.upload-image {
  width: 360px;
  margin: 0 auto;
}
</style>