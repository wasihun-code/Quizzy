import React, { useContext } from 'react'
import { MdVisibility } from 'react-icons/md'
import { BsExclamation } from 'react-icons/bs'

const SecuritySettings = () => {
  return (
    <>
        <div className="flex flex-col lg:flex-row  rounded-xl p-2 border-2 w-full md:w-11/12">
          <div className="flex flex-col gap-4 p-2 w-full">
            <h1 className="text-2xl sm:text-xl font-bold">Security Settings</h1>
            <hr />
            <div className='grid grid-rows-1 grid-cols-1 lg:grid-cols-3 place-content-between gap-4'>
              <h1 className="font-normal text-xl">Change Password</h1>
              <div className="flex col-span-2 flex-col gap-4">
                <div className="flex flex-row gap-4">
                  <input  type='password' className="rounded-lg py-1 px-3 w-3/4 border-2"  placeholder='Old Password' />
                  <button type="button" className="place-self-center bg-transparent border-none cursor-pointer">
                    <MdVisibility />
                  </button>
                </div>
                <div className="flex flex-row gap-4">
                  <input  type='password' className="rounded-lg py-1 px-3 w-3/4 border-2"  placeholder='New Password' />
                  <button type="button" className="place-self-center bg-transparent border-none cursor-pointer">
                    <MdVisibility />
                  </button>
                </div>
                <div className='flex flex-row gap-0'>
                  <BsExclamation className='text-xl place-self-start'/>
                  <h6 className='font-light text-sm mb-4 place-self-center'>Your password must be different from your old passwords.</h6>
                </div>
                <div className="flex flex-row gap-4">
                  <input  type='password' className="rounded-lg py-1 px-3 w-3/4 border-2"  placeholder='Confirm New Password' />
                  <button type="button" className="place-self-center bg-transparent border-none cursor-pointer">
                    <MdVisibility />
                  </button>
                </div>
              </div>
            </div>
            <hr className='my-2'/>

            <button type="button" className="place-self-end border-2 text-white bg-black hover:text-lg  px-4 py-2 rounded-xl">
              Save Changes
            </button>
          </div>
        </div> 
    </>
  )
}

export default SecuritySettings