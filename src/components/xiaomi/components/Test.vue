<template>
  <swiper navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          :slides-per-view="3"
          :space-between="14">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

SwiperCore.use([Navigation])

export default {
  name: 'Test',
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>
<style lang="scss" scoped>
</style>