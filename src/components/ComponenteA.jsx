import React from 'react'
import { useContext } from 'react'
import { CartContext } from './ShoppingCartProvider'

const ComponenteA = () => {
    const {cart, setCart} = useContext (CartContext)
    console.log(cart)
  return (
    <div>ComponenteA</div>
  )
}

export default ComponenteA