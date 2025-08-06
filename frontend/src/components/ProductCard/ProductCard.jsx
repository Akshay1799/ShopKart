import React from 'react'
// import img from '../../assets/frontend_assets/p_img1.png'
const ProductCard = ({product}) => {
    return (
        <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <div className='w-full h-48 p-2 mb-4 rounded-md bg-white'>
                <img className='w-full h-full object-contain' src={product.image} alt={product.title} />
            </div>
            <div className="flex-grow flex flex-col text-center">
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-lg font-bold mb-2 flex-wrap flex-grow">{product.title}</h3>
                <p className="text-xl font-semibold mb-4">{product.price}</p>
                <button  className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard