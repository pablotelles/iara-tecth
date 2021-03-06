import React from 'react'
import { Filter } from '../../Filter/Filter/Filter'
import './style.scss'
import { AiFillStar as RateIcon } from 'react-icons/ai'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TagOnCart from '../Tags/TagOnCart'
import TagPromotionDay from '../Tags/TagPromotionDay'
import ProductPrice from '../ProductPrice/ProductPrice'

const Menu = ({ products, cart }) => {
  return (
    <div className='menu'>
      <Filter />
      <div className='menu__list'>
        {products.slice(0, 6).map((product) => (
          <article className={cart.some(item => item.id === product.id)
            ? 'onCart menu__item'
            : product.promotionDay ? 'menu__item promotionDay' : 'menu__item' } key={product.id}>
            <TagOnCart product={product} />
            <TagPromotionDay product={product} />
            <img className='menu__item--image' src={product.image} alt={'foto' + product.name} />
            <div className='menu__item--infos'>
              <div className='menu__item--rate'>
                <RateIcon className='rate__icon'/>
                <p className='rate__value'>{product.rate}</p>
              </div>
              <h4 className='menu__item--title'>{product.name}</h4>
              <p className='menu__item--description'>{product.description.substring(0, 35)}...</p>
              <ProductPrice product={product} />
            </div>
          </article>
        ))}
      </div>
    </div>

  )
}
Menu.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.array
}

const mapStateToProps = state => {
  return {
    products: state.product.pizzasData,
    cart: state.cart
  }
}
export default connect(mapStateToProps)(Menu)
