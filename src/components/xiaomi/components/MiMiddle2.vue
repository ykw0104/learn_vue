<template>
  <div class="pro-middle2">
    <div class="wrap">
      <!-- 小米秒杀 开始-->
      <div class="flash">
        <h2 class="title">小米秒杀</h2>

        <!-- 秒杀左右侧显示 -->
        <div class="flash-box">
          <!-- 左侧 -->
          <div class="flash-left">
            <p class="flash-left-p1">22:00 场</p>
            <i class="iconfont">&#xe61c;</i>
            <p class="flash-left-p2">距离结束还有</p>
            <div class="countdown">
              <span>{{remainTime.day}}</span>
              <i>天</i>
              <span>{{remainTime.hours}}</span>
              <i>时</i>
              <span>{{remainTime.minutes}}</span>
              <i>分</i>
              <span>{{remainTime.seconds}}</span>
              <i>秒</i>
            </div>

          </div>

          <!-- 右侧 -->
          <div class="swiper-btn">
            <button class="prev-btn iconfont"
                    :class="{'swiper-btn-disabled':isBeginning}">&#xe71b;</button>
            <button class="next-btn iconfont"
                    :class="{'swiper-btn-disabled':isEnd}">&#xe71a;</button>
          </div>
          <swiper :navigation="{prevEl:'.prev-btn',nextEl:'.next-btn',}"
                  :slides-per-view="4"
                  :slides-per-group="4"
                  :space-between="14"
                  :speed="1000"
                  @slideChange="slideChange"
                  class="flash-right">
            <!-- slide 循环 -->
            <swiper-slide class="flash-right-slide"
                          v-for="item,index in slideImgs"
                          :style="{'border-top':'1px solid '+borderTopColor(index)}">
              <img :src="item"
                   alt="">
              <p class="slide-desc1">小爱老师 4G版 白色</p>
              <p class="slide-desc2">英语提分利器</p>
              <p class="slide-desc3">
                <span class="slide-desc3-price1">799元</span>
                <span>&nbsp;</span>
                <span class="slide-desc3-price2">999元</span>
              </p>
            </swiper-slide>
          </swiper>

        </div>

        <!-- 广告图 -->
        <div class="ad-img">
          <a href="#">
            <img src="../images/ad1.jpg"
                 alt="">
          </a>
        </div>
      </div>
      <!-- 小米秒杀 结束-->

      <!-- 手机 开始-->
      <div class="phone">
        <div class="phone-head">
          <h2 class="title">手机</h2>
          <a class="more"
             href="#">查看更多<i class="iconfont">&#xe770;</i>
          </a>
        </div>

        <div class="phone-box">
          <div class="phone-box-left">
            <a href="#">
              <img src="../images/sb_1.jpg"
                   alt="">
            </a>
          </div>
          <div class="phone-box-right">
            <div class="phone-box-slide"
                 v-for="n in 8">
              <img src="../images/sb_2.jpg"
                   alt="">
              <p class="slide-desc1">小爱老师 4G版 白色</p>
              <p class="slide-desc2">英语提分利器</p>
              <p class="slide-desc3">
                <span class="slide-desc3-price1">799元</span>
                <span>&nbsp;</span>
                <span class="slide-desc3-price2">999元</span>
              </p>
            </div>
          </div>
        </div>

      </div>
      <!-- 手机 结束 -->

      <!-- 家电 开始 -->
      <div class="appliance">

        <div class="app-head">
          <h2 class="title">家电</h2>
          <div class="app-link">
            <a :class="{active: appSlideImgsIndex === 0}"
               href="#"
               @mouseover="linkHover(0)">热门</a>
            <a :class="{active: appSlideImgsIndex === 1}"
               href="#"
               @mouseover="linkHover(1)">电视影音</a>
          </div>
        </div>

        <div class="app-bottom">
          <div class="app-left">
            <div class="app-left-item1 slide-ele">
              <a href="#">
                <img src="../images/i1.jpeg"
                     alt="">
              </a>
            </div>
            <div class="app-left-item2 slide-ele">
              <a href="#">
                <img src="../images/i2.jpg"
                     alt="">
              </a>
            </div>
          </div>

          <ul class="app-right">
            <li class="slide-ele"
                v-for="item in appSlideImgs[appSlideImgsIndex].imgs">
              <img :src="item"
                   alt="">
              <p class="desc1">小米全面屏电视 65寸</p>
              <p class="desc2">全面屏设计</p>
              <p class="desc3">
                <span>2999元</span>
                <span>3299元</span>
              </p>
            </li>
            <li class="slide-ele">
              <div class="desc">
                <p class="desc1">小米米家空气净化器2S</p>
                <p class="desc2">699元</p>
              </div>
              <img :src="appSlideImgs[appSlideImgsIndex].lastImg"
                   alt="">
            </li>
          </ul>

          <div class="more slide-ele">
            <div class="more-desc">
              <a href="#">游览更多</a>
              <a v-if="appSlideImgsIndex===0"
                 href="#">热门</a>
              <a v-else
                 href="#">电视音响</a>
            </div>
            <div class="more-icon">
              <a class="iconfont"
                 href="#">
                &#xe61a;
              </a>
            </div>
          </div>
        </div>

      </div>
      <!-- 家电 结束 -->

      <!-- 视频 开始 -->
      <div class="video">
        <div class="video-head">
          <h2 class="title">视频</h2>
          <a class="more"
             href="#">查看更多<i class="iconfont">&#xe770;</i>
          </a>
        </div>

        <div class="video-box">
          <div class="video-box-item">
            <a href="#">
              <div class="btn-box">
                <img src="../images/v1.jpg"
                     alt="">
                <div class="btn">
                  <i class="iconfont">&#xe620;</i>
                </div>
              </div>
              <p>小米5G新品手机发布会</p>
            </a>

          </div>
          <div class="video-box-item">
            <a href="#">
              <div class="btn-box">
                <img src="../images/v3.jpg"
                     alt="">
                <div class="btn">
                  <i class="iconfont">&#xe620;</i>
                </div>
              </div>
              <p>小米5G新品手机发布会</p>
            </a>

          </div>
          <div class="video-box-item">
            <a href="#">
              <div class="btn-box">
                <img src="../images/v3.jpg"
                     alt="">
                <div class="btn">
                  <i class="iconfont">&#xe620;</i>
                </div>
              </div>
              <p>小米5G新品手机发布会</p>
            </a>

          </div>
          <div class="video-box-item">
            <a href="#">
              <div class="btn-box">
                <img src="../images/v4.jpg"
                     alt="">
                <div class="btn">
                  <i class="iconfont">&#xe620;</i>
                </div>
              </div>
              <p>小米5G新品手机发布会</p>
            </a>

          </div>
        </div>
      </div>
      <!-- 视频 结束 -->
    </div>
  </div>
</template>

<script>
/* swiper引入 开始 */
import SwiperCore, { Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

SwiperCore.use([Navigation])
/* swiper引入 结束 */

import moment from 'moment'

export default {
  name: 'MiMiddle2',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isBeginning: true,
      isEnd: false,
      slideImgs: [
        require('../images/s1.webp'),
        require('../images/s2.webp'),
        require('../images/s3.webp'),
        require('../images/s4.webp'),
        require('../images/s5.webp'),
        require('../images/s6.webp'),
        require('../images/s7.webp'),
        require('../images/s8.webp'),
        require('../images/s9.webp'),
        require('../images/s10.png'),
      ],

      // 秒杀时间设置
      futureTime: new Date('2022-09-30 12:00:00'),
      remainTime: {
        day: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },

      // 热门图片
      appSlideImgs: [
        {
          type: 0,
          imgs: [
            require('../images/j1.jpg'),
            require('../images/j2.jpg'),
            require('../images/j3.jpg'),
            require('../images/j4.jpg'),
            require('../images/j5.jpg'),
            require('../images/j6.jpg'),
            require('../images/j7.jpg'),
          ],
          lastImg: require('../images/j8.jpg'),
        },
        {
          type: 1,
          imgs: [
            require('../images/k1.jpg'),
            require('../images/k2.jpg'),
            require('../images/k3.jpg'),
            require('../images/k4.jpg'),
            require('../images/k5.jpg'),
            require('../images/k6.jpg'),
            require('../images/k7.jpg'),
          ],
          lastImg: require('../images/k8.jpg'),
        },
      ],
      appSlideImgsIndex: 0,
    }
  },
  mounted() {
    // 循环计算秒杀倒计时
    setInterval(() => {
      this.getRemainTime()
    }, 1000)
  },
  methods: {
    slideChange(swiper) {
      this.isBeginning = swiper.isBeginning
      this.isEnd = swiper.isEnd
    },

    getRemainTime() {
      let nowTime = new Date()

      let diffMilliSeconds = Math.abs(
        this.futureTime.getTime() - nowTime.getTime()
      )
      let diffSeconds = Math.round(diffMilliSeconds / 1000)
      let day = parseInt(diffSeconds / (60 * 60 * 24))
      let hours = parseInt((diffSeconds % (60 * 60 * 24)) / (60 * 60))
      let minutes = parseInt((diffSeconds % (60 * 60)) / 60)
      let seconds = diffSeconds % 60
      this.remainTime.day = day
      this.remainTime.hours = hours
      this.remainTime.minutes = minutes
      this.remainTime.seconds = seconds
    },

    // getRemainTime() {
    //   let start = moment(new Date())
    //   let end = moment(this.futureTime)
    //   let timeLeft = end.diff(start)
    //   this.remainTime.day = moment.duration(timeLeft).days()
    //   this.remainTime.hours = moment.duration(timeLeft).hours()
    //   this.remainTime.minutes = moment.duration(timeLeft).minutes()
    //   this.remainTime.seconds = moment.duration(timeLeft).seconds()
    // },

    // 动态设置slide 顶部颜色
    borderTopColor(index) {
      const result = index % 5
      let color = ''
      switch (result) {
        case 0:
          color = '#ffac13'
          break
        case 1:
          color = '#83c44e '
          break
        case 2:
          color = '#2196f3 '
          break
        case 3:
          color = '#e53935'
          break
        case 4:
          color = '#00c0a5'
          break
        default:
          color = '#ffffff'
          break
      }

      return color
    },

    linkHover(index) {
      this.appSlideImgsIndex = index
    },
  },
}
</script>
<style lang="scss" scoped>
.pro-middle2 {
  width: 100%;
  padding: 4px 0 12px;
  background-color: #f5f5f5;

  .wrap {
    width: 1226px;
    margin: 0 auto;

    h2.title {
      line-height: 58px;
      font-size: 22px;
      font-weight: 200px;
      color: #333;
    }

    /* 小米闪购 */
    .flash {
      .flash-box {
        display: flex;
        position: relative;

        /* 左侧 */
        .flash-left {
          width: 234px;
          height: 340px;
          padding-top: 39px;
          text-align: center;
          border-top: 1px solid #e53935;
          background: #f1eded;

          p.flash-left-p1 {
            padding-top: 15px;
            font-size: 22px;
            color: #ef3a3b;
          }

          > i {
            display: block;
            line-height: 52px;
            margin: 25px auto;
            font-size: 52px;
            color: #ef3a3b;
          }

          p.flash-left-p2 {
            font-size: 14px;
            color: #666;
          }

          .countdown {
            display: flex;
            justify-content: center;

            width: 168px;
            height: 38px;
            line-height: 38px;
            margin: 28px auto 0;
            font-size: 14px;

            > span {
              display: block;
              width: 46px;
              background-color: #605751;
              color: #fff;
            }

            > i {
              display: block;
              width: 15px;
              margin: 0 2px;
              font-size: 12px;
              font-style: normal;
            }
          }
        }

        /* 右侧按钮 */
        .swiper-btn {
          display: flex;
          position: absolute;
          top: -30px;
          right: 0;
          width: 70px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          z-index: 999;

          .prev-btn,
          .next-btn {
            flex: 1;
            font-size: 12px;
            font-weight: 700;
            color: #999;
            border: 1px solid #e0e0e0;
            transition: all 0.3s;
          }

          .prev-btn:hover,
          .next-btn:hover {
            color: #ff6700;
            cursor: pointer;
          }

          .swiper-btn-disabled,
          .swiper-btn-disabled:hover {
            color: #e0e0e0;
            cursor: auto;
          }
        }

        /* 右侧图片组 */
        .flash-right {
          flex: 1;
          /* width:234px;  */ //不需要在设置了, swiper设置完后,是234px了
          height: 340px;
          margin-left: 14px;
          background-color: #f5f5f5;

          .flash-right-slide {
            padding-top: 39px;
            background-color: #fff;

            img {
              display: block;
              width: 160px;
              height: 160px;
              padding-bottom: 22px;
              margin: 0 auto;
            }

            p {
              text-align: center;
            }

            p.slide-desc1 {
              line-height: 21px;
              font-size: 14px;
              color: #212121;
            }

            p.slide-desc2 {
              line-height: 18px;
              margin-bottom: 12px;
              font-size: 12px;
              color: #b0b0b0;
            }

            p.slide-desc3 {
              line-height: 21px;
              font-size: 14px;

              span.slide-desc3-price1 {
                color: #ff6700;
              }

              span.slide-desc3-price2 {
                text-decoration: line-through;
                color: #b0b0b0;
              }
            }
          }
        }
      }

      .ad-img {
        margin: 22px 0px;

        img {
          width: 1226px;
          height: 120px;
        }
      }
    }

    /* 手机 */
    .phone {
      .phone-head {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > a.more {
          display: block;
          font-size: 16px;
          color: #464646;
          transition: all 0.3s;

          > i {
            display: inline-block;
            padding: 2px;
            padding-right: 3px;
            margin-left: 8px;
            border-radius: 50%;
            background-color: #b0b0b0;
            color: #fff;
            transition: all 0.3s;
          }

          &:hover {
            color: #ff6700;

            > i {
              background-color: #ff6700;
            }
          }
        }
      }

      /* 手机 */
      .phone-box {
        display: flex;
        width: 100%;
        height: 614px;

        .phone-box-left {
          width: 234px;
          height: 614px;

          img {
            width: 234px;
            height: 614px;
          }
        }

        .phone-box-right {
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
          width: 992px;
          height: 614px;

          .phone-box-slide {
            width: 234px;
            height: 300px;
            padding: 20px 0;
            margin-left: 14px;
            background-color: #fff;
            cursor: pointer;
            transition: all 0.3s;

            img {
              display: block;
              width: 160px;
              height: 160px;
              padding-bottom: 22px;
              margin: 0 auto;
            }

            p {
              text-align: center;
            }

            p.slide-desc1 {
              line-height: 21px;
              margin-top: 10px;
              font-size: 14px;
              color: #212121;
            }

            p.slide-desc2 {
              line-height: 18px;
              margin-bottom: 12px;
              font-size: 12px;
              color: #b0b0b0;
            }

            p.slide-desc3 {
              line-height: 21px;
              font-size: 14px;

              span.slide-desc3-price1 {
                color: #ff6700;
              }

              span.slide-desc3-price2 {
                text-decoration: line-through;
                color: #b0b0b0;
              }
            }
          }

          .phone-box-slide:hover {
            box-shadow: 0 15px 30px rgba($color: #000000, $alpha: 0.1);
            transform: translateY(-2px);
          }
        }
      }
    }

    /* 家电 */
    .appliance {
      width: 1226px;
      height: 686px;
      margin-top: 22px;

      .app-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1226px;
        height: 58px;

        h2.title {
          line-height: 58px;
          font-size: 22px;
          font-weight: 200px;
          color: #333;
        }

        .app-link {
          > a {
            display: inline-block;
            padding: 5px;
            margin-left: 25px;
            font-size: 16px;
            color: #424242;
            border-bottom: 2px solid transparent;
            transition: all 0.3s;
          }

          > a.active {
            color: #ff6700;
            border-bottom: 2px solid #ff6700;
          }
        }
      }

      .app-bottom {
        position: relative;
        display: flex;
        width: 1226px;
        height: 628px;

        .app-left {
          display: flex;
          flex-direction: column;
          width: 234px;
          height: 628px;

          .app-left-item1,
          .app-left-item2 {
            width: 234px;
            height: 300px;
            margin-bottom: 14px;

            img {
              width: 100%;
            }
          }
        }

        ul.app-right {
          display: flex;
          flex-wrap: wrap;
          height: 628px;

          > li {
            width: 234px;
            height: 300px;
            padding-top: 20px;
            margin-left: 14px;
            margin-bottom: 14px;
            text-align: center;
            background-color: #fff;
            cursor: pointer;

            img {
              display: block;
              width: 160px;
              margin: 0 auto 18px;
            }

            p.desc1 {
              margin-bottom: 2px;
              font-size: 14px;
              color: #333;
            }

            p.desc2 {
              margin-bottom: 10px;
              font-size: 12px;
              color: #b0b0b0;
            }

            p.desc3 {
              span:nth-child(1) {
                font-size: 14px;
                color: #ff6700;
              }

              span:nth-child(2) {
                margin-left: 0.5em;
                font-size: 14px;
                text-decoration: line-through;
                color: #b0b0b0;
              }
            }
          }

          > li:last-child {
            display: flex;
            align-items: center;
            width: 234px;
            height: 143px;

            .desc {
              width: 94px;
              margin-left: 30px;
              font-size: 14px;
              color: #333;

              .desc2 {
                color: #ff6700;
              }
            }

            img {
              display: block;
              width: 80px;
            }
          }
        }

        .more {
          display: flex;
          align-items: center;
          position: absolute;
          bottom: 14px;
          right: 0;
          width: 234px;
          height: 143px;
          background-color: #fff;

          .more-desc {
            margin-left: 30px;

            > a {
              display: block;
            }

            > a:nth-child(1) {
              font-size: 18px;
              color: #333;
            }

            > a:nth-child(2) {
              font-size: 12px;
              color: #757575;
            }
          }

          .more-icon {
            flex: 1;
            text-align: center;

            > a {
              display: block;
              line-height: 50px;
              font-size: 50px;
              font-weight: 700;
              color: #ff6700;
            }
          }
        }
      }

      .slide-ele {
        transition: all 0.3s linear;
      }

      .slide-ele:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 30px rgba($color: #000000, $alpha: 0.1);
      }
    }

    /* 视频 */
    .video {
      .video-head {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > a.more {
          display: block;
          font-size: 16px;
          color: #464646;
          transition: all 0.3s;

          > i {
            display: inline-block;
            padding: 2px;
            padding-right: 3px;
            margin-left: 8px;
            border-radius: 50%;
            background-color: #b0b0b0;
            color: #fff;
            transition: all 0.3s;
          }

          &:hover {
            color: #ff6700;

            > i {
              background-color: #ff6700;
            }
          }
        }
      }

      .video-box {
        display: flex;
        justify-content: space-between;

        .video-box-item {
          width: 296px;
          height: 285px;
          margin-bottom: 14px;
          background-color: #fff;
          transition: all 0.2s linear;

          > a {
            .btn-box {
              position: relative;
              width: 100%;
              height: 180px;

              > img {
                width: 100%;
                height: 100%;
              }

              .btn {
                position: absolute;
                left: 20px;
                bottom: 10px;
                width: 36px;
                height: 24px;
                text-align: center;
                border: 2px solid #fff;
                border-radius: 10px;
                transition: all 0.3s linear;

                > i {
                  position: relative;
                  top: 2px;
                  left: 2px;
                  color: #fff;
                  font-size: 14px;
                }
              }
            }

            .btn-box:hover {
              .btn {
                background-color: #ff6700;
                border-color: #ff6700;
              }
            }

            > p {
              margin-top: 28px;
              font-size: 14px;
              text-align: center;
              color: #333;
            }
          }
        }
        .video-box-item:hover {
          box-shadow: 0 15px 30px rgba($color: #000000, $alpha: 0.1);
          transform: translateY(-2px);
        }
      }
    }
  }
}
</style>