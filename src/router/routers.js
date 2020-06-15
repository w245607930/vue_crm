/**
 * Created by intellif on 2020/6/11.
 */
import Layout from '@/layout/nav'

const constRouterMap = [
  {
    path: '/',
    redirect: '/welcome',
    component: Layout,
    children: [
      {
        path: 'welcome',
        component: () => import('@/views/welcome.vue'),
        meta: {
          title: '欢迎页'
        },
      }
    ]
  },
  {
    path: '/homePage',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/homePage/index.vue'),
        meta: {
          title: '首页',
          showMenu: true
        },
      },

    ]
  },
  {
    path: '/work',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/work/index.vue'),
        meta: {
          title: '工作',
          showMenu: true
        },
      },
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '我的',
          showMenu: true
        },
      },
    ]
  },
  {
    path: '*',
    component: () => import('@/views/error/page404.vue'),
  }
]

export default constRouterMap
