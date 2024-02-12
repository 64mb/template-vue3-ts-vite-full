import type { RouteMiddleware } from '~/router'
import { useStore } from '~/store'

const login: RouteMiddleware = ({ next }) => {
  const store = useStore()

  if (store.$state.token) {
    next('/')
    return false
  }
}

export default login
