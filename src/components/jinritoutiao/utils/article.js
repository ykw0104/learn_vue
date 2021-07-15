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

/* 获取指定文章 */
export const getArticle = (articleId) => {
  return request({
    method: 'GET',
    url: `/mp/v1_0/articles/${articleId}`,
  })
}

/* 获取频道 */
export const getArticleChannels = () => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/channels',
  })
}

/* 删除文章 */
export const deleteArticle = (articleId) => {
  return request({
    method: 'DELETE',
    url: `/mp/v1_0/articles/${articleId}`
  })
}

/* 新建文章 */
export const addArticle = (data, draft = false) => {
  return request({
    method: 'POST',
    url: `/mp/v1_0/articles`,
    params: {
      draft // 是否存为草稿
    },
    data // 请求体
  })
}

/* 更新文章 */
export const updateArticle = (articleId, data, draft = false) => {
  return request({
    method: 'PUT',
    url: `/mp/v1_0/articles/${articleId}`,
    params: {
      draft
    },
    data  // 请求体
  })
}