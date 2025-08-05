import React from 'react'
import {FaUserCircle} from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-gray-100 text-black px-6 py-3'>
            <div className='flex items-center gap-8'>
                <div className='logo hover:cursor-pointer'>
                    <h3 className='text-xl font-bold'>ShopKart</h3>
                </div>
                <ul className='hidden md:flex  list-none gap-4 mx-4  hover:cursor-pointer'>
                    <li className='hover:text-gray-400 hover:cursor-pointer font-semibold '>Home</li>
                    <li className='hover:text-gray-400 hover:cursor-pointer font-semibold '>Products</li>
                    <li className='hover:text-gray-400 hover:cursor-pointer font-semibold '>Cart</li>
                </ul>
            </div>
            <div className='flex items-center gap-4'>
                <div className='font-semibold hidden sm:block hover:text-gray-400 hover:cursor-pointer'>
                    <span>User</span>
                </div>
                <div>
                <FaUserCircle size={28} className='hover:cursor-pointer'/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar