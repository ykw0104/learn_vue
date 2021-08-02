<template>
  <div>
    <h2>{{counter}}</h2>
    <h2>{{doubleCounter}}</h2>
    <button @click="increment" style="margin-bottom:20px;">加1</button>

    <h2>{{heroData}}</h2>
    <button @click="changeHeroData">修改HeroData</button>

    <p class="content"></p>

    <div class="scroll">
      <div class="scroll-x">scrollX: {{scrollX}} </div>
      <div class="scroll-Y">scrollY: {{scrollY}}</div>
    </div>

    <div class="mouse">
      <div class="mouse-x">mouseX: {{mouseX}} </div>
      <div class="mouse-Y">mouseY: {{mouseY}}</div>
    </div>
  </div>
</template>

<script>
import { 
  useCounter,
  useTitle,
  useScrollPosition,
  useMousePosition,
  useLocalStorage} from "./Hooks"

export default {
  name: 'SubEle1',

  setup() {
    // 1.计时器案例
    const { counter, doubleCounter, increment } = useCounter()

    // 2.修改document的title
    const titleRef = useTitle('我是默认值')
    setTimeout(() => {
      titleRef.value = '我是新值'
    }, 3000)

    // 3.滚动位置
    const { scrollX, scrollY } = useScrollPosition()

    // 4.鼠标位置
    const { mouseX, mouseY } = useMousePosition()

    // 5.localStorage
    const heroData = useLocalStorage('hero', { name: '赵飞燕', age: '18' })
    const changeHeroData = () => {
      heroData.value = '李师师'
    }

    return {
      counter,
      doubleCounter,
      increment,

      scrollX,
      scrollY,

      mouseX,
      mouseY,

      heroData,
      changeHeroData,
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

.mouse {
  position: fixed;
  right: 30px;
  bottom: 80px;
}
</style>