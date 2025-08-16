import React from 'react'
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext'
import ProductCard from '../components/ProductCard/ProductCard'
const Wishlist = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-26">
        <h1 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h1>
        <p className="text-gray-500 mb-8">You haven't added any products to your wishlist yet.</p>
        <Link to="/products" className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-rose-400 hover:rounded-full border-1 hover:duration-300 ease-out ">
          Add Your Favourite Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-26">
      <h1 className="text-3xl font-bold text-center mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {wishlist.map(product => (
          <ProductCard key={product.id} product={product} page='wishlist'/>
        ))}
      </div>
    </div>
  );
};

export default Wishlist