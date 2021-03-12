import React, { createContext, useState } from 'react'

export const CartContext = createContext({})

export function CartProvider({ children }) {
  const [onCart, setOnCart] = useState([102, 99])

  function addToCart(id) {
    setOnCart([...onCart, id])
  }

  function removeFromCart(id) {
    const updatedList = onCart.filter(item => item !== id)
    setOnCart(updatedList)
  }

  return (
    <CartContext.Provider
      value={{
        onCart,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
