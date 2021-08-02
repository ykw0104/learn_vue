import { ref, watch } from "vue"

export default function (key, keyValue) {
  const data = ref(keyValue)

  if (keyValue) {
    // 有值传入, 保存操作
    window.localStorage.setItem(key, JSON.stringify(keyValue))
  } else {
    // 没值传入, 获取操作
    data.value = JSON.parse(window.localStorage.getItem(key))
  }

  // 值发生变化, 保存操作
  watch(data, (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue))
  })

  return data
}