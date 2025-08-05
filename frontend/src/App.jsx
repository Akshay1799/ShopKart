import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import ProductCard from './components/ProductCard/ProductCard'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App