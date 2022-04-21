import React from 'react'
import { Filter } from '../Filter/Filter/Filter'
import './style.scss'
import menuPizzas from '../../../data/pizzas.json'
import { GrAdd as AddCartIcon } from 'react-icons/gr'
import { AiFillStar as RateIcon } from 'react-icons/ai'
import { BsCheckLg as CartCheck } from 'react-icons/bs'
import { addProduct } from '../../../globalData/handlerCart'

export const Menu = () => {
  return (
    <div className='menu'>
      <Filter />
      <div className='menu__list'>
        {menuPizzas.map((pizza, index) => (
          <article className={pizza.promotionDay ? 'promotionDay menu__item' : 'menu__item'} key={pizza.id}>
            <img className='menu__item--image' src={pizza.image} alt={'foto' + pizza.name} />
            <div className='menu__item--infos'>
              <div className='menu__item--rate'>
                <RateIcon className='rate__icon'/>
                <p className='rate__value'>{pizza.rate}</p>
              </div>
                <h4 className='menu__item--title'>{pizza.name}</h4>
                <p className='menu__item--description'>{pizza.description.substring(0, 35)}...</p>
              <div className='menu__item--content'>
                <p className='menu__item--price'>{pizza.price}</p>
                <AddCartIcon
                  className='menu__item--addCart'
                  onClick={() => addProduct(pizza)}
                />
                <CartCheck className=' menu__item--addCart menu__item--cartCheck' />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>

  )
}
