/**
 *  模拟请求的一个request
 * */
import { rangeRandom } from './common'


/* 模拟获取product信息 */
export function getProductList() {
  return [
    // 1.热菜   2.凉菜   3.主食  4.甜品
    {
      id: 4001,
      type: 4,
      name: '慕斯蛋糕',
      imgUrl: require('../images/product/food4_1.jpg'),
      price: 120,
      isCommend: true
    },
    {
      id: 4002,
      type: 4,
      name: '草莓蛋糕',
      imgUrl: require('../images/product/food4_2.jpg'),
      price: 99,
      isCommend: false
    },
    {
      id: 4003,
      type: 4,
      name: '史多伦',
      imgUrl: require('../images/product/food4_3.jpg'),
      price: 59,
      isCommend: false
    },
    {
      id: 4004,
      type: 4,
      name: '布朗尼',
      imgUrl: require('../images/product/food4_4.jpg'),
      price: 39,
      isCommend: false
    },
    {
      id: 4005,
      type: 4,
      name: '欧培拉',
      imgUrl: require('../images/product/food4_5.jpg'),
      price: 79,
      isCommend: false
    },
  ]
}


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