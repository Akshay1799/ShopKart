import React from 'react'
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa"
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-gray-100 text-black px-6 py-3'>

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
                <div className='font-semibold hidden sm:block hover:text-gray-600 hover:cursor-pointer text-2xl'>
                    <span>< CiHeart /></span>
                </div>
                <div className='font-semibold hidden sm:block hover:text-gray-600 hover:cursor-pointer text-2xl'>
                    <span>< BsCart4 /></span>
                </div>
                <div>
                    <FaUserCircle size={28} className='hover:cursor-pointer' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar