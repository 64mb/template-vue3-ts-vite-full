import type { NavigationFailure, NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export type RouteMiddlewareContext = {
  to: RouteLocationNormalized
  from: RouteLocationNormalized
  next: NavigationGuardNext
}

export type RouteMiddleware = (ctx: RouteMiddlewareContext) => void | boolean | Promise<void | boolean | NavigationFailure | undefined>

declare module 'vue-router' {
  interface RouteMeta {
    middleware?: Array<(ctx: RouteMiddlewareContext) => void | boolean>
  }
}
