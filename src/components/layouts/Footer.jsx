import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='border-t-4 bg-stone-100 w-full flex flex-col'>
      <div className='flex flex-row place-content-between gap-4 md:gap-0 w-11/12 place-self-center my-4'>
        <div  className="flex flex-row gap-4 p-1 px-2 rounded-lg border-2 hover:text-white hover:bg-black">
          <a href='www.github.com/wasihun-code' className='text-xl'>wasihun-code</a>
          <BsGithub className='text-xl place-self-center' />
        </div>
          <h3 className='text-xl place-self-center'>&copy; 2024 All rights reserved.</h3>
      </div>
    </div>
  )
}

export default Footer