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
      <div className="flex flex-col gap-8 place-self-center w-full my-8 flex-grow">
        <div className="flex flex-col gap-8 w-9/12 place-self-center my-2 items-center">
          <Outlet />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
  </div>
  )
}

export default MainLayout
