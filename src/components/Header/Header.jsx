import './style.scss'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { connect } from 'react-redux'

const Header = (products) => {
  const valorInicial = 0
  const itemsCart = products.products.reduce(function (total, num) {
    return total + num.qt
  }, valorInicial)

  return (
    <header className='d-flex justify-content-between align-items-center m-3'>
        <img className='logo' src={logo} alt="lodo so site" />
        <div className='d-flex gap-4'>
          <button type="button" className="btn btn__ponts">Pontos: 0</button>
          <button
            type="button"
            className="btn cart__Items btn-primary position-relative"
            onClick={() => { window.location.href = '/cart' }}
          >
            Carrinho
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {itemsCart}
            <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
    </header>
  )
}
const mapStateToProps = state => {
  console.log(state)
  return {
    products: state.cart
  }
}

export default connect(mapStateToProps)(Header)
