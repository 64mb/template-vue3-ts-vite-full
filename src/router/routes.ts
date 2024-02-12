import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/:pathMatch(.*)*', redirect: '/' },

  { path: '/', component: () => import('~/page/index.vue') },
]

export default routes
