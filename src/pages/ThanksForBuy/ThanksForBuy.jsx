import React from 'react'
import deliveryImage from '../../assets/images/delivery.gif'
import './style.scss'

export const ThanksForBuy = () => {
  return (
        <div className='load-delivery'>
            <h1 className='load-delivery__texte'>Seu pedido está sendo preparado</h1>
            <img className='load-delivery__image' src={deliveryImage} alt="" />
            <h2><a href='/'>ir para Home</a></h2>
        </div>
  )
}
