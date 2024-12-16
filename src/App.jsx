import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'


const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <div className='w-full h-full flex flex-col'>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    },
    {
      path:'/home',
      element: <div className='w-full h-full flex flex-col'>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    },
    {
      path:'/contact',
      element: <div className='w-full h-full flex flex-col'>
      <Navbar/>
      <Contact/>
      <Footer/>
    </div>
    },
    {
      path:'/about',
      element: <div className='w-full h-full flex flex-col'>
      <Navbar/>
      <About/>
      <Footer/>
    </div>
    },
    {
      path:'/service',
      element: <div className='w-full h-full flex flex-col'>
      <Navbar/>
      <Service/>
      <Footer/>
    </div>
    }
  ]
)
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App