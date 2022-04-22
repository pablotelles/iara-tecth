import React from 'react'
import { RoutesApp } from './routes'
import { Provider } from 'react-redux'
import { cartStore } from './globalData/cartStore'

function App () {
  return (
    <Provider store={cartStore}>
      <RoutesApp />
    </Provider>
  )
}

export default App
