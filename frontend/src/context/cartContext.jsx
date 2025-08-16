// src/context/CartContext.jsx

import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (productToAdd) => {
    setCart(prevCart => {

      const existingProduct = prevCart.find(item => item.id === productToAdd.id);

      if (existingProduct) {
        // Agar hai, toh sirf uski quantity badhao
        return prevCart.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 } // Yahan galti nahi hogi kyunki existing product mein quantity hamesha hogi
            : item
        );
      } else {
        // Agar naya hai, toh use quantity: 1 ke saath add karo
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // --- NAYE FUNCTIONS (Agle step ke liye) ---
  const increaseQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0) // Agar quantity 0 ho jaye toh item ko hata do
    );
  };

  const clearCart = () => {
    setCart([]);
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};