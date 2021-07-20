<template>
  <ul class="foodlist">
    <li>
      <img src="./images/food1.jpeg" alt="">
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

    <li>
      <img src="./images/food2.jpg" alt="">
      <span class="iconfont recommend">&#xe716;</span>
      <div class="bar">
        <h3>酱汁牛仔骨</h3>
        <p>
          <span class="rmb">RMB</span>
          <span class="price">89/份</span>
          <span class="iconfont add">&#xe68a;</span>
        </p>
      </div>
    </li>

    <li>
      <img src="./images/food3.jpg" alt="">
      <!-- <span class="iconfont recommend">&#xe716;</span> -->
      <div class="bar">
        <h3>刺身拼盘</h3>
        <p>
          <span class="rmb">RMB</span>
          <span class="price">329/份</span>
          <span class="iconfont add">&#xe68a;</span>
        </p>
      </div>
    </li>

  </ul>
</template>

<script>
export default {
  name: 'GoodCustomerProduct',
}
</script>
<style lang="scss" scoped>
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