//main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ProductPage from './pages/ProductPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Wishlist from './pages/Wishlist.jsx' 
import Cart from './pages/Cart.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import OrderConfirmationPage from './pages/OrderConfirmationPage.jsx'
import 'react-alice-carousel/lib/alice-carousel.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // 'index: true' batata hai ki jab parent ka path ('/') match ho, toh default mein isse dikhao
        element: <Home />
      },
      {
        path: 'products',
        element: <ProductPage/>
      },
      {
        path: 'about',
        element: <AboutPage/>
      },
      {
        path: 'wishlist',
        element: <Wishlist/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'Checkout',
        element: <CheckoutPage/>
      },
      {
        path: 'order-confirmation',
        element: <OrderConfirmationPage/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
