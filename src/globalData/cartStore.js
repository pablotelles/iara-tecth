import { createStore } from 'redux'
import { cartReducer } from './cartReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const UserpersistConfig = {
  key: 'cart',
  storage
}
const persistedCart = persistReducer(UserpersistConfig, cartReducer)

export const cartStore = createStore(persistedCart)
export const persistor = persistStore(cartStore)
