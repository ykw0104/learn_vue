/* 模拟请求 */
import { rangeRandom } from './common'


/* 模拟获取seat座位详情 */
// orderNum  多少张座位
export function getOrderList(orderNum) {
  let tempOrderList = []
  for (let i = 0; i < orderNum; i++) {
    let tempOrder = {}
    tempOrder.id = i + 1 // 座位号
    tempOrder.statue = rangeRandom(1, 3) // 随机状态(1,2,3)
    tempOrderList.push(tempOrder)
  }

  return tempOrderList
}