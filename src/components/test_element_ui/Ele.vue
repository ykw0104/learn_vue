<template>
  <div class="box">
    <el-table :data="tableData"
              style="width: 100%"
              class="el-t"
              :header-cell-style="hrs"
              :row-style="rs">
      <el-table-column prop="date"
                       label="日期"
                       width="180"
                       class="xxxx">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址">
      </el-table-column>
    </el-table>

    <div class="box-inner">333</div>
  </div>
</template>

<script>
export default {
  name: 'Ele',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
      ],
    }
  },
  methods: {
    rs({ row, rowIndex }) {
      return `background-color:rgba(255, 255, 255, 0.8);`
    },
    hrs({ row, rowIndex }) {
      return `background-color:rgba(255, 255, 255, 0.1)`
    },
  },
}
</script>
<style lang="scss" scoped>
.box {
  height: 1000px;
  background-color: red;

  .box-inner {
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.8);
  }
}

.el-t {
  background-color: transparent;
}

.el-table th {
  background-color: transparent;
}
</style>