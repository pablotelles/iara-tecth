import React from 'react'
import './style.scss'
import { handlerAddProduct } from '../../pages/Cart/handlerCart'
import { connect } from 'react-redux'

const Drinks = (drinks) => {
  const drinksData = drinks.products.drinksData
  return (
    <section className='drinks'>
      <div className='drinks__header'>
        <h3 className='drinks__title'>Destilados e Drinks</h3>
        <p>Ver todos</p>
      </div>
      <div className='drinks__list'>
        {drinksData.slice(0, 7).map(drink => (
          <article className='drinks__item' key={drink.id}>
            <div className='drinks__banner'>
              <img className='drinks__image' src={drink.image} alt="" />
              <p
                className='drins__addCart'
                onClick={() => handlerAddProduct(drink)}
              >+</p>
            </div>
            <div className='drinks__infos'>
              <p className='drinks__infos--price'>{drink.price}</p>
              <p className='drinks__infos--title'>{drink.name}</p>
              <p className='drinks__infos--description'>{drink.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
const mapStateToProps = state => {
  return {
    products: state.product
  }
}

export default connect(mapStateToProps)(Drinks)
