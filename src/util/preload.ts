import { domLoad, domReady } from './dom-event'
import { loadingAppend, loadingRemove } from './loading'

domReady()
  .then(() => loadingAppend())
  .catch(() => {})

domLoad()
  .then(() => loadingRemove())
  .catch(() => {})
