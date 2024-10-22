import React from 'react'
import { BiMessageSquare} from 'react-icons/bi'
import {  MdOutlineManageAccounts, MdOutlineSecurity} from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'


const ProfileLinks = () => {
  return (
    <div className="flex flex-row gap-12 place-self-center md:place-self-start w-full md:w-max">

          <div className="flex flex-row md:flex-col overflow-auto m-4 gap-4 w-full">   
            <Link to="general" className="p-2 px-4 flex flex-row gap-2 hover:bg-blue-200 place-self-center sm:place-self-start text-blue rounded-xl mb-4 sm:mb-0">
              <CgProfile className='text-xl place-self-center' />
              <h1 className='w-max text-md md:text-md lg:text-md'>My Profile</h1>
            </Link>

            <Link to="security" className="p-2 px-4 flex flex-row gap-2 hover:bg-blue-200 place-self-center sm:place-self-start text-blue rounded-xl mb-4 sm:mb-0">
              <MdOutlineSecurity className='text-xl place-self-center' />
              <h1 className='w-max sm:text-sm md:text-md lg:text-md'>Security</h1>
            </Link>

            <Link to="notification" className="p-2 px-4 flex flex-row gap-2 hover:bg-blue-200 place-self-center sm:place-self-start text-blue rounded-xl mb-4 sm:mb-0">
              <BiMessageSquare className='text-xl place-self-center' />
              <h1 className='w-max sm:text-sm md:text-md lg:text-md'>Notifications</h1>
              </Link> 
              
            <Link 
              to="delete_account"
              className="p-2 px-4 md:mt-5  text-red-400 hover:bg-red-700 hover:text-white hover:text-md rounded-xl border-2 mb-4 sm:mb-0"
            >
              <h1 className='w-max'> Delete Account </h1>
            </Link>
          </div>
        </div>
  )
}

export default ProfileLinks