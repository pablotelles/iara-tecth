import React from 'react'
import { BsCheckLg as CartCheck } from 'react-icons/bs'
import { handlerAddProduct } from '../../../../pages/Cart/handlerCart'
import { GrAdd as AddCartIcon } from 'react-icons/gr'
import { connect } from 'react-redux'

export const ButtonsMenu = (product) => {
  return (
    <div className='menu__item--content'>
        <p className='menu__item--price'>{product.price}</p>
        <AddCartIcon
          className='menu__item--addCart'
          onClick={() => {
            handlerAddProduct(product)
          }}
        />
        <CartCheck className='menu__item--addCart menu__item--cartCheck menu__item--cart' />
    </div>
  )
}
const mapStateToProps = state => {
  console.log(state)
  return {
    products: state.cart
  }
}

export default connect(mapStateToProps)(ButtonsMenu)
