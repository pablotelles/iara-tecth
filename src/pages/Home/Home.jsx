import './style.scss'
import React from 'react'
import { Menu } from '../../components/Menu/Pizza/Menu/Menu'
import { Drinks } from '../../components/Drinks/Drinks'

export const Home = () => {
  return (
    <main>
      <Menu />
      <Drinks />
    </main>
  )
}
