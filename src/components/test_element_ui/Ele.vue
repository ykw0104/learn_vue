<template>
  <div>
    <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
    </div>

    <transition enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__flipInY">
      <h2 class="title"
          v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Ele',

  data() {
    return {
      isShow: true,
    }
  },
}
</script>
<style lang="scss" scoped>
.animate__flipInY {
  animation-direction: reverse;
}

.title {
  display: inline-block;
}

// .why-enter-active {
//   animation: bounceInUp 1s ease-in;
// }

// .why-leave-active {
//   animation: bounceInUp 1s ease-in reverse;
// }
</style>