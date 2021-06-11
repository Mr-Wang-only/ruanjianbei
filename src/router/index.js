import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/test',
    component: () => import('@/Test.vue'),
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/Admin.vue'),
    redirect: '/admin/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/admin/main/Index.vue'),
      },
      {
        path: 'database',
        component: () => import('@/views/admin/main/DataBase.vue'),
      },
      {
        path: 'uploadcsv',
        component: () => import('@/views/admin/main/UploadCsv.vue'),
      },
      {
        path: 'charts',
        component: () => import('@/views/admin/main/Charts.vue'),
        children: [
          {
            path: ':tableName',
            component: () => import('@/views/admin/main/Charts.vue'),
          },
        ]
      },
      {
        path: 'createChart',
        component: () => import('@/views/admin/main/CreateChart.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
