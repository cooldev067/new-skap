"use client";

import React, { createContext, useContext, useState } from "react";

// Create a context
const DialogContext = createContext();

// Create a provider component
export function DialogProvider({ children }) {
  const [open, setOpen] = useState(false);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (!existingProduct) {
      // Add product to cart if it doesn't exist already
      setCart((prevCart) => [...prevCart, product]);
    } else {
      console.log("Product already in the cart");
    }
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
