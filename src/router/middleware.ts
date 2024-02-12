import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const middlewareProvider = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): Promise<void> => {
  const middleware = to.meta != null ? to.meta.middleware : null

  if (middleware != null && middleware.length) {
    for (let index = 0; index < middleware.length; index += 1) {
      const method = middleware[index]
      const result = await method({
        to,
        from,
        next,
      })
      if (result === false) {
        return
      }
    }
    return next()
  }

  return next()
}

export default middlewareProvider
