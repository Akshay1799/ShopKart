import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
  return (
    <div className="container mx-auto text-center py-26">
      <h1 className="text-4xl font-bold text-green-600">Order Placed Successfully!</h1>
      <p className="mt-4 text-lg text-gray-700">Thank you for your purchase.</p>
      <Link to="/" className="mt-8 inline-block bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-rose-400 hover:rounded-full border-1 hover:duration-300 ease-out ">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;