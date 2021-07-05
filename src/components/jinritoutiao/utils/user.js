/**
 *  用户相关请求模块
 */
import request from './request.js'

/* 用户登录 */
export const userLogin = user => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    data: user, // 请求体, 提交表单数据
  })
}

/* 获取用户信息 */
export const getUserInfo = () => { }

/* 修改用户信息 */
export const updateUser = () => { }