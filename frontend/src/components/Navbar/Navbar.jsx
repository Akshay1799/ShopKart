import React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa"
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useCart } from '../../context/CartContext';
import { FaBars, FaTimes } from "react-icons/fa";
import { BsBag } from 'react-icons/bs';
import { BsHouse } from 'react-icons/bs';
import { BsInfo } from 'react-icons/bs';
import logo from '/ShopKart_logo.png'
import { useProduct } from '../../context/ProductContext';
import { useFilter } from '../../context/FilterContext';
import ProfilePage from '../../pages/ProfilePage';

const Navbar = () => {
    const { cart } = useCart();
    const navigate = useNavigate();
    const { products } = useProduct()
    const { searchTerm, setSearchTerm, setCategory } = useFilter();

    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    const dropdownRef = useRef(null)

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const categories = ['all', ...new Set(products.map(product => product.category))]


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

        window.addEventListener('scroll', controlNavbar)

        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }

    }, [controlNavbar])

    // To handle click on drop down categories 
    const handleCategoryClick = (category) => {
        setCategory(category);
        navigate('/products');
        setIsDropdownOpen(false);
    }

    // To handle click outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {

            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {

                setIsDropdownOpen(false);
            }
        }

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }


        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isDropdownOpen])



    return (
        <nav className={`fixed w-full bg-white/50 backdrop-blur-sm shadow-md transition-transform duration-300 z-50 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            {/* Main container for navbar content */}
            <div className="flex justify-between items-center text-black px-4 sm:px-6 py-3">

                {/* Left side: Logo & Desktop Links */}
                <div className='flex items-center gap-10'>
                    <div className='logo hover:cursor-pointer'>
                        <Link to='/'><img className='h-8 w-auto object-contain' src={logo} alt="ShopKart" /></Link>
                    </div>
                    <ul className='hidden md:flex list-none gap-6 mx-4 items-center'>

                        {/* Desktop Links yahan hain */}
                        <li><Link to='/' className='font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent leading-normal'>Home</Link></li>
                        <li className="relative" ref={dropdownRef}>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="font-semibold hover:cursor-pointer flex items-center gap-1 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent leading-normal">
                                Products
                                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7 " /></svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white shadow-xl rounded-lg border z-50">
                                    <ul className="py-2">
                                        {categories.map(cat => (
                                            <li key={cat} onClick={() => handleCategoryClick(cat)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent leading-normal">
                                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li><Link to='/about' className='font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent leading-normal'>About</Link></li>
                    </ul>
                </div>

                {/* Right side: Search, Desktop Icons & Hamburger */}
                <div className='flex items-center gap-4 mr-4'>
                    {/* Search Bar (ab yeh mobile par bhi dikhega) */}
                    <div className="relative w-fit">
                        <input
                            type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="pl-4 pr-10 py-2 w-36 sm:w-56 rounded-full border-1 border-gray-300 focus:border-black outline-none transition-all"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            {searchTerm ? <IoClose className="cursor-pointer" size={20} onClick={() => setSearchTerm('')} /> : <HiMagnifyingGlass size={20} className="text-gray-500 hover:cursor-pointer" />}
                        </div>
                    </div>

                    {/* Desktop Icons (ab yeh mobile par hide ho jayenge) */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to={'/wishlist'}><CiHeart size={28} className="hover:text-pink-500" /></Link>
                        <Link to="/cart" className="relative">
                            <BsCart4 size={26} className="hover:text-blue-500 mr-2" />
                            {totalItems > 0 && <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</span>}
                        </Link>
                        <Link to={'/profile'}><FaUserCircle size={28} className='hover:text-gray-600' /></Link>
                    </div>

                    {/* Hamburger Icon (sirf mobile par dikhega) */}
                    <div className="md:hidden ">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='mr-[-4px]'>
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                // fixed width aur right side mein position
                <div className="md:hidden absolute top-16 right-4 w-56 bg-white shadow-xl rounded-lg border z-40">
                    <ul className="flex flex-col py-2">
                        {/* Saare links aur icons ab yahan mobile menu mein  */}
                        <li className="py-2 px-4 hover:bg-gray-100"><Link to='/profile' onClick={() => setIsMenuOpen(false)} className='flex items-center gap-2 font-semibold'> <FaUserCircle size={20} /> Profile</Link></li>
                        <li className="py-2 px-4 hover:bg-gray-100"><Link to='/' onClick={() => setIsMenuOpen(false)} className='font-semibold flex items-center hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent leading-normal'><BsHouse className='ml-0.5 mr-2.5'/>Home</Link></li>
                        <li className="py-2 px-4 w-full">
                            <button
                                onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
                                className='font-semibold w-full flex justify-start items-center ml-0'
                            >
                                <BsBag className='ml-0.5 mr-2.5' />
                                Products
                                <svg className={`w-4 h-4 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            {/* Jab Mobile Dropdown Open ho, tabhi categories dikhayein */}
                            {isMobileDropdownOpen && (
                                <ul className="pl-4 pt-2 ">
                                    {categories.map(cat => (
                                        <li
                                            key={cat}
                                            onClick={() => {
                                                handleCategoryClick(cat);
                                                setIsMenuOpen(false); // Poora menu band kar dein
                                            }}
                                            className="py-1.5 ml-3 cursor-pointer  hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent leading-normal"
                                        >
                                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                        </li>
                                    ))}
                                </ul>
                            )}</li>
                        <li className="py-2 px-4 hover:bg-gray-100"><Link to='/wishlist' onClick={() => setIsMenuOpen(false)} className='flex items-center gap-2 font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent leading-normal'> <CiHeart size={20} /> Wishlist</Link></li>
                        <li className="py-2 px-4 hover:bg-gray-100"><Link to='/cart' onClick={() => setIsMenuOpen(false)} className='flex items-center gap-2 font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent leading-normal'> <BsCart4 size={20} /> Cart</Link></li>
                        <li className="py-2 px-4 hover:bg-gray-100"><Link to='/about' onClick={() => setIsMenuOpen(false)} className='font-semibold flex items-center hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent leading-normal'><BsInfo className='ml-0.5 mr-2.5'/>About</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar