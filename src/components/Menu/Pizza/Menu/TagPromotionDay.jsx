import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const TagPromotionDay = ({ cart, product }) => {
  const validationProduct = product.promotionDay === true && cart.some(item => item.id === product.id) === false
  if (validationProduct) {
    return (
        <div className='tag-promotion'>
            <p className='tag-cart__text'>PIZZA DO DIA</p>
        </div>
    )
  }
}

TagPromotionDay.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps)(TagPromotionDay)
