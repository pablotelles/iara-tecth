import { cartStore } from '../../globalData/cartStore'
import { addToCart, moreProductCart, lessProductCart, excludeFromCart } from '../../globalData/cartActions'

export const handlerAddProduct = (product) => {
  const cart = cartStore.getState().cart
  const verifyCart = cart.some(item => item.id === product.id)

  if (verifyCart) {
    cartStore.dispatch(moreProductCart(product))
  } else {
    console.log('add')
    product.qt = 1
    cartStore.dispatch(addToCart(product))
  }
}

export const handlerRemoveProduct = (product) => {
  if (product.qt > 1) {
    cartStore.dispatch(lessProductCart(product))
  } else {
    cartStore.dispatch(excludeFromCart(product))
  }
}