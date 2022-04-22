import React from 'react'
import { Filter } from '../../Filter/Filter/Filter'
import './style.scss'
import pizzas from '../../../../data/pizzas.json'
import { AiFillStar as RateIcon } from 'react-icons/ai'
import { GrAdd as AddCartIcon } from 'react-icons/gr'
import { BsCheckLg as CartCheck } from 'react-icons/bs'
import { handlerAddProduct } from '../../../../pages/Cart/handlerCart'

export const Menu = () => {
  return (
    <div className='menu'>
      <Filter />
      <div className='menu__list'>
        {pizzas.slice(0, 6).map((product) => (
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
                  <AddCartIcon
                    className='menu__item--addCart'
                    onClick={() => {
                      handlerAddProduct(product)
                    }}
                  />
                  <CartCheck className='menu__item--addCart menu__item--cartCheck menu__item--cart' />
                </div>
            </div>
          </article>
        ))}
      </div>
    </div>

  )
}
