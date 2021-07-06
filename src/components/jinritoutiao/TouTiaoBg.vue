<template>
  <el-container class="bg-container">

    <!-- 1. 侧边栏 开始-->
    <el-aside class="bg-aside"
              width="auto">
      <tou-tiao-bg-aside class="bg-aside-menu"
                         :is-collapse="isCollapse"></tou-tiao-bg-aside>
    </el-aside>
    <el-container class="bg-sub-container">
      <!-- 侧边栏 结束-->

      <!-- 2. 顶部栏 开始-->
      <el-header class="bg-header">
        <div class="bg-header-left">
          <i :class="{'el-icon-s-fold':isCollapse,'el-icon-s-unfold':!isCollapse}"
             @click="isCollapse = !isCollapse"></i>
          <span>掌中舞罢箫声绝, 三十六宫秋夜长</span>
        </div>

        <el-dropdown>
          <div class="bg-avator-wrap">
            <img class="bg-avator"
                 :src="user.photo"
                 alt="">
            <span>{{user.name}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
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
import { getUserProfile } from './utils/user.js'

export default {
  name: 'TouTiaoBg',
  components: {
    TouTiaoBgAside,
  },
  data() {
    return {
      user: {}, // 当前登录用户信息

      isCollapse: false, // 侧边栏的展开和折叠
    }
  },
  created() {
    // 请求用户信息
    this.loadUserProfile()
  },
  methods: {
    loadUserProfile() {
      getUserProfile().then((res) => {
        this.user = res.data.data
      })
    },
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      border-bottom: 1px solid #ccc;

      .bg-header-left {
        > i {
          position: relative;
          top: 2px;
          margin-right: 5px;
          font-size: 20px;
          cursor: pointer;
        }
      }

      .bg-avator-wrap {
        display: flex;
        align-items: center;

        > img.bg-avator {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          border-radius: 50%;
        }
      }
    }

    .bg-main {
      background: url(./images/main_bg.jpg) no-repeat center/cover;
    }
  }
}
</style>