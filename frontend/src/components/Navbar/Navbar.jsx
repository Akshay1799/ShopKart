import React from 'react'
import { useState, useEffect,useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa"
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const { cart } = useCart();
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = useCallback(() => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        } else {
            setVisible(true);
        }
        setLastScrollY(window.scrollY);
    }, [lastScrollY]);
    
    useEffect(() => {

      window.addEventListener('scroll',controlNavbar)
    
      return ()=>{
        window.removeEventListener('scroll', controlNavbar)
      }
      
    }, [controlNavbar])
    
    const totalItems = cart.reduce((total, item)=>total + item.quantity, 0);

    return (
        <nav className={`sticky shadow-md z-50 bg-gray-50 flex justify-between items-center text-black px-6 py-3 ${visible ? 'top-0' : '-top-24'}`}>

            {/* Left side of nav */}
            <div className='flex items-center gap-10'>
                <div className='logo hover:cursor-pointer'>
                    <h3>
                        <Link to='/' className='text-xl font-bold'>ShopKart</Link>
                    </h3>
                </div>
                <ul className='hidden md:flex  list-none gap-6 mx-4  hover:cursor-pointer'>
                    <li>
                        <Link to='/' className='hover:text-gray-500 hover:cursor-pointer font-semibold'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products' className='hover:text-gray-500 hover:cursor-pointer font-semibold '>Products</Link>
                    </li>
                    <li>
                        <Link to='/about' className='hover:text-gray-500 hover:cursor-pointer font-semibold '>About</Link>
                    </li>
                </ul>
            </div>

            {/* Right side of nav */}
            <div className='flex items-center gap-6'>
                <div className="relative w-fit hidden sm:block ">
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-3 pr-4 py-1 rounded-2xl outline-1 outline-gray-300 hover:border-gray-400 hover:bg-white"
                    />
                    <div>
                        <HiMagnifyingGlass className="hover:cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2  font-medium" />
                    </div>
                </div>
                <Link to={'/wishlist'}>
                    <div className='font-semibold hidden sm:block hover:text-gray-600 hover:cursor-pointer text-2xl'>
                        <span>< CiHeart /></span>
                    </div>
                </Link>
                <Link to="/cart" className="relative"> {/* 1. Link ko relative banayein */}
                    <div className='font-semibold hover:text-gray-600 hover:cursor-pointer text-2xl'>
                        <BsCart4 />
                    </div>

                    {/* 2. for the Badge, jo tabhi dikhega jab cart mein items honge */}
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {totalItems}
                        </span>
                    )}
                </Link>
                <div>
                    <FaUserCircle size={28} className='hover:cursor-pointer' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar