// src/pages/CheckoutPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const CheckoutPage = () => {

  const { clearCart } = useCart(); 
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault(); // Form ko submit hone se rokne ke liye
    
    // Yahan aap form validation ya payment logic daal sakte hain
    console.log("Order placed!");
    
    // Cart ko khaali karein
    clearCart();
    
    // Confirmation page par navigate karein
    navigate('/order-confirmation');
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-26">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      
      {/* Simple form UI (non-functional for now) */}
      <div className="bg-white p-8 rounded-lg shadow-xl border">
        <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
        <form onSubmit={handlePlaceOrder}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Aakash Sharma" required/>
          </div>
          <div className="mb-6">
            <label htmlFor="address" className="block text-gray-700 mb-2 font-medium">Address</label>
            <input type="text" id="address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="123, Vijay Nagar, Indore" required/>
          </div>

          {/* Place Order Button */}
          <button 
            type="submit"
            className="w-full mt-4 bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 text-lg transition-colors hover:cursor-pointer"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;