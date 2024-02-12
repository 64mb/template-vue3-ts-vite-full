const styleId = 'app-loading-style'
const wrapId = 'app-loading-wrap'

export function loadingAppend() {
  const styleContent = `
  .loader {
    position: relative;
    left: -20px;
  
    display: block;
  
    box-sizing: border-box;
    width: 8px;
    height: 48px;
    margin: auto;
  
    border-radius: 4px;
  
    animation: animloader 1s linear infinite alternate;
  }
  
  :root {
    --el-color-primary: #73767a;
    --el-color-primary-light-5: #c8c9cc;
  }
  
  @keyframes animloader {
    0% {
      box-shadow:
        20px 0 var(--el-color-primary),
        40px 0 var(--el-color-primary-light-5),
        60px 0 var(--el-color-primary-light-5);
    }
    50% {
      box-shadow:
        20px 0 var(--el-color-primary-light-5),
        40px 0 var(--el-color-primary),
        60px 0 var(--el-color-primary-light-5);
    }
    100% {
      box-shadow:
        20px 0 var(--el-color-primary-light-5),
        40px 0 var(--el-color-primary-light-5),
        60px 0 var(--el-color-primary);
    }
  }
  
  #app-loading-wrap {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 100vw;
    height: 100vh;
  
    background: #fff;
  }`

  const oStyle = document.createElement('style')
  const oDiv = document.createElement('div')

  oStyle.id = styleId
  oStyle.innerHTML = styleContent
  oDiv.id = wrapId
  oDiv.innerHTML = `<span class="loader"></span>`

  document.head.appendChild(oStyle)
  document.body.appendChild(oDiv)
}

export function loadingRemove() {
  const styleEl = document.head.querySelector(`#${styleId}`)
  if (styleEl) document.head.removeChild(styleEl)

  const wrapEl = document.body.querySelector(`#${wrapId}`)
  if (wrapEl) document.body.removeChild(wrapEl)
}
