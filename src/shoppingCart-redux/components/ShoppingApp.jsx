import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'

const ShoppingApp = () => {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  )
}

export default ShoppingApp
