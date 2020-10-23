import React, { useReducer, useContext, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ reducer, initialState, children }) => (
  <CartContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CartContext.Provider>
);

export const useStateValue = () => useContext(CartContext);
