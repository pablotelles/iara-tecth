import React from 'react'
import { connect } from 'react-redux'
import { AiOutlineShoppingCart as CartIcon } from 'react-icons/ai'
import './style.scss'

export const CartTotal = (products) => {
  const cartTotal = products.products.reduce(getTotal, 0)
  function getTotal (cartTotal, item) {
    return cartTotal + (item.price * item.qt)
  }
  return (
    <div className='cart-total'>
        <CartIcon className='cart-total__icon' />
        <h1 className='cart-total__title'>{cartTotal}</h1>
    </div>
  )
}
const mapStateToProps = state => {
  console.log(state)
  return {
    products: state.cart
  }
}

export default connect(mapStateToProps)(CartTotal)
