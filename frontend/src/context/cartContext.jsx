import React, { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react';

const cartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product)=>{
        console.log("Adding Products...", product.title);
        
        setCart(prevCart =>[...prevCart, product])
    }

  return (
    <cartContext.Provider value={{cart, addToCart}}>
        {children}
    </cartContext.Provider>
  )
}

export const useCart = ()=>{
    return useContext(cartContext);
}

export default cartContext