import type { RouteLocationNormalized } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: string
  }
}

export async function loadLayoutMiddleware(route: RouteLocationNormalized): Promise<void> {
  const layout = route.meta.layout || 'default'

  try {
    const component = await import(/* @vite-ignore */ `./${layout}.vue`)
    route.meta.layoutComponent = component.default
  } catch (err) {
    route.meta.layoutComponent = 'Layout Error'
  }
}
