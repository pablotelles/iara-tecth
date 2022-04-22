import React from 'react'
import { GrAdd as AddCartIcon } from 'react-icons/gr'
import { IoMdRemove as RemoveCartIcon } from 'react-icons/io'
import { handlerAddProduct, handlerRemoveProduct } from './handlerCart'
import { connect } from 'react-redux'

import './style.scss'

const Cart = (products) => {
  const cartTotal = products.products.reduce(getTotal, 0)
  function getTotal (cartTotal, item) {
    return cartTotal + (item.price * item.qt)
  }

  return (
    <section className='cart'>
      <h1>R$ {cartTotal}</h1>
      {products.products.map(product => (
        <article className='cart__item' key={product.id}>
            <img className='cart__item--image' src={product.image} alt="" />
            <div className='cart__item--content'>
              <h3 className='cart__item--title'>{product.name}</h3>
              <p className='cart__item--description'>{product.description}</p>
            </div>
            <p className='cart__item--price'>{product.price * product.qt}</p>
            <div className='cart__item--change'>
              <AddCartIcon className='item__change--add'
                onClick={() => handlerAddProduct(product)}
              />
              <p>{product.qt}</p>
              <RemoveCartIcon
                className='item__change--remove'
                onClick={() => handlerRemoveProduct(product)}
              />
            </div>
        </article>
      ))}

    </section>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    products: state.cart
  }
}

export default connect(mapStateToProps)(Cart)
