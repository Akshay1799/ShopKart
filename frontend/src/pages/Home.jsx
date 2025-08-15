import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import { Link } from 'react-router-dom';
import { useFilter } from '../context/FilterContext';
import { useProduct } from '../context/ProductContext';

const Home = () => {    
    // const {cart} = useCart();
    const{searchTerm} = useFilter();
    const {products, loading} = useProduct();
    
    
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const featuredProducts = filteredProducts.slice(0, 4);
    const moreProducts = filteredProducts.slice(4, 16)

    if (loading) {
        return <div className='text-center py-10'>Loading Products...</div>
    }
    return (
        <div>
            <section className='text-center py-20 md:py-32 bg-gradient-to-t'>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-linear-to-r from-pink-500 to-violet-500 leading-normal">Welcome to <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent '>ShopKart</span></h1>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Your one-stop destination for the latest trends and timeless classics.</p>
                <Link to={"/products"} className="bg-black text-white font-bold py-3 px-10 rounded-full hover:cup transition duration-300 hover:bg-white hover:text-rose-400 hover:rounded-full border-1 hover:duration-400 ease-out ">Explore Products</Link>
            </section>
            <section className="py-16">
                <h2 className="text-4xl font-bold text-center mb-10">Featured Products</h2>
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {featuredProducts.map(item =>(
                        <ProductCard key={item.id} product={item}/>
                    ))}
                </div>
            </section>
            <section className="py-16">
                <h2 className="text-4xl font-bold text-center mb-10">More For You</h2>
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {moreProducts.map(item =>(
                        <ProductCard key={item.id} product={item}/>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home