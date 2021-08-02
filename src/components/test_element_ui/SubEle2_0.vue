<template>
  <div>
    <button @click="emitEvent">发送事件</button>
  </div>
</template>

<script setup>
import { defineEmit } from 'vue'

const emit = defineEmit(['increment', 'decrement'])

const emitEvent = () => {
  emit('increment', 100000)
}
</script>
<style lang="scss" scoped>
</style>