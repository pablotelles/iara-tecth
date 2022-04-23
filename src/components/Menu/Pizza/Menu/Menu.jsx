import React from 'react'
import { Filter } from '../../Filter/Filter/Filter'
import './style.scss'
import { AiFillStar as RateIcon } from 'react-icons/ai'
import { GrAdd as AddCartIcon } from 'react-icons/gr'
import { BsCheckLg as CartCheck } from 'react-icons/bs'
import { handlerAddProduct } from '../../../../pages/Cart/handlerCart'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Menu = ({ products, cart }) => {
  console.log(cart)
  return (
    <div className='menu'>
      <Filter />
      <div className='menu__list'>
        {products.slice(0, 6).map((product) => (
          <article className={product.promotionDay ? 'promotionDay menu__item' : 'menu__item'} key={product.id}>
            <img className='menu__item--image' src={product.image} alt={'foto' + product.name} />
            <div className='menu__item--infos'>
              <div className='menu__item--rate'>
                <RateIcon className='rate__icon'/>
                <p className='rate__value'>{product.rate}</p>
              </div>
              <h4 className='menu__item--title'>{product.name}</h4>
              <p className='menu__item--description'>{product.description.substring(0, 35)}...</p>
              <div className='menu__item--content'>
                  <p className='menu__item--price'>{product.price}</p>
                  {/* {
                    cart.includes(product) === false && (<CartCheck />)
                  } */}

                  {cart.some(item => item.id === product.id) === true
                    ? (<CartCheck />)
                    : <AddCartIcon
                      className='menu__item--addCart'
                      onClick={() => {
                        const newProduct = Object.assign({}, product)
                        handlerAddProduct(newProduct)
                      }}
                      />}

                  {/* {cart.some(item => item.id === product.id &&
                      <CartCheck /> :
                      <AddCartIcon
                      className='menu__item--addCart'
                      onClick={() => {
                        handlerAddProduct(product)
                      }}
                    />
                    )} */}

              </div>
            </div>
          </article>
        ))}
      </div>
    </div>

  )
}
Menu.propTypes = {
  products: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    products: state.product.pizzasData,
    cart: state.cart
  }
}
export default connect(mapStateToProps)(Menu)
