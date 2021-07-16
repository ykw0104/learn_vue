import request from './request'

/* 获取图片素材列表 */
export const getImages = (params) => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/images',
    params
  })
}