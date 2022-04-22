import './style.scss'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { connect } from 'react-redux'
import { cartStore } from '../../globalData/cartStore'

export const Header = (products) => {
  cartStore.subscribe(() => console.log(cartStore.getState()))

  return (
    <header className='d-flex justify-content-between align-items-center m-2'>
        <img className='logo' src={logo} alt="lodo so site" />
        <div className='d-flex gap-4'>
        <button type="button" className="btn btn__ponts">Pontos: 0</button>
        <button
          type="button"
          className="btn btn-primary position-relative"
          onClick={() => { window.location.href = '/cart' }}
        >
          Carrinho
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {/* {cartItens} */}
          <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        </div>
    </header>
  )
}
const mapStateToProps = state => {
  return {
    products: state.cart
  }
}

export default connect(mapStateToProps)(Header)
