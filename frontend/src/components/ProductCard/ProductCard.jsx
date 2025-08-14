//ProductCard.jsx
import React from 'react'
import { useCart } from '../../context/CartContext'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import { IoClose } from "react-icons/io5";
import { useWishlist } from '../../context/WishlistContext';

const ProductCard = ({ product, page = 'home' }) => {

    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist, removeFromWishlist } = useWishlist();

    return (
        <div className="relative border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <div className="absolute top-3 right-3">
                {/*  Yahan hum check kar rahe hain ki card kaunse page par hai */}
                {page === 'wishlist' ? (
                    // Agar 'wishlist' page par hai, toh Cross icon dikhao
                    <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="p-1 rounded-full hover:bg-gray-200"
                    >
                        <IoClose size={28} className="cursor-pointer text-gray-700 hover:text-black" />
                    </button>
                ) : (
                    // Warna (home/products page par), Heart icon dikhao
                    <button
                        onClick={() => toggleWishlist(product)}
                        className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        {isInWishlist(product.id) ? (
                            <FaHeart size={24} className="cursor-pointer text-red-500" />
                        ) : (
                            <CiHeart size={24} className="cursor-pointer text-gray-700" />
                        )}
                    </button>
                )}
            </div>

            <div className='w-full h-48 p-2 mb-4 rounded-md bg-white'>
                <img className='w-full h-full object-contain' src={product.image} alt={product.title} />
            </div>
            <div className="flex-grow flex flex-col text-center">
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <h3 className="text-lg font-bold mb-2 flex-wrap flex-grow">{product.title}</h3>
                <p className="text-xl font-semibold mb-4">${product.price}</p>
                <button onClick={() => addToCart(product)} className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-700 focus:outline-gray-500 hover:cursor-pointer">Add to cart</button>
            </div>

        </div>
    )
}

export default ProductCard