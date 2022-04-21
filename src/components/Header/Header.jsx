import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import './style.scss'
import { cartStore } from '../../globalData/cartStore'

export const Header = () => {
  const [cartItens, setCartItens] = useState(cartStore.getState().cart.length)
  cartStore.subscribe(() => setCartItens(cartStore.getState().cart.length))

  return (
    <header className='d-flex justify-content-between align-items-center m-3'>
        <img src={logo} alt="" />
        <div className='d-flex gap-4'>
        <button type="button" className="btn btn__ponts">Pontos: 0</button>
        <button
          type="button"
          className="btn btn-primary position-relative"
          onClick={() => { window.location.href = '/cart' }}
        >
          Carrinho
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItens}
          <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        </div>

    </header>
  )
}
