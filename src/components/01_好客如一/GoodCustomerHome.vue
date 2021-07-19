<template>
  <div class="home-wrap">
    <!-- 1. 左侧 -->
    <div class="sub-bar">
      <a href="#">
        <img class="logo" src="./images/logo.png" alt="">
      </a>

      <div class="message">
        <p>欢迎您: D-Man</p>
        <p>空闲桌位: 5桌</p>
        <p>正在点餐: 1桌</p>
        <p>正在用餐: 5桌</p>
        <p>未选桌子</p>
      </div>

      <ul class="action">
        <li :class="{active:actionIndex === 0}" class="action-order" @click="orderClick">
          <span class="iconfont">&#xe604;</span>
          <span>已点</span>
        </li>
        <li :class="{active:actionIndex === 1}" class="action-seat" @click="seatClick">
          <span class="iconfont">&#xe6f4;</span>
          <span>座位</span>
        </li>
        <li :class="{active:actionIndex === 2}" class="action-background" @click="bgClick">
          <span class="iconfont">&#xe625;</span>
          <span>后台</span>
        </li>
        <li :class="{active:actionIndex === 3}" class="action-logout" @click="logoutClick">
          <span class="iconfont">&#xe66b;</span>
          <span>退出</span>
        </li>
      </ul>
    </div>

    <!-- 2. 顶部导航 -->
    <div class="nav-bar">
      <!-- 菜单 -->
      <ul class="nav-wrap">
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

    <!-- 3. 右侧内容 -->
    <div class="hk-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodCustomerHome',
  data() {
    return {
      actionIndex: 0, // ul.action里的四个li,点击某个高亮显示
    }
  },
  methods: {
    orderClick() {
      this.actionIndex = 0
      this.$router.push('/haoke01/hk01_home/hk01_order')
    },
    seatClick() {
      this.actionIndex = 1
      this.$router.push('/haoke01/hk01_home/hk01_seat')
    },
    bgClick() {
      this.actionIndex = 2
      this.$router.push('/haoke01/hk01_home/hk01_background')
    },
    logoutClick() {
      this.actionIndex = 3
      this.$router.push('/haoke01/hk01_home/hk01_logout')
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('./css/iconfont.css');

.home-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(./images/home_bg.png);
  background-repeat: no-repeat;
  background-size: cover;

  /* 1. 左侧 */
  .sub-bar {
    position: fixed;
    width: 250px;
    height: 100vh;

    img.logo {
      display: block;
      width: 80%;
      margin: 0 auto;
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

  /* 2. 顶部导航 */
  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    left: 250px;
    right: 0px;
    height: 80px;
    padding: 0 20px;

    ul.nav-wrap {
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

  .hk-content {
    position: fixed;
    left: 250px;
    right: 20px;
    bottom: 20px;
    top: 80px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>