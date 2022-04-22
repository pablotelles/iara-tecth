import React from 'react'
import { Buy } from '../handlerCart'
import './style.scss'

export const BuyProducts = () => {
  return (
      <div className='buy__button--container'>
        <button type="button" className="btn btn-primary btn-lg buy__button"
            onClick={() => {
              Buy()
              window.location.href = '/thanks'
            }}
        >Finalizar compra</button>
    </div>
  )
}
