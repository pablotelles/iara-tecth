import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'

export const TagOnCart = ({ cart, product }) => {
  const validationProduct = cart.some(item => item.id === product.id) === true
  if (validationProduct) {
    return (
        <div className='tag-cart'>
            <p className='tag-cart__text'>QUERO ESSE!</p>
        </div>
    )
  }
}

TagOnCart.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired
}
