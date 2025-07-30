import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { mock } from '../constants/mock'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((_to, _from) => {
  document.title = `${mock.title} | ${mock.subtitle}`


  if (!window.$loadingBar) return true
  window.$loadingBar.start()
  return true
})

router.afterEach((_to, _from) => {
  if (!window.$loadingBar) return
  window.$loadingBar.finish()
})

router.onError(() => {
  if (window.$loadingBar) window.$loadingBar.error()
})

export default router
