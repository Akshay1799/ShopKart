//ProductPage.jsx
import React from 'react'
import { useFilter } from '../context/FilterContext'
import ProductCard from '../components/ProductCard/ProductCard'
import { useProduct } from '../context/ProductContext'

const ProductPage = () => {
    
    const {products, loading} = useProduct();
    const { searchTerm, category } = useFilter();

    const filterProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    })

    if (loading) {
        return <div className='text-center py-10'>Loading Products...</div>
    }
    return (
        <div className='container mx-auto px-4 py-26'>
            <h1 className="text-4xl font-bold text-center mb-10">All Products</h1>

            {filterProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filterProducts.map(product => (
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