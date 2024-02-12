import type { RouteMiddleware } from '~/router'
import { useStore } from '~/store'

const auth: RouteMiddleware = ({ next }) => {
  const store = useStore()

  if (!store.$state.token) {
    next('/login')
    return false
  }
}

export default auth
