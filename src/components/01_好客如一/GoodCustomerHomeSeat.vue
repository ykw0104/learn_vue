<template>
  <ul class="gchs-legend">
    <li v-for="item,index in orderStatus">
      <div :style="{backgroundColor:item.orderColor}">
        <span class="iconfont">&#xebed;</span>
      </div>
      <!-- 模拟动态显示桌数 -->
      <span>{{item.status}}: {{$store.state.hk_orderStatus.['num'+(index+1)]}}</span>
    </li>
  </ul>

  <ul class="gchs-table-legend">
    <li v-for="order,index in $store.state.hk_orderList">
      <div :style="{backgroundColor:getOrderColor($store.state.hk_orderList[index].orderStatue)}">
        <span class="iconfont">&#xebed;</span>
      </div>
      <span>{{$store.state.hk_orderList[index].id}}号桌</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GoodCustomerHomeSeat',
  data() {
    return {
      orderStatus: [
        {
          id: 1,
          status: '空闲',
          num: 0,
          orderColor: '#66a8a6',
        },
        {
          id: 2,
          status: '点餐中',
          num: 0,
          orderColor: '#f79700',
        },
        {
          id: 3,
          status: '用餐中',
          num: 0,
          orderColor: '#e5553f',
        },
      ],
    }
  },
  created() {},
  methods: {
    /* 根据1,2,3 取得相应color */
    getOrderColor(index) {
      let color = ''

      this.orderStatus.forEach((order) => {
        if (order.id === index) {
          color = order.orderColor
        }
      })

      return color
    },
  },
}
</script>
<style lang="scss" scoped>
.gchs-legend {
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;

  > li {
    display: flex;
    align-items: center;
    margin-right: 20px;

    > div {
      width: 36px;
      height: 36px;
      padding: 3px;
      margin-right: 2px;
      line-height: 30px;
      text-align: center;
      border-radius: 50%;
      background-color: red;

      > span {
        font-size: 24px;
        color: #fff;
      }
    }
  }
}

.gchs-table-legend {
  width: 90%;
  margin: 40px auto 0;

  > li {
    display: inline-block;
    margin: 0 37px 50px;
    text-align: center;
    cursor: pointer;

    > div {
      width: 80px;
      height: 80px;
      line-height: 80px;
      border-radius: 50%;
      color: #fff;

      > span {
        font-size: 60px;
      }
    }
  }
}
</style>