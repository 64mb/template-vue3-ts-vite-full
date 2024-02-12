import { acceptHMRUpdate, defineStore } from 'pinia'

type State = {
  token?: string | null
}

const state: State = {
  token: null,
}

export const useStore = defineStore('main', {
  state: () => state,
  actions: {
    setToken(token: string) {
      this.$state.token = token
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
