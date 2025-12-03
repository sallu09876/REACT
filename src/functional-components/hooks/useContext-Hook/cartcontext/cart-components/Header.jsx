import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const Header = () => {

  const { cart } = useContext(CartContext);

  const totalqty = cart.reduce((sum, item) => sum + item.qty, 0);

  const totalprice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <header className='header'>
      <h1>My Shopping Cart</h1>  
      <div className='summary'>
        <p>Items: { totalqty }</p>
        <p>Price: { totalprice }</p>
      </div>
    </header>
  )
}

export default Header
