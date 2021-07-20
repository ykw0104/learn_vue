import { createStore } from 'vuex'

export default createStore({
  state: {
    /* 好客如一 开始 */
    hk_orderNum: 13, // 模拟一共多少桌
    hk_orderList: [],// 每桌状态,{id: 1, orderStatue: 1}
    hk_orderStatus: { num1: 0, num2: 0, num3: 0 }, //  状态总计
    /* 好客如一 结束 */


  },
  mutations: {
    hk_getOrderList(state, payload) {
      state.hk_orderList = payload.orderList // GoodCustomerHome初始化是取得

      /* 清空之前的数据 */
      state.hk_orderStatus.num1 = 0
      state.hk_orderStatus.num2 = 0
      state.hk_orderStatus.num3 = 0
      state.hk_orderList.forEach(order => {
        if (order.orderStatue === 1) {
          state.hk_orderStatus.num1++
        }
        else if (order.orderStatue === 2) {
          state.hk_orderStatus.num2++
        }
        else if (order.orderStatue === 3) {
          state.hk_orderStatus.num3++
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
