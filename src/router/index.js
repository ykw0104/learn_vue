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
        path: '/toutiao',
        redirect: '/toutiao/login'
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/components/jinritoutiao/Login.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
