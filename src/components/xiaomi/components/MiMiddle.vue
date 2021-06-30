<template>
  <!-- 广告 开始 -->
  <div class="ad">
    <div class="wrap">
      <div class="aside">
        <ul class="aside-ul">
          <li class="aside-li-row aside-li-col">
            <a href="#">
              <i class="iconfont">&#xe610;</i>
              <p>小米秒杀</p>
            </a>
          </li>
          <li class="aside-li-row aside-li-col">
            <a href="#">
              <i class="iconfont">&#xe6c6;</i>
              <p>企业团购</p>
            </a>
          </li>
          <li class="aside-li-row">
            <a href="#">
              <i class="iconfont">&#xe6bd;</i>
              <p>F码通道</p>
            </a>
          </li>
          <li class="aside-li-col">
            <a href="#">
              <i class="iconfont">&#xe6b0;</i>
              <p>米粉卡</p>
            </a>
          </li>
          <li class="aside-li-col">
            <a href="#">
              <i class="iconfont">&#xe608;</i>
              <p>以旧换新</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont">&#xe618;</i>
              <p>话费充值</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="ad-box">
        <a href="#">
          <img src="../images/a1.jpg"
               alt="">
        </a>
      </div>
      <div class="ad-box">
        <a href="#">
          <img src="../images/a2.jpg"
               alt="">
        </a>
      </div>
      <div class="ad-box">
        <a href="#">
          <img src="../images/a3.jpg"
               alt="">
        </a>
      </div>
    </div>
  </div>
  <!-- 广告 结束 -->
</template>

<script>
export default {
  name: 'MiMiddle',
}
</script>
<style lang="scss" scoped>
@import url('../css/iconfont.css');

.ad {
  width: 100%;
  height: 170px;
  margin: 14px 0 26px;

  .wrap {
    display: flex;
    justify-content: space-between;
    width: 1226px;
    margin: 0 auto;

    .aside {
      width: 234px;
      height: 170px;
      padding: 3px;
      background-color: #5f5e50;

      ul.aside-ul {
        display: flex;
        flex-wrap: wrap;

        li {
          position: relative;
          width: 76px;
          height: 82px;
          text-align: center;

          > a {
            display: block;
            height: 100%;
            padding-top: 20px;
            color: #fff;
            opacity: 0.7;
            transition: all 0.3s;

            i {
              font-size: 24px;
            }

            p {
              font-size: 12px;
            }
          }

          &:hover > a {
            opacity: 1;
          }
        }

        li.aside-li-row::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%);
          width: 64px;
          height: 1px;

          background-color: #665e57;
        }

        li.aside-li-col::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          width: 1px;
          height: 70px;
          background-color: #665e57;
        }
      }
    }

    .ad-box {
      width: 316px;
      height: 170px;
      transition: box-shadow 0.3s linear;

      > a {
        img {
          width: 100%;
        }
      }

      &:hover {
        box-shadow: 0 15px 30px rgba($color: #000000, $alpha: 0.1);
      }
    }
  }
}
</style>