"use client";

import React, { createContext, useContext, useState } from "react";

// Create a context
const DialogContext = createContext();

// Create a provider component
export function DialogProvider({ children }) {
  const [open, setOpen] = useState(false);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      console.log("Previous Cart:", prevCart);
      const isProductInCart = prevCart.some((item) => item.id === product.id);

      if (isProductInCart) {
        console.log("Product is already in the cart");
        return prevCart;
      }

      console.log("Adding Product to Cart:", product); // Debug statement
      return [...prevCart, product];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <DialogContext.Provider
      value={{ open, setOpen, cart, setCart, addToCart, removeFromCart }}
    >
      {children}
    </DialogContext.Provider>
  );
}

// Custom hook to use the DialogContext
export function useDialog() {
  return useContext(DialogContext);
}
