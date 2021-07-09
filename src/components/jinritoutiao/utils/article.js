/**
 *  文章相关请求模块
 */

import request from './request.js'

/* 获取文章 */
export const getArticles = (params) => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/articles',
    params
  })
}

/* 获取频道 */
export const getArticleChannels = () => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/channels',
  })
}