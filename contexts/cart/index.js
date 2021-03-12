import React, { createContext, useState } from 'react'

export const CartContext = createContext({})

export function CartProvider({ children }) {
  const [onCart, setOnCart] = useState([])

  function addToCart(id) {
    setOnCart([...onCart, id])
  }

  function removeFromCart(id) {
    const updatedList = onCart.filter(item => item !== id)
    setOnCart(updatedList)
  }

  function clearCart() {
    setOnCart([])
  }

  return (
    <CartContext.Provider
      value={{
        onCart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
