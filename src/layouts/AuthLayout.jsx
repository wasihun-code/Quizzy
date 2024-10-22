import React from 'react'

import AuthSidebar from '../components/auth/AuthSidebar'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2  w-screen'>
      
      <Outlet />
      
      <AuthSidebar/>
    </div>
  )
}

export default AuthLayout
