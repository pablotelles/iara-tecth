import {
  ADD__TO__CART,
  CHANGE__ITEM__QT,
  REMOVE__ITEM__FROM__CART,
  EXCLUDE__ITEM__FROM__CART
} from './actionsTypes'

export function addToCart (product) {
  console.log('action - add')
  return {
    type: ADD__TO__CART,
    id: product.id,
    payload: product
  }
}
export function moreProductCart (product) {
  console.log('action - change')
  return {

    type: CHANGE__ITEM__QT,
    id: product.id,
    payload: product
  }
}
export function lessProductCart (product) {
  console.log('action - remove')
  return {
    type: REMOVE__ITEM__FROM__CART,
    id: product.id
  }
}
export function excludeFromCart (product) {
  console.log('action - exclude')
  return {
    type: EXCLUDE__ITEM__FROM__CART,
    id: product.id
  }
}
