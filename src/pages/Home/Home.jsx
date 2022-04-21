import React from 'react'
import { Menu } from '../../components/Menu/Pizza/Menu'
import { Drinks } from '../../components/Drinks/Drinks'
import './style.scss'

export const Home = () => {
  return (
    <main>
      <Menu />
      <Drinks />
    </main>
  )
}
