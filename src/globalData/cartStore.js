import { createStore } from 'redux'
import { cartReducer } from './cartReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

const CartpersistConfig = {
  key: 'cart',
  storage
}
const persistedCart = persistReducer(CartpersistConfig, cartReducer)

export const cartStore = createStore(persistedCart, composeWithDevTools())
export const persistor = persistStore(cartStore)
