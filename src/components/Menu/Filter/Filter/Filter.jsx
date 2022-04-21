import React, { useState } from 'react'
import './filter.scss'
import { FilterInfos } from '../FilterInfos/FilterIfons'

export const Filter = () => {
  const [menuType, setMenuType] = useState('Recheio')
  return (
    <>
      <div className='filter'>
        <button
          type='button'
          className='filter__button filter__button--firt'
          autoFocus
          value='Recheio'
          onClick={(ev) => setMenuType(ev.target.value)}
          >Recheio</button>
        <button
          className='filter__button'
          value='Massa'
          onClick={(ev) => setMenuType(ev.target.value)}
          >Massa</button>
        <button
          className='filter__button'
          value='Tamanho'
          onClick={(ev) => setMenuType(ev.target.value)}
        >Tamanho</button>
        <button
          className='filter__button filter__button--last'
          value='Ingredientes'
          onClick={(ev) => setMenuType(ev.target.value)}
        >Ingredientes</button>
      </div>
      <>
        <FilterInfos menuType={menuType} />
      </>
    </>
  )
}
