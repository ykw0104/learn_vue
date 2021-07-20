<template>
  <div class="hk-product">
    <hk-home-slot>
      <template #hk_top>
        <div class="nav-bar-product">
          <!-- 菜单 -->
          <ul class="nav-wrap-product">
            <li class="active">
              <span class="iconfont">&#xe6ad;</span>
              <span class="content">推荐</span>
            </li>
            <li>
              <span class="iconfont">&#xebdc;</span>
              <span class="content">热菜</span>
            </li>
            <li>
              <span class="iconfont">&#xe613;</span>
              <span class="content">凉菜</span>
            </li>
            <li>
              <span class="iconfont">&#xe69e;</span>
              <span class="content">主食</span>
            </li>
            <li>
              <span class="iconfont">&#xe60d;</span>
              <span class="content">甜品</span>
            </li>
          </ul>

          <!-- 搜索框 -->
          <div class="nav-search">
            <input type="text">
            <button>
              <span class="iconfont">&#xe62b;</span>
            </button>
          </div>
        </div>
      </template>
      <template #hk_content>
        <ul class="foodlist">
          <li v-for="pro in productList">
            <img :src="pro.imgUrl" alt="">
            <span class="iconfont recommend">&#xe716;</span>
            <div class="bar">
              <h3>慕斯蛋糕</h3>
              <p>
                <span class="rmb">RMB</span>
                <span class="price">120/份</span>
                <span class="iconfont add">&#xe68a;</span>
              </p>
            </div>
          </li>
        </ul>
      </template>
    </hk-home-slot>
  </div>
</template>

<script>
import { getProductList } from '../util/request'

import HkHomeSlot from './HkHomeSlot.vue'

export default {
  name: 'HkHomeProduct',

  components: {
    HkHomeSlot,
  },

  data() {
    return {
      productList: [], // 菜品详情
    }
  },

  created() {
    /* 模拟获取菜品详情 */
    this.productList = getProductList()
  },
}
</script>
<style lang="scss" scoped>
.nav-bar-product {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  left: 250px;
  right: 0px;
  height: 80px;
  padding: 0 20px;

  ul.nav-wrap-product {
    display: flex;

    > li {
      margin-right: 20px;
      font-size: 16px;
      cursor: pointer;

      span.iconfont {
        margin-right: 3px;
        font-size: 24px;
      }
    }

    > li.active,
    > li:hover {
      color: #986c8f;
    }
  }

  .nav-search {
    display: flex;
    width: 200px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 50px;

    > input {
      background: none;
      border: none;
      width: 170px;
      padding-left: 10px;
    }

    > button {
      width: 30px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
}

ul.foodlist {
  font-size: 0; // 解决inline-block之间的缝隙

  > li {
    display: inline-block;
    position: relative;
    margin: 10px;

    > img {
      width: 200px;
      height: 200px;
      cursor: pointer;
    }

    .recommend {
      position: absolute;
      left: 0;
      top: -2px;
      font-size: 40px;
      color: red;
    }

    .bar {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 40px;
      padding: 0 5px;
      line-height: 40px;

      font-size: 12px;
      color: #fff;
      background-color: rgba($color: #000000, $alpha: 0.6);

      > p {
        display: flex;
        align-items: center;

        .price {
          margin: 0 5px;
          color: #da97ab;
        }

        .add {
          font-size: 24px;
          text-align: center;
          color: #da97ab;
          cursor: pointer;
        }
      }
    }
  }
}
</style>