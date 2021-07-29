<template>
  <div>
    <h2>{{counter}}</h2>
    <h2>{{doubleCounter}}</h2>
    <button @click="increment">加1</button>

    <p class="content"></p>

    <div class="scroll">
      <div class="scroll-x">scrollX: {{scrollX}} </div>
      <div class="scroll-Y">scrollY: {{scrollY}}</div>
    </div>
  </div>
</template>

<script>
import useCounter from './Hooks/useCounter'
import useTitle from './Hooks/useTitle'
import useScrollPosition from './Hooks/useScrollPosition'

import { ref } from 'vue'

export default {
  name: 'SubEle1',

  setup() {
    // 计时器案例
    const { counter, doubleCounter, increment } = useCounter()

    // 修改document的title
    const titleRef = useTitle('我是默认值')
    setTimeout(() => {
      titleRef.value = '我是新值'
    }, 3000)

    // 滚动位置
    const { scrollX, scrollY } = useScrollPosition()

    return {
      counter,
      doubleCounter,
      increment,

      scrollX,
      scrollY,
    }
  },
}
</script>
<style lang="scss" scoped>
.content {
  width: 3000px;
  height: 5000px;
}

.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>