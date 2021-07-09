/**
 *  文章相关请求模块
 */

import request from './request.js'

export const getArticles = (params) => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/articles',
    params
  })
}