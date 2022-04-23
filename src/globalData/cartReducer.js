import {
  ADD__TO__CART,
  CHANGE__ITEM__QT,
  REMOVE__ITEM__FROM__CART,
  EXCLUDE__ITEM__FROM__CART,
  BUY__PRODUCT
} from './actionsTypes'
import pizzas from '../data/pizzas.json'
import drinks from '../data/drinks.json'

const initialState = {
  cart: [],
  product: {
    pizzasData: pizzas,
    drinksData: drinks
  }
}

export const cartReducer = (cartState = initialState, action) => {
  switch (action.type) {
    case ADD__TO__CART:
      return {
        ...cartState,
        cart: [...cartState.cart, action.payload]
      }
    case CHANGE__ITEM__QT:
      return {
        ...cartState,
        cart: [...cartState.cart.map(item => item.id === action.id
          ? { ...item, qt: item.qt + 1 }
          : item)]
      }
    case REMOVE__ITEM__FROM__CART:
      return {
        ...cartState,
        cart: [...cartState.cart.map(item => item.id === action.id
          ? { ...item, qt: item.qt - 1 }
          : item)]
      }
    case EXCLUDE__ITEM__FROM__CART:
      return {
        ...cartState,
        cart: [...cartState.cart.filter(item => item.id !== action.id)]
      }
    case BUY__PRODUCT:
      return initialState
    default: return cartState
  }
}
