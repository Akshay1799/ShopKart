//main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ProductPage from './pages/productPage.jsx'
import AboutPage from './pages/AboutPage.jsx' 
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
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
