import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'

const Home = () => {
    return (
        <main className='flex-grow'>
            <section className='bg-gray-100 text-center py-20 md:py-32'>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to ShopKart</h1>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Your one-stop destination for the latest trends and timeless classics.</p>
                <button className="bg-black text-white font-bold py-3 px-10 rounded-full hover:bg-gray-700 hover:cup transition duration-300">Explore Products</button>
            </section>
            <section className="py-16">
                <h2 className="text-4xl font-bold text-center mb-10">Featured Products</h2>
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>
        </main>
    )
}

export default Home