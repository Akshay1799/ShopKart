import React from 'react'
import img from '../../assets/frontend_assets/p_img1.png'
const ProductCard = () => {
    return (
        <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <div className='w-full h-48 p-2 mb-4 rounded-md bg-white'>
                <img className='w-full h-full object-contain' src={img} alt="Girl model wearing top" />
            </div>
            <div className="flex-grow flex flex-col text-center">
                <p className="text-sm text-gray-500 mb-1">Men's Clothing</p>
                <h3 className="text-lg font-bold mb-2 truncate flex-grow"></h3>
                <p className="text-xl font-semibold mb-4">$109.5</p>
                <button  className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard