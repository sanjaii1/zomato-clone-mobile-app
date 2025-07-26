// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const placeOrder = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setOrderHistory((prev) => [...prev, { items: cartItems, total }]);
    setCartItems([]);
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, orderHistory, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
};
