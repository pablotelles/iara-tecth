const ADD = 'ADD'
// const REMOVE = 'REMOVE'

export function addToCart (pizza) {
  return {
    type: ADD,
    payload: pizza
  }
}
