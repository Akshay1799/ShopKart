//ProductPage.jsx
import React from 'react'
import { useState, useEffect } from 'react'
import { useFilter } from '../context/FilterContext'
import ProductCard from '../components/ProductCard/ProductCard'

const ProductPage = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { searchTerm } = useFilter();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.in/api/products');
                const data = await response.json();
                setProducts(data.products)
            } catch (error) {
                console.error('Failed to fetch products ', error);
            } finally {
                setLoading(false);
            }

        }
        fetchProducts();

    }, [])

    const fiterProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))

    if (loading) {
        return <div className='text-center py-10'>Loading Products...</div>
    }
    return (
        <div className='container mx-auto px-4 py-8'>
            
            <h1 className="text-4xl font-bold text-center mb-10">All Products</h1>
            {fiterProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {fiterProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10 text-xl">
                    No products found matching your search "{searchTerm}.
                </p>
            )}

        </div>
    )
}

export default ProductPage