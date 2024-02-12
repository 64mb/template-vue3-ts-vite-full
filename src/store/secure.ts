import type { PiniaPlugin, StateTree, SubscriptionCallback } from 'pinia'
import SecureLS from 'secure-ls'

const debug = import.meta.env.MODE !== 'production'

const piniaSecurePlugin: PiniaPlugin = ({ store }) => {
  const ls = new SecureLS({ isCompression: false })

  let save: SubscriptionCallback<StateTree> = (_, st) => {
    ls.set(store.$id, st)
  }

  if (debug) {
    try {
      store.$state = JSON.parse(localStorage.getItem(store.$id) || '{}')
    } catch (err) {
      console.error('store: error load')
    }
    save = (_, st) => {
      localStorage.setItem(store.$id, JSON.stringify(st))
    }
  } else {
    if (!ls.getAllKeys().includes(store.$id)) {
      ls.set(store.$id, {})
    }
    try {
      store.$state = ls.get(store.$id)
    } catch (err) {
      console.error('store-secure: error load')
    }
  }

  store.$subscribe(save, { detached: true })
}

export default piniaSecurePlugin
