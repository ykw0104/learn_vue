<template>
  <el-container class="bg-container">
    <!-- 1. 侧边栏 开始-->
    <el-aside class="bg-aside"
              width="200px">
      <tou-tiao-bg-aside class="bg-aside-menu"></tou-tiao-bg-aside>
    </el-aside>
    <el-container class="bg-sub-container">
      <!-- 侧边栏 结束-->
      <!-- 2. 顶部栏 开始-->
      <el-header class="bg-header">

      </el-header>
      <!-- 顶部栏 结束-->
      <!-- 3. 内容 开始 -->
      <el-main class="bg-main">
        <router-view />
      </el-main>
      <!-- 3. 内容 开始 -->
    </el-container>
  </el-container>

</template>

<script>
import TouTiaoBgAside from './TouTiaoBgAside.vue'

export default {
  name: 'TouTiaoBg',
  components: {
    TouTiaoBgAside,
  },
}
</script>
<style lang="scss" scoped>
.bg-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .bg-aside {
    // overflow: hidden; // Note
    min-height: 400px;

    .bg-aside-menu {
      height: 100%;
    }
  }

  .bg-sub-container {
    .bg-header {
      background-color: #b3c0d1;
    }

    .bg-main {
      background-color: #e9eef3;
    }
  }
}
</style>