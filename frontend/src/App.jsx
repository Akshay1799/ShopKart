import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { CartProvider } from './context/cartContext'

const App = () => {
  return (
    <CartProvider>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App