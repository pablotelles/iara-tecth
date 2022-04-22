import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Cart from './pages/Cart/Cart/Cart'
import { Home } from './pages/Home/Home'
import { ThanksForBuy } from './pages/ThanksForBuy/ThanksForBuy'

export const RoutesApp = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/thanks' element={<ThanksForBuy />} />
        </Routes>
      </BrowserRouter>

  )
}
