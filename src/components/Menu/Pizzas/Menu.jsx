import React from 'react'
import { Filter } from '../Filter/Filter/Filter'
import './style.scss'
import menuPizzas from '../../../data/pizzas.json'
import { Pizza } from './Pizza/Pizza'

export const Menu = () => {
  return (
    <div className='menu'>
      <Filter />
      <div className='menu__list'>
        {menuPizzas.map((pizza, index) => (
          <Pizza pizza={pizza} key={index}/>
        ))}
      </div>
    </div>

  )
}
