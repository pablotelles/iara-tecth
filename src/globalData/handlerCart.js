import { cartStore } from './cartStore'
import { addToCart } from './cartActions'

export function addProduct (pizza) {
  cartStore.dispatch(addToCart(pizza))
}
