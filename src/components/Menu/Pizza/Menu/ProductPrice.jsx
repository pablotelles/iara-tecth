import React from 'react'
import { AddToCard } from './AddToCard'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const ProductPrice = ({ product, cart }) => {
  const validationPromotion = product.promotionDay
  const promotionDiscount = product.price * 0.20

  return (
        <div className='menu__item--content'>
            <div className='menu__item--content--price'>
                <p className={validationPromotion
                  ? 'menu__item--price menu__item--old-price'
                  : 'menu__item--price'}>{product.price}</p>
                <p className={validationPromotion
                  ? 'menu__item--price menu__item__promotion--price-show'
                  : 'menu__item--price menu__item__promotion--price-hide'}>{product.promotionDay ? product.price - promotionDiscount : ''}</p>
            </div>
            <AddToCard cart={cart} product={product} />
        </div>
  )
}
ProductPrice.propTypes = {
  product: PropTypes.object,
  cart: PropTypes.array
}

const mapStateToProps = state => {
  return {
    products: state.product.pizzasData,
    cart: state.cart
  }
}
export default connect(mapStateToProps)(ProductPrice)
