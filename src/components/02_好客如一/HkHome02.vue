<template>
  <div class="hkhome02-wrap">
    <!-- 左侧 -->
    <div class="sub-bar">
      <a class="logo-a" href="#" @click="$router.push('/haoke02/hk02_home/hk02_product')">
        <img class="logo" src="./images/logo.png" alt="">
      </a>

      <div class="message">
        <p>欢迎您: D-Man</p>
        <!-- 模拟动态显示桌数 -->
        <p>空闲桌位: {{$store.state.hk_orderStatus.num1}}桌</p>
        <p>正在点餐: {{$store.state.hk_orderStatus.num2}}桌</p>
        <p>正在用餐: {{$store.state.hk_orderStatus.num3}}桌</p>
        <!-- <p>未选桌子</p> -->
      </div>

      <ul class="action">
        <li :class="{active:actionIndex === 0}" class="action-order" @click="actionClick(0)">
          <span class="iconfont">&#xe604;</span>
          <span>已点</span>
        </li>
        <li :class="{active:actionIndex === 1}" class="action-seat" @click="actionClick(1)">
          <span class="iconfont">&#xe6f4;</span>
          <span>座位</span>
        </li>
        <li :class="{active:actionIndex === 2}" class="action-background" @click="actionClick(2)">
          <span class="iconfont">&#xe625;</span>
          <span>后台</span>
        </li>
        <li :class="{active:actionIndex === 3}" class="action-logout" @click="actionClick(3)">
          <span class="iconfont">&#xe66b;</span>
          <span>退出</span>
        </li>
      </ul>
    </div>

    <!-- 右侧 -->
    <div class="hk-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { getseatList } from './util/request'

export default {
  name: 'HkHome02',

  data() {
    return {
      actionIndex: -1, // 四个图标的索引

      seatList: [], // 座位详情
    }
  },

  created() {
    /* 模拟获取到桌位信息情况 */
    this.seatList = getseatList(13)
  },

  methods: {
    actionClick(index) {
      this.actionIndex = index // 点击后的当前索引

      const preUrl = '/haoke02/hk02_home/hk02_'
      const sufUrl = ['order', 'seat', 'bg', 'logout']
      this.$router.push(preUrl + sufUrl[index]) // 跳转到相应页面
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('./css/iconfont.css');

.hkhome02-wrap {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url('./images/hk_bg.png') no-repeat center/cover;

  /* 1. 左侧 */
  .sub-bar {
    width: 250px;
    height: 100%;

    > a.logo-a {
      display: block;

      img.logo {
        display: block;
        width: 80%;
        margin: 0 auto;
      }
    }

    .message {
      position: relative;
      width: 150px;
      line-height: 25px;
      padding: 15px 0;
      margin: 0 auto 15px;
      text-align: center;
    }
    .message::before,
    .message::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
      /* 渐变 */
      background: linear-gradient(
        90deg,
        transparent,
        rgba(0, 0, 0, 0.6),
        transparent
      );
      transform: scaleY(0.1);
    }
    .message::before {
      top: 0;
    }
    .message::after {
      bottom: 0;
    }

    ul.action {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      width: 180px;
      height: 180px;
      margin: 0 auto;

      > li {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 50%;
        line-height: 30px;
        cursor: pointer;

        span {
          font-size: 12px;
        }

        span.iconfont {
          font-size: 25px;
        }

        &.active,
        &:hover {
          color: #986c8f;
        }
      }

      > li.action-order::before {
        position: absolute;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
        content: '1';
        width: 18px;
        height: 18px;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #fff;
        background-color: #cf8399;
        border-radius: 50%;
      }

      &::before,
      &::after {
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
        content: '';
        background: linear-gradient(
          90deg,
          transparent,
          rgba(0, 0, 0, 0.6),
          transparent
        );
      }

      &::after {
        transform: rotate(90deg);
      }
    }
  }

  /* 2. 右侧 */
  .hk-content {
    flex: 1;
  }
}
</style>