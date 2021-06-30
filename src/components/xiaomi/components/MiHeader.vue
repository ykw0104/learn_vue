<template>
  <!-- 广告图 开始 -->
  <div class="ad-img"></div>
  <!-- 广告图 结束 -->

  <!-- 导航条 开始 -->
  <div class="black-nav">
    <div class="wrap">
      <ul class="nav-left">
        <template v-for="item,index in navLeftList">
          <li :class="'navleft-li-'+index">
            <a href="#">{{item}}</a>
            <span>|</span>
            <!-- 下载APP -->
            <div class="download"
                 v-if="index === 10">
              <img src="../images/download_app.jpg"
                   alt="">
              <p>小米商城APP</p>
            </div>
            <div class="triangle"></div>
          </li>
        </template>
      </ul>

      <ul class="nav-right">
        <li><a class="nav-right-a1"
             href="#">注册</a><span>|</span></li>
        <li><a class="nav-right-a1"
             href="#">登录</a><span>|</span></li>
        <li><a class="nav-right-a2"
             href="#">消息通知</a></li>
        <!-- 购物车 -->
        <li class="nav-right-li3">
          <a class="nav-right-a3"
             href="#">
            <span class="iconfont">&#xe607;</span>
            <span>购物车</span>(0)
          </a>
          <!-- 购物车列表 -->
          <div class="cart-list">购物车中还没有商品, 赶紧选购吧 !</div>
        </li>
      </ul>
    </div>
  </div>
  <!-- 导航条 结束-->
</template>
<script>
export default {
  name: 'MiHeader',
  data() {
    return {
      navLeftList: [
        '小米商城',
        'MIUI',
        'IoT',
        '云服务',
        '天星数科',
        '有品',
        '小爱开放平台',
        '企业团购',
        '资质证照',
        '协议规则',
        '下载app',
        '智能生活',
        'Select Location',
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import url('../css/iconfont.css');
$MiOrange: #ff6700;

/* 广告图 */
.ad-img {
  width: 100%;
  min-width: 1226px;
  height: 120px;
  background: url('../images/banner.jpg') center no-repeat;
}

/* 导航条 */
.black-nav {
  width: 100%;
  min-width: 1226px;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  background-color: #333;

  .wrap {
    display: flex;
    justify-content: space-between;
    width: 1226px;
    height: 40px;
    margin: 0 auto;

    ul.nav-left {
      display: flex;

      li {
        position: relative;

        a {
          color: #b0b0b0;
        }

        span {
          margin: 0 0.3em;
          color: #323232;
        }

        &:hover {
          a {
            color: #fff;
          }
        }
      }

      li.navleft-li-10 {
        position: relative;

        /* 下载APP */
        .download {
          overflow: hidden;
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translate(-50%);
          width: 124px;
          height: 0;
          line-height: 12px;
          text-align: center;
          font-size: 12px;
          box-shadow: 0 1px 5px rgba($color: #aaa, $alpha: 1);
          background-color: #fff;
          color: #333;
          z-index: 99;
          transition: all 0.3s;

          img {
            width: 90px;
            margin: 18px 0 12px;
          }
        }

        .triangle {
          display: none;
          position: absolute;
          top: 32px;
          left: 50%;
          transform: translate(-50%);
          width: 0;
          height: 0;
          border-bottom: 8px solid #fff;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
        }

        &:hover {
          .download {
            height: 148px;
          }

          .triangle {
            display: block;
          }
        }
      }
    }

    ul.nav-right {
      display: flex;

      li {
        a {
          color: #b0b0b0;
        }

        &:hover {
          a {
            color: #fff;
          }
        }

        a.nav-right-a1 {
          padding: 0 5px;
        }

        a.nav-right-a2 {
          padding: 0 10px;
        }
      }

      /* 购物车 */
      li.nav-right-li3 {
        position: relative;
        width: 120px;
        height: 40px;
        margin-left: 15px;
        text-align: center;
        background: #424242;
        cursor: pointer;

        a.nav-right-a3 {
          span {
            margin-right: 4px;
          }
        }

        /* 购物车列表 */
        .cart-list {
          overflow: hidden; /* 隐藏购物车内的一行字 */
          position: absolute;
          top: 40px;
          right: 0px;
          width: 316px;
          height: 0; /* 设置0, 为了对height进行过渡 */
          text-align: center;
          font-size: 12px;
          background: #fff;
          box-shadow: 0 2px 10px rgba($color: #000000, $alpha: 0.15);
          cursor: auto;
          transition: height 0.3s;
          z-index: 99;
        }
      }

      /* 购物车:hover */
      li.nav-right-li3:hover {
        background: #fff;

        a.nav-right-a3 {
          color: $MiOrange;
        }

        /* 购物车列表 */
        .cart-list {
          height: 100px;
          line-height: 100px;
        }
      }
    }
  }
}
</style>