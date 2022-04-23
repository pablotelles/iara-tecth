import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'
import { handlerAddProduct } from '../../../../pages/Cart/handlerCart'
import { GrAdd as AddCartIcon } from 'react-icons/gr'
import { BsCheckLg as CartCheck } from 'react-icons/bs'

export const AddToCard = ({ cart, product }) => {
  return (
    cart.some(item => item.id === product.id) === true
      ? (<CartCheck
                  className='menu__item--addCart menu__item--cartCheck'
                  />)
      : <AddCartIcon
                  className='menu__item--addCart'
                  onClick={() => {
                    const newProduct = Object.assign({}, product)
                    handlerAddProduct(newProduct)
                  }}
                  />
  )
}

AddToCard.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired
}
