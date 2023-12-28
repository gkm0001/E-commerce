import React, { createContext, useReducer } from "react";
import { CartReducer, INITIAL_STATE } from "./CartReducer"

export const CartContext = createContext({
  cart: [INITIAL_STATE],
  setCart: () => CartReducer
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useReducer(CartReducer, INITIAL_STATE);
  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};
