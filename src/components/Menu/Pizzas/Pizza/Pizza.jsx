import React from 'react'
import { GrAdd as AddCartIcon } from 'react-icons/gr'
import { AiFillStar as RateIcon } from 'react-icons/ai'
import { BsCheckLg as CartCheck } from 'react-icons/bs'
import PropTypes from 'prop-types'
import { addProduct } from '../../../../globalData/handlerCart'
import propTypes from 'eslint-plugin-react/lib/rules/prop-types'

export const Product = ({ product }) => {
  return (
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
                  onClick={() => addProduct(product)}
                />
                <CartCheck className=' menu__item--addCart menu__item--cartCheck' />
              </div>
            </div>
          </article>
  )
}
Product.defaultProps = { product: {} }

Product.propTypes = {
  product: PropTypes.exact({
    id: propTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    image: propTypes.string,
    rate: PropTypes.string,
    promotionDay: PropTypes.bool
  })
}
