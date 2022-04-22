import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import Cart from './pages/Cart/Cart'
import { Home } from './pages/Home/Home'

export const RoutesApp = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>

  )
}
