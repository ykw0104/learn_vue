<template>
  <div class="hk-order">
    <hk-home-slot>
      <template #hk_top>
        <ul class="order-nav-bar">
          <li :class="{active:orderIndex === 0}" @click="orderClick(0)">
            <span class="iconfont">&#xe691;</span>
            <span class="text">已点</span>
          </li>

          <li :class="{active:orderIndex === 1}" @click="orderClick(1)">
            <span class="iconfont">&#xe648;</span>
            <span class="text">已下单</span>
          </li>
        </ul>
      </template>
      <template #hk_content>
        <ul class="hk-order-content">
          <li>
            <table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <img src="../images/product/food1_1.jpg" alt="">
                  </td>
                  <td>惠山烤鸡</td>
                  <td>
                    <button>
                      <span class="iconfont">&#xeb41;</span>
                    </button>
                    <span>1</span>
                    <button>
                      <span class="iconfont">&#xe60c;</span>
                    </button>
                  </td>
                  <td> ¥ 10 × 1 </td>
                  <td>备注</td>
                  <td>
                    <button class="select">
                      <span class="iconfont">&#xe6bd;</span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <img src="../images/product/food1_1.jpg" alt="">
                  </td>
                  <td>惠山烤鸡</td>
                  <td>
                    <button>
                      <span class="iconfont">&#xeb41;</span>
                    </button>
                    <span>1</span>
                    <button>
                      <span class="iconfont">&#xe60c;</span>
                    </button>
                  </td>
                  <td> ¥ 10 × 1 </td>
                  <td>
                    <div>多发辣辣辣辣辣辣辣辣</div>
                  </td>
                  <td>
                    <button class="select">
                      <span class="iconfont">&#xe6bd;</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="foot">
              <div>
                <span>桌号: <strong>10</strong>号桌</span>
                <span>人数: 1</span>
                <span>订单号:0000000000000001</span>
                <button class="addDished">添菜</button>
              </div>
              <div>
                <span>总消费: ¥<strong>98</strong></span>
                <button class="pay">下单</button>
              </div>
            </div>
          </li>
        </ul>
      </template>
    </hk-home-slot>
  </div>
</template>

<script>
import HkHomeSlot from './HkHomeSlot.vue'

export default {
  name: 'HkHomeOrder',
  components: {
    HkHomeSlot,
  },

  data() {
    return {
      orderIndex: 0,
    }
  },

  methods: {
    /* 点击已点或已下单按钮触发 */
    orderClick(index) {
      this.orderIndex = index
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('../css/iconfont.css');

ul.order-nav-bar {
  display: flex;
  height: 100%;
  align-items: center;
  > li {
    margin: 0 10px;
    font-size: 17px;
    cursor: pointer;

    span {
      display: inline-block;
      margin-right: 3px;
    }

    &.active {
      color: #986c8f;
    }

    &:nth-child(1) {
      span.iconfont {
        position: relative;
        top: 2px;
        font-size: 22px;
      }
    }

    &:nth-child(2) {
      span.iconfont {
        position: relative;
        top: 1px;
        font-size: 20px;
      }
    }
  }
}

ul.hk-order-content {
  width: 95%;
  margin: 0 auto;

  > li {
    box-shadow: 0 3px 3px rgba($color: #000000, $alpha: 0.2);
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 15px;

    table {
      width: 100%;

      tr {
        border-bottom: 1px solid rgba($color: #000, $alpha: 0.2);

        td {
          padding: 10px 0;
          text-align: center;

          &:nth-child(1) {
            width: 5%;
          }

          &:nth-child(6) {
            color: red;
            width: 50px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }

      button {
        margin: 0 3px;
        border: none;
        background-color: transparent;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  img {
    width: 80px;
    height: 80px;
  }
}
</style>