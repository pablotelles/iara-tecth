import {
  ADD__TO__CART,
  CHANGE__ITEM__QT,
  REMOVE__ITEM__FROM__CART,
  EXCLUDE__ITEM__FROM__CART,
  BUY__PRODUCT
} from './actionsTypes'

export function addToCart (product) {
  return {
    type: ADD__TO__CART,
    id: product.id,
    payload: product
  }
}
export function moreProductCart (product) {
  return {

    type: CHANGE__ITEM__QT,
    id: product.id,
    payload: product
  }
}
export function lessProductCart (product) {
  return {
    type: REMOVE__ITEM__FROM__CART,
    id: product.id
  }
}
export function excludeFromCart (product) {
  return {
    type: EXCLUDE__ITEM__FROM__CART,
    id: product.id
  }
}
export function bayProducts () {
  return {
    type: BUY__PRODUCT
  }
}
