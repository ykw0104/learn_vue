import axios from "axios"

/* 创建名为request的实例 */
const request = axios.create({  // 创建一个实例
  baseURL: 'http://api-toutiao-web.itheima.net', // 最新接口地址
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