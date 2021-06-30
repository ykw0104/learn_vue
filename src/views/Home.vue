<template>
  <div>
    <router-link class="rl-cls"
                 to="/mi">小米</router-link>
    <router-link class="rl-cls"
                 to="/xunlei">迅雷</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style lang="scss" scoped>
@import url('../css/reset.css');

.rl-cls {
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
  color: #333;
  color: all 0.3 linear;

  &:hover {
    color: #ff6700;
  }
}
</style>