import React from 'react'
import { GrAdd as AddCartIcon } from 'react-icons/gr'
import { AiFillStar as RateIcon } from 'react-icons/ai'
import { BsCheckLg as CartCheck } from 'react-icons/bs'
import PropTypes from 'prop-types'
import { addProduct } from '../../../../globalData/handlerCart'
import propTypes from 'eslint-plugin-react/lib/rules/prop-types'

export const Pizza = ({ pizza }) => {
  return (
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
  )
}
Pizza.defaultProps = { pizza: {} }

Pizza.propTypes = {
  pizza: PropTypes.exact({
    id: propTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    image: propTypes.string,
    rate: PropTypes.string,
    promotionDay: PropTypes.bool
  })
}
