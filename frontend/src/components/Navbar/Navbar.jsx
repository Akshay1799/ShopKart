import React from 'react'
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
                    <h3 className='text-xl font-bold'>ShopKart</h3>
                </div>
                <ul className='hidden md:flex  list-none gap-6 mx-4  hover:cursor-pointer'>
                    <li className='hover:text-gray-500 hover:cursor-pointer font-semibold '>Home</li>
                    <li className='hover:text-gray-500 hover:cursor-pointer font-semibold '>Products</li>
                    <li className='hover:text-gray-500 hover:cursor-pointer font-semibold '>Cart</li>
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