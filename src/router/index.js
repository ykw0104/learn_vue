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
            redirect: '/toutiao/tt_bg/bg_home'
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


  /* 好客如一 01 */
  {
    path: '/haoke01',
    name: 'GoodCustomer',
    component: () => import('@/components/01_好客如一/GoodCustomer.vue'),
    children: [
      {
        path: '',
        redirect: '/haoke01/hk01_login'
      },
      {
        path: 'hk01_login',
        name: 'GoodCustomerLogin',
        component: () => import('@/components/01_好客如一/GoodCustomerLogin.vue')
      },
      {
        path: 'hk01_home',
        name: 'GoodCustomerHome',
        component: () => import('@/components/01_好客如一/GoodCustomerHome.vue'),

        children: [
          {
            path: '',
            redirect: '/haoke01/hk01_home/hk01_product'
          },
          {
            path: 'hk01_product',
            name: 'GoodCustomerProduct',
            component: () => import('@/components/01_好客如一/GoodCustomerProduct.vue')
          },
          {
            path: 'hk01_order',
            name: 'GoodCustomerHomeOrder',
            component: () => import('@/components/01_好客如一/GoodCustomerHomeOrder.vue')
          },
          {
            path: 'hk01_seat',
            name: 'GoodCustomerHomeSeat',
            component: () => import('@/components/01_好客如一/GoodCustomerHomeSeat.vue')
          },
          {
            path: 'hk01_background',
            name: 'GoodCustomerHomeBackground',
            component: () => import('@/components/01_好客如一/GoodCustomerHomeBackground.vue')
          },
          {
            path: 'hk01_logout',
            name: 'GoodCustomerHomeLogout',
            component: () => import('@/components/01_好客如一/GoodCustomerHomeLogout.vue')
          },
        ]
      },
    ]
  },

  /* 好客如一 02 */
  {
    path: '/haoke02',
    name: 'HkIndex02',
    component: () => import('@/components/02_好客如一/HkIndex02.vue'),
    children: [
      {
        path: '',
        redirect: '/haoke02/hk02_login'
      },
      {
        path: 'hk02_login',
        name: 'HkLogin02',
        component: () => import('@/components/02_好客如一/HkLogin02.vue')
      },
      {
        path: 'hk02_home',
        name: 'HkHome02',
        component: () => import('@/components/02_好客如一/HkHome02.vue'),
        children: [
          {
            path: '',
            redirect: '/haoke02/hk02_home/hk02_product'
          },
          {
            path: 'hk02_product',
            name: 'HkHomeProduct',
            component: () => import('@/components/02_好客如一/components/HkHomeProduct.vue')
          },
          {
            path: 'hk02_order',
            name: 'HkHomeOrder',
            component: () => import('@/components/02_好客如一/components/HkHomeOrder.vue')
          },
          {
            path: 'hk02_seat',
            name: 'HkHomeSeat',
            component: () => import('@/components/02_好客如一/components/HkHomeSeat.vue')
          },
          {
            path: 'hk02_bg',
            name: 'HkHomeBg',
            component: () => import('@/components/02_好客如一/components/HkHomeBg.vue')
          },
          {
            path: 'hk02_logout',
            name: 'HkHomeLogout',
            component: () => import('@/components/02_好客如一/components/HkHomeLogout.vue')
          }
        ]
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* 导航守卫 to: 要去哪, from: 从哪来, next: 放行 */
router.beforeEach((to, from, next) => {

  /* 头条的导航设置 */
  if (to.path.includes('/toutiao/') && to.path !== '/toutiao/tt_login') { // 头条的非登录页面 
    const user = JSON.parse(window.localStorage.getItem('user')) // 获取头条的登录用户
    if (user) { // 已登录,放行
      next()
    } else { // 未登录, 跳转到头条登录页面
      next('/toutiao/tt_login')
    }
  }
  /* 其他导航 */
  else {
    next() // 允许通过
  }
})

export default router
