import React from 'react'
import authSide from '../../assets/authSideImage2.png'


const AuthSidebar = () => {
  return (
    <div className='hidden bg-orange-950 text-white m-8 rounded-3xl lg:flex lg:flex-col lg:place-content-center gap-4'>
      {/* <img src={authSide} className='place-self-center' /> */}
      <div className='place-self-center flex flex-col gap-4'>
        <h1 className='text-3xl border-2 py-3 place-self-center px-16 rounded-xl'>Welcome </h1>
        <p className='text-center'>Sign up to start using the best analysis dashboard</p>
      </div>
    </div>
  )
}

export default AuthSidebar
