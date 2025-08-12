import React from 'react'
import { useCart } from '../context/cartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart } = useCart();

    if (cart.length === 0) {
        return (
            <div className='text-center py-20'>
                <h1 className='text-3xl font-bold mb-4'>Your cart is empty</h1>
                <p className='text-gray-500 mb-8'>Looks like you haven't added anything to cart yet.</p>
                <Link to={'/products'} className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800">Continue Shopping</Link>
            </div>
        )

    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
            <div className=" flex justify-center items-center gap-4 flex-wrap">
                {cart.map(item => (
                    <div key={item.id} className="flex text-center items-center justify-between py-6 border-1 rounded-2xl ">
                        <div className="flex items-center gap-4 flex-col w-full h-80">
                            <img src={item.image} alt={item.title} className="w-20 h-20 mb-2 object-contain rounded bg-white" />
                            <h2 className="text-lg font-semibold max-w-md mb-4 px-8 text-wrap">{item.title}</h2>
                            <div className='mt-auto'>
                                <p className="text-gray-800 font-bold text-lg mt-1 mb-2">${item.price}</p>
                                <button className="bg-black text-white rounded-2xl px-4 py-2 font-semibold hover:cursor-pointer">Remove</button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Cart