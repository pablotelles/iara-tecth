import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'
import { handlerAddProduct, handlerRemoveProduct } from '../../../../pages/Cart/handlerCart'
import { GrAdd as AddCartIcon } from 'react-icons/gr'
import { BsCheckLg as CartCheck, BsTrash as RemoveCartIcon } from 'react-icons/bs'

export const AddToCard = ({ cart, product }) => {
  const validationProduct = cart.some(item => item.id === product.id) === true
  console.log(validationProduct)

  return (
    cart.some(item => item.id === product.id) === true
      ? (
        <>
          <CartCheck
            className='menu__item--addCart menu__item--cartCheck'
          />
          <RemoveCartIcon
            className='menu__item--remove'
            onClick={() => handlerRemoveProduct(product)}
          />
        </>
        )

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

// {cart.some(item => item.id === idProduct) === true
//     ? (<CartCheck
//       className='menu__item--addCart menu__item--cartCheck'
//       />)
//     : <AddCartIcon
//       className='menu__item--addCart'
//       onClick={() => {
//         const newProduct = Object.assign({}, idProduct)
//         handlerAddProduct(newProduct)
//       }}
//       />}
