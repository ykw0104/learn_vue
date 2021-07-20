/* 模拟请求 */
import { rangeRandom } from './common'


/* 模拟获取seat座位详情 */
// orderNum  多少张座位
export function getseatList(seatNum) {
  let tempSeatList = []
  for (let i = 0; i < seatNum; i++) {
    let tempSeat = {}
    tempSeat.id = i + 1 // 座位号
    tempSeat.statue = rangeRandom(1, 3) // 随机状态(1,2,3)
    tempSeatList.push(tempSeat)
  }

  return tempSeatList
}