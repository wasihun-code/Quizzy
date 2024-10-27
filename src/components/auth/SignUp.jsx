import React from 'react'
import logo from '../../assets/logo3.png'
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { MdCheckBox } from 'react-icons/md'
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <div className='flex flex-col place-content-around h-full mt-4 gap-2'> 
        <img src={logo} className='mt-0 place-self-center sm:place-self-start sm:ml-4 sm:px-2 w-48' />
        <div className='flex flex-col w-max p-8 place-content-between place-self-center px-24'>
          <div className='flex flex-row place-content-center w-full border-2 gap-2 mb-10 p-3 px-24'>
            <BsFacebook className='text-lg place-self-center'/>
            <a href='#' className='text-lg'>Sign Up with Facebook</a>
          </div>

          {/** API Login */}
          <div className='flex flex-row place-content-center w-full border-2 gap-2 mb-10 p-3 px-24'>
            <BsGoogle className='text-lg place-self-center'/>
            <a href='#' className='text-lg'>Sign Up with Google</a>
          </div>

          {/** Fields wrapper */}
          <div className='flex flex-col gap-8 mb-4'>
            <div className='flex flex-col gap-6 sm:flex-row w-full  place-content-between sm:gap-4'>
              <input placeholder='First Name' className='border-b-2 border-gray-400 p-2 px-4' />
              <input placeholder='Last Name' className='border-b-2 border-gray-400 p-2 px-4' />
            </div>  
            <input placeholder='Email' className='border-b-2 border-gray-400 p-2 px-4' />
            <input placeholder='Password' className='border-b-2 border-gray-400 p-2 px-4' />
          </div>
          
          {/** Misc(forgot password) Wrapper */}
          <div className='flex flex-row w-full place-content-between mb-10'>
            <div className="flex flex-row gap-2">
              <MdCheckBox className='text-xl' />
              <h4 className='text-xs'>Remember for 30 days</h4>
            </div>
            <a href="#" className='text-xs'>Forgot Password</a>
          </div>

          {/** API Login */}
          <div className='flex flex-row place-content-center w-full rounded-xl bg-black text-white gap-2 mb-10 p-3'>
            <Link to='signup' className='text-xl'>Sign Up</Link>
          </div>

          <h1 className='text-md text-center'>Don't have an account? <span className='font-bold'>Sign Up</span></h1>

        </div>
      </div>
  )
}

export default SignUp
