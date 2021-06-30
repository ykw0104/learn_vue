<template>
  <div class="banner">
    <div class="wrap">
      <div class="banner-box">
        <!-- 左侧 -->
        <div class="slide">
          <ul class="slide-ul">
            <li class="slide-li"
                v-for="item,index in slideList"
                @mouseover="slideMouseOver(index)">
              <a href="#">{{item.desc}}</a>
              <span class="iconfont">&#xe770;</span>
              <!-- 滑动门 -->
              <div class="slide-list"
                   :style="{width:slideListWidth}"
                   v-if="index === currentSlideIndex">
                <div class="slide-wrap">
                  <ul class="slide-list-ul"
                      v-for="n in slideListUlNum">
                    <li v-for="m in 6">
                      <a href="#">
                        <img src="../images/slide_a.webp"
                             alt="">
                        <span>小米10 - index:{{index}}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiSwiper',
  data() {
    return {
      slideList: [
        {
          name: 'n1',
          desc: '手机 电话卡',
        },
        {
          name: 'n2',
          desc: '电视 盒子',
        },
        {
          name: 'n3',
          desc: '笔记本 显示器',
        },
        {
          name: 'n4',
          desc: '家电 插线板',
        },
        {
          name: 'n5',
          desc: '出行 穿戴',
        },
        {
          name: 'n6',
          desc: '智能 路由器',
        },
        {
          name: 'n7',
          desc: '电源 配件',
        },
        {
          name: 'n8',
          desc: '健康 儿童',
        },
        {
          name: 'n9',
          desc: '耳机 音箱',
        },
        {
          name: 'n10',
          desc: '生活 箱包',
        },
      ],
      currentSlideIndex: 0,
      slideListUlNum: 4,
    }
  },
  computed: {
    slideListWidth() {
      // 248是 ul.slide-list-ul的宽度, 加1是.slide-list的右边框的宽度
      return 248 * this.slideListUlNum + 1 + 'px'
    },
  },
  methods: {
    slideMouseOver(index) {
      this.currentSlideIndex = index
    },
  },
}
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  min-width: 1226px;
  height: 460px;

  .wrap {
    width: 1226px;
    margin: 0 auto;

    .banner-box {
      width: 1226px;
      height: 460px;
      background-image: url('../images/swiper1.jpg');
      background-size: 100%;
      animation: banner 12s linear infinite;

      &:hover {
        animation-play-state: paused;
      }

      .slide {
        width: 234px;
        height: 460px;
        padding: 20px 0;
        background-color: rgba(105, 101, 101, 0.6);

        ul.slide-ul {
          position: relative;
          z-index: 9;

          li.slide-li {
            display: flex;
            justify-content: space-between;
            height: 42px;
            line-height: 42px;
            padding-left: 30px;
            cursor: pointer;
            transition: all 0.3s;

            > a {
              font-size: 14px;
              color: #fff;
            }

            span.iconfont {
              padding-right: 20px;
              font-weight: 700;
              color: rgba($color: #ffffff, $alpha: 0.5);
            }

            &:hover {
              background-color: #ff6700;
            }

            /* 滑动门 */
            .slide-list {
              display: none; // TODO
              position: absolute;
              top: -20px;
              left: 234px;
              // width: 992px;
              height: 460px;
              padding-top: 2px;
              border: 1px solid #e0e0e0;
              border-left: none;
              box-shadow: 0 8px 16px rgba($color: #000000, $alpha: 0.18);
              background-color: #fff;
              z-index: 9;

              .slide-wrap {
                display: flex;
                width: 100%;
                height: 460px;

                ul.slide-list-ul {
                  float: left;
                  width: 248px;
                  height: 460px;

                  > li {
                    width: 100%;
                    height: 76px;
                    padding: 18px 0 18px 20px;

                    a {
                      font-size: 14px;
                      color: #333;

                      img {
                        margin-right: 12px;
                      }
                    }
                  }
                }
              }
            }

            &:hover .slide-list {
              display: block;
            }
          }
        }
      }
    }
  }
}

@keyframes banner {
  0% {
    background-image: url('../images/swiper1.jpg');
  }
  33% {
    background-image: url('../images/swiper2.jpg');
  }
  66% {
    background-image: url('../images/swiper3.jpg');
  }
  100% {
    background-image: url('../images/swiper4.jpg');
  }
}
</style>