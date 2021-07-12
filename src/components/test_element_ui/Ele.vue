
<template>
  <el-button type="text"
             @click="clickMe">点我</el-button>

  <el-dialog title="提示"
             v-model="dialogVisible"
             width="30%">
    <span>这是一段信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary"
                   @click="confirm">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    clickMe() {
      this.dialogVisible = true
    },

    cancle() {
      console.log('取消')
      this.dialogVisible = false
    },
    confirm() {
      console.log('确认')
      this.dialogVisible = false
    },
  },
}
</script>

<style>
</style>
