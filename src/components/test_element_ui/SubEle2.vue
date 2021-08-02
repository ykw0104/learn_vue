<template>
  <sub-ele20 @increment="getCounter"></sub-ele20>
</template>

<script setup>
import SubEle20 from './SubEle2_0.vue'

const getCounter = (payload) => {
  console.log(payload)
}
</script>
<style lang="scss" scoped>
</style>