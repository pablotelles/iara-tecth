export function validationProduct ({ product, cart, setStyleItem }) {
  const validationProduct = cart.some(item => item.id === product) === true
  if (validationProduct) {
    setStyleItem('menu__item onCart')
  } else {
    setStyleItem('menu__item')
  }
}
