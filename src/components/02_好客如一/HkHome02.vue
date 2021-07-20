<template>
  <div class="hkhome02-wrap"></div>
</template>

<script>
import { getOrderList } from './util/request'

export default {
  name: 'HkHome02',

  data() {
    return {
      orderList: [],
    }
  },

  created() {
    /* 模拟获取到桌位信息情况 */
    this.orderList = getOrderList(13)
  },

  methods: {},
}
</script>
<style lang="scss" scoped>
.hkhome02-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url('./images/hk_bg.png') no-repeat center/cover;
}
</style>