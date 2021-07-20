<template>
  <div class="home-slot">
    <div class="home-slot-top">
      <slot name="hk_top"></slot>
    </div>
    <div class="home-slot-content">
      <slot name="hk_content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HkHomeSlot',
}
</script>
<style lang="scss" scoped>
.home-slot {
  height: 100vh;

  .home-slot-top {
    height: 80px;
  }

  .home-slot-content {
    position: fixed;
    left: 250px;
    top: 80px;
    bottom: 20px;
    right: 20px;
    padding: 15px;
    background-color: rgba($color: #ffffff, $alpha: 0.4);
  }
}
</style>