/* 随机生成,用于随机生成1,2,3中的任意一个 */
export function rangeRandom(a, b) {
  let max = Math.max(a, b)
  let min = Math.min(a, b)
  return Math.floor(Math.random() * (max - min + 1) + min)
}