import React from 'react'
import { createContext, useContext, useState } from 'react'

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (product) => {

        const existingProduct = wishlist.find(item => item.id === product.id);

        if (existingProduct) {
            setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== product.id));

        } else {
            setWishlist(prevWishlist => [...prevWishlist, product]);

        }
    }

    const isInWishlist = (productId) => {
        return wishlist.some(item => item.id === productId)
    }

    const removeFromWishlist = (productId) => {
        setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId));
        console.log(`Item with id: ${productId} removed from wishlist.`);
    }

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => {
    return useContext(WishlistContext)
}