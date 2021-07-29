<template>
  <div>
    <div>
      <button @click="tabClick('EleTest')">ele-plus测试</button>
      <button @click="tabClick('SubEle1')">Hook使用集合</button>
      <button @click="tabClick('SubEle2')">useTitle</button>
      <button @click="tabClick('SubEle3')">33</button>
    </div>
    <hr>
    <component :is="curTab"></component>
  </div>
</template>

<script>
import EleTest from './EleTest.vue'
import SubEle1 from './SubEle1.vue'
import SubEle2 from './SubEle2.vue'
import SubEle3 from './SubEle3.vue'

import { ref } from 'vue'

export default {
  name: 'Ele',
  components: { EleTest, SubEle1, SubEle2, SubEle3 },

  setup() {
    let curTab = ref('EleTest')

    const tabClick = (tab) => {
      curTab.value = tab
    }

    return {
      curTab,
      tabClick,
    }
  },
}
</script>
<style lang="scss" scoped>
button {
  margin-right: 10px;
}
</style>