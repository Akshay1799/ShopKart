// src/pages/CheckoutPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const CheckoutPage = () => {

    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        clearCart();
        navigate('/order-confirmation');
    };

    // Agar user khaali cart ke saath checkout page par aa jaye
    if (cart.length === 0) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
                <p className="text-gray-500">There is nothing to checkout.</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto max-w-6xl px-4 py-26">
            <h1 className="text-4xl font-bold text-center mb-10">Checkout</h1>

            {/* Page ko do grid column me layout kiya */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/*  Left Column: Order Summary  */}
                <div className="bg-white p-8 rounded-lg shadow-xl border order-1 lg:order-1 h-fit">
                    <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
                    <div className="space-y-5">
                        {cart.map(item => (
                            <div key={item.id} className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded border p-1" />
                                    <div>
                                        <p className="font-semibold text-sm leading-tight max-w-xs">{item.title}</p>
                                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <hr className="my-6" />
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <p className="text-gray-600">Subtotal</p>
                            <p className="font-semibold">${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-600">Shipping</p>
                            <p className="font-semibold">Free</p>
                        </div>
                    </div>
                    <hr className="my-6" />
                    <div className="flex justify-between text-xl font-bold">
                        <p>Total</p>
                        <p>${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
                
                {/*  Right Column: Shipping Form  */}
                <div className="bg-white p-8 rounded-lg shadow-xl border order-2 lg:order-2">
                    <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
                    <form onSubmit={handlePlaceOrder}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name</label>
                            <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Aakash Sharma" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="address" className="block text-gray-700 mb-2 font-medium">Address</label>
                            <input type="text" id="address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="123, Vijay Nagar, Indore" required />
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
        </div>
    );
};

export default CheckoutPage;