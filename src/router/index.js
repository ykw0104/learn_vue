import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/mi',
    name: 'Mi',
    component: () => import('@/components/xiaomi/Mi.vue')
  },
  {
    path: '/xunlei',
    name: 'XunLei',
    component: () => import('@/components/xunlei/XunLei.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
