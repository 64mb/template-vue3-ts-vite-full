import { createRouter, createWebHistory } from 'vue-router'

import { loadLayoutMiddleware } from '~/layout'

import middleware from './middleware'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(middleware)
router.beforeEach(loadLayoutMiddleware)

export default router

export type { RouteMiddleware, RouteMiddlewareContext } from './types'
