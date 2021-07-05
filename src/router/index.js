import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  /* 默认路径 */
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  /* 小米路由 */
  {
    path: '/mi',
    name: 'Mi',
    component: () => import('@/components/xiaomi/Mi.vue')
  },

  /* 迅雷路由 */
  {
    path: '/xunlei',
    name: 'XunLei',
    component: () => import('@/components/xunlei/XunLei.vue')
  },

  /* 头条路由 */
  {
    path: '/toutiao',
    name: 'toutiao',
    component: () => import('@/components/jinritoutiao/TouTiao.vue'),
    children: [
      {
        path: '',
        redirect: '/toutiao/tt_login'
      },
      {
        path: 'tt_login', // 登录页
        name: 'TouiaoLogin',
        component: () => import('@/components/jinritoutiao/TouTiaoLogin.vue')
      },
      {
        path: 'tt_bg', // 首页
        name: 'TouTiaoBg',
        component: () => import('@/components/jinritoutiao/TouTiaoBg.vue'),

        children: [
          {
            path: '',
            redirect: 'tt_bg/bg_home'
          },
          {
            path: 'bg_home',
            name: 'TouTiaoBgHome',
            component: () => import('@/components/jinritoutiao/TouTiaoBgHome.vue')
          },
          {
            path: 'bg_article',
            name: 'TouTiaoBgArticle',
            component: () => import('@/components/jinritoutiao/TouTiaoBgArticle.vue')
          },
          {
            path: 'bg_image',
            name: 'TouTiaoBgImage',
            component: () => import('@/components/jinritoutiao/TouTiaoBgImage.vue')
          },
          {
            path: 'bg_publish',
            name: 'TouTiaoBgPublish',
            component: () => import('@/components/jinritoutiao/TouTiaoBgPublish.vue')
          },
          {
            path: 'bg_comment',
            name: 'TouTiaoBgComment',
            component: () => import('@/components/jinritoutiao/TouTiaoBgComment.vue')
          },
          {
            path: 'bg_fans',
            name: 'TouTiaoBgFans',
            component: () => import('@/components/jinritoutiao/TouTiaoBgFans.vue')
          },
          {
            path: 'bg_setting',
            name: 'TouTiaoBgASetting',
            component: () => import('@/components/jinritoutiao/TouTiaoBgSetting.vue')
          },
        ]
      },
    ]
  },

  /* 饿了么 Element-PLUS */
  {
    path: '/ele-plus',
    name: 'Ele',
    component: () => import('@/components/test_element_ui/Ele.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
