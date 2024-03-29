export function domReady(condition = ['complete', 'interactive']) {
  return new Promise((resolve) => {
    if (condition.includes(document.readyState)) {
      resolve(true)
    } else {
      document.addEventListener('readystatechange', () => {
        if (condition.includes(document.readyState)) {
          resolve(true)
        }
      })
    }
  })
}

export function domLoad() {
  return new Promise((resolve) => {
    window.addEventListener('load', () => {
      resolve(true)
    })
  })
}
