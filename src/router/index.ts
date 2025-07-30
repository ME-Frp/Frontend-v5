import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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
  document.title = 'ME Frp | 幻缘映射 - 免费内网穿透_免费端口映射_半公益_高速_Minecraft我的世界联机_泰拉瑞亚联机_远程桌面_开发调试_建站'


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
