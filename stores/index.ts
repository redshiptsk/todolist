import { injectStores } from "@mobx-devtools/tools";

import globalStore from './GlobalStore'
import ToDosStore from './ToDosStore'

const toDosStore = new ToDosStore()

injectStores({
    globalStore,
    toDosStore
})

export { globalStore, toDosStore }
