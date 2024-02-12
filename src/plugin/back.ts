import router from '~/router'

const back = (reserve: string) => {
  if (window.history.length > 1) {
    if (window.history.length <= 2) {
      let path = router.options.history.location
      path = path.slice(0, path.lastIndexOf('/') + 1)
      router.replace(path)
      return
    }
    router.back()
  } else if (reserve != null) {
    router.push(reserve)
  } else {
    router.push('/')
  }
}

export const useBack = () => back
