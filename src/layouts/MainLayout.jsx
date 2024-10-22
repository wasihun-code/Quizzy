import React from 'react'
import Header from '../components/layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layouts/Footer'

const MainLayout = () => {
  return (
    <div className='flex flex-col bg-white w-screen'>
      <div className='flex-shrink-0 top-0 sticky'>
        <Header />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
  </div>
  )
}

export default MainLayout
