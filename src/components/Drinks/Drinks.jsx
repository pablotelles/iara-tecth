import React from 'react'
import './style.scss'
import drinksData from '../../data/drinks.json'

export const Drinks = () => {
  return (
        <section className='drinks'>
          <div className='drinks__header'>
            <h3 className='drinks__title'>Destilados e Drinks</h3>
            <p>Ver todos</p>
          </div>
          <div className='drinks__list'>
            {drinksData.map(drink => (
              <article className='drinks__item' key={drink.id}>
                <div className='drinks__banner'>
                  <img className='drinks__image' src={drink.image} alt="" />
                  <p className='drins__addCart'>+</p>
                </div>
                <div className='drinks__infos'>
                  <p className='drinks__infos--price'>{drink.price}</p>
                  <p className='drinks__infos--title'>{drink.name}</p>
                  <p className='drinks__infos--description'>{drink.description}</p>
                </div>
            </article>
            ))}

          </div>
        </section>
  )
}
