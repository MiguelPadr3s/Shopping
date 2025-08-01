import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  // add item to cart
  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    product.quantity = product.quantity || 1;
    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // remove quantity

  const removeQuantity = (productId) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === productId
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity -= 1;
      if (updatedItems[existingItemIndex].quantity === 0) {
        removeFromCart(productId);
      } else {
        setCartItems(updatedItems);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, removeQuantity}}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
