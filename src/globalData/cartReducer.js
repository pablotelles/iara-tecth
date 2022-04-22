import {
  ADD__TO__CART,
  CHANGE__ITEM__QT,
  REMOVE__ITEM__FROM__CART,
  EXCLUDE__ITEM__FROM__CART
} from './actionsTypes'

const initialState = {
  cart: []
}

export const cartReducer = (cartState = initialState, action) => {
  switch (action.type) {
    case ADD__TO__CART: console.log('reducer - add')
      return {
        ...cartState,
        cart: [...cartState.cart, action.payload]
      }
    case CHANGE__ITEM__QT: console.log('reducer - change')
      return {
        ...cartState,
        cart: [...cartState.cart.map(item => item.id === action.id ? { ...item, qt: item.qt + 1 } : item)]
      }
    case REMOVE__ITEM__FROM__CART: console.log('reducer - remove')
      return {
        ...cartState,
        cart: [...cartState.cart.map(item => item.id === action.id ? { ...item, qt: item.qt - 1 } : item)]
      }
    case EXCLUDE__ITEM__FROM__CART: console.log('reducer - remove')
      return {
        ...cartState,
        cart: [...cartState.cart.filter(item => item.id !== action.id)]
      }
    default: return cartState
  }
}
