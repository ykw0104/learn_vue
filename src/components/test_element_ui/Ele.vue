<template>
  <el-switch v-model="value"
             active-color="#13ce66"
             inactive-color="#ff4949">
  </el-switch>
</template>

<script>
export default {
  name: 'Ele',
  data() {
    return {
      value: true,
    }
  },
}
</script>
<style lang="scss" scoped>
</style>