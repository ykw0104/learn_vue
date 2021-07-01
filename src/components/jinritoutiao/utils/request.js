import axios from "axios"

// 创建一个实例
const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net', // 最新接口地址
})

// 导出
export default request