<template>
  <!-- router属性: index值为路由的path,可以进行跳转 -->
  <el-menu class="bg-nav-menu"
           default-active="/toutiao/tt_bg/bg_home"
           background-color="#002033"
           text-color="#fff"
           active-text-color="#ffd04b"
           :collapse="isCollapse"
           router>

    <el-menu-item index="/toutiao/tt_bg/bg_home">
      <i class="el-icon-s-home"></i>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/toutiao/tt_bg/bg_article">
      <i class="el-icon-menu"></i>
      <template #title>内容管理</template>
    </el-menu-item>
    <el-menu-item index="/toutiao/tt_bg/bg_image">
      <i class="el-icon-picture"></i>
      <template #title>素材管理</template>
    </el-menu-item>
    <el-menu-item index="/toutiao/tt_bg/bg_publish">
      <i class="el-icon-s-promotion"></i>
      <template #title>发布文章</template>
    </el-menu-item>
    <el-menu-item index="/toutiao/tt_bg/bg_comment">
      <i class="el-icon-s-comment"></i>
      <template #title>评论管理</template>
    </el-menu-item>
    <el-menu-item index="/toutiao/tt_bg/bg_fans">
      <i class="el-icon-lollipop"></i>
      <template #title>粉丝管理</template>
    </el-menu-item>
    <el-menu-item index="/toutiao/tt_bg/bg_setting">
      <i class="el-icon-s-custom"></i>
      <template #title>个人设置</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'TouTiaoBgAside',
  methods: {},
  props: ['is-collapse'],
}
</script>
<style lang="scss" scoped>
</style>