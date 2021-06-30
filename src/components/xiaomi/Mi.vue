<template>
  <div>
    <!-- 头部 -->
    <mi-header></mi-header>

    <!-- 导航 -->
    <mi-nav></mi-nav>

    <!-- 录播图 -->
    <mi-swiper></mi-swiper>

    <!-- 中间部分 -->
    <mi-middle></mi-middle>
    <mi-middle2></mi-middle2>

  </div>
</template>

<script>
import MiHeader from './components/MiHeader.vue'
import MiNav from './components/MiNav.vue'
import MiSwiper from './components/MiSwiper.vue'
import MiMiddle from './components/MiMiddle.vue'
import MiMiddle2 from './components/MiMiddle2.vue'

export default {
  name: 'MiApp',
  components: {
    MiHeader,
    MiNav,
    MiSwiper,
    MiMiddle,
    MiMiddle2,
  },
}
</script>
<style lang="scss" scoped>
// @import url(./css/reset.css);
</style>
