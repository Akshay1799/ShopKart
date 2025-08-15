import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { FilterProvider } from './context/FilterContext'
import { ProductProvider } from './context/ProductContext'

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <FilterProvider>
            <div className='flex flex-col min-h-screen'>
              <Navbar />
              <main className='flex-grow'>
                <Outlet />
              </main>
              <Footer />
            </div>
          </FilterProvider>
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  )
}

export default App