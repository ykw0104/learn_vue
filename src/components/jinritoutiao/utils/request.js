import axios from "axios"
import JSONBig from "json-bigint"

/* 创建名为request的实例 */
const request = axios.create({  // 创建一个实例
  baseURL: 'http://api-toutiao-web.itheima.net', // 最新接口地址

  transformResponse: [function (data) {  // 后端返回的原始数据的处理
    try {
      // return JSON.parse(data);
      return JSONBig.parse(data)  // 处理ID长度过大时转换不准确的问题
    } catch (error) {
      return data
    }
  }],
})

/* 请求拦截器 */
request.interceptors.request.use(function (config) {
  const user = JSON.parse(window.localStorage.getItem('user')) // 从localStorage里获取user信息

  if (user) {
    config.headers.Authorization = `Bearer ${user.token}` // 统一设置token
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

export default request