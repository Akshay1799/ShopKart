import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import { Link } from 'react-router-dom';
import { useFilter } from '../context/FilterContext';

const Home = () => {
    const{searchTerm} = useFilter();

    const featuredProducts = [
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack",
            price: 109.95,
            category: "men's clothing",
            image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwYXJlbHxlbnwwfDF8MHx8fDA%3D",
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts",
            price: 22.3,
            category: "men's clothing",
            image: "https://images.unsplash.com/photo-1643881080002-afdc695936e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTJ8V1pRbVA2cmVSbmN8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            title: "Mens Cotton Jacket",
            price: 55.99,
            category: "men's clothing",
            image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwYXJlbHxlbnwwfDF8MHx8fDA%3D",

        },
        {
            id: 4,
            title: "Mens Casual Slim Fit",
            price: 15.99,
            category: "men's clothing",
            image: "https://images.unsplash.com/photo-1643881080002-afdc695936e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTJ8V1pRbVA2cmVSbmN8fGVufDB8fHx8fA%3D%3D",

        },
    ];

    const filteredFeaturedProducts = featuredProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div>
            <section className=' text-center py-20 md:py-32 bg-gradient-to-t'>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 ">Welcome to <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-normal'>ShopKart</span></h1>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Your one-stop destination for the latest trends and timeless classics.</p>
                <Link to={"/products"} className="bg-black text-white font-bold py-3 px-10 rounded-full hover:cup transition duration-300 hover:bg-white hover:text-rose-400 hover:rounded-full border-1 hover:duration-400 ease-out ">Explore Products</Link>
            </section>
            <section className="py-16">
                <h2 className="text-4xl font-bold text-center mb-10">Featured Products</h2>
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredFeaturedProducts.map(item =>(
                        <ProductCard key={item.id} product={item}/>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home