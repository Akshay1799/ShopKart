import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div className='text-center py-20'>
                <h1 className='text-3xl font-bold mb-4'>Your cart is empty</h1>
                <p className='text-gray-500 mb-8'>Looks like you haven't added anything to cart yet.</p>
                <Link to={'/products'} className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-rose-400 hover:rounded-full border-1 hover:duration-300 ease-out ">Continue Shopping</Link>
            </div>
        )

    }

    return (
            <div className="container mx-auto max-w-4xl px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>

                <div className="flex flex-col gap-6">
                    {cart.map(item => (
                        
                        <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white shadow-lg rounded-lg border">

                            {/*  Left side: Image, Title, Price  */}
                            <div className="flex items-center gap-5">
                                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain rounded" />
                                <div className="flex-grow">
                                    <h2 className="text-lg font-semibold ">{item.title}</h2>
                                    <p className="text-xl text-gray-800 font-semibold mt-1">${item.price}</p>
                                </div>
                            </div>

                            {/*  Right side: Quantity and Remove button  */}
                            <div className="flex items-center gap-8 mt-4 sm:mt-0">
                                <div className="flex items-center gap-4">
                                    <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 border rounded-md hover:bg-gray-100 font-bold hover:cursor-pointer">-</button>
                                    <span className="font-bold text-lg">{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1 border rounded-md hover:bg-gray-100 font-bold hover:cursor-pointer">+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-600  outline-1 rounded-4xl px-4 hover:cursor-pointer hover:bg-gray-50 font-semibold">
                                    Remove
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Total Price Section */}
                <div className="mt-8 pt-6 border-t-2 border-gray-300">
                    <div className="flex justify-between items-center text-xl font-bold">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-500 text-right my-2">Taxes and shipping calculated at checkout.</p>
                    <button className="w-full mt-4 bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-600 text-lg  hover:cursor-pointer">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
    )
}

export default Cart