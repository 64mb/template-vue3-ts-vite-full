import { createPinia } from 'pinia'

import secure from './secure'

const pinia = createPinia()

pinia.use(secure)

export default pinia

export { useStore } from './main'
