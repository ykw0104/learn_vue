import { ref, computed } from 'vue'

export default function () {
  const counter = ref(1)
  const doubleCounter = computed(() => counter.value * 2)

  const increment = () => {
    counter.value++
  }

  return {
    counter,
    doubleCounter,
    increment
  }
}