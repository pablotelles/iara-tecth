const ADD = 'ADD'
// const REMOVE = 'REMOVE'

const initialState = {
  cart: []
}

export const cartReducer = (cartState = initialState, action) => {
  switch (action.type) {
    case ADD: return {
      ...cartState,
      cart: [...cartState.cart, action.payload]
    }
    default: return cartState
  }
}
