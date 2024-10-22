import React, { useContext, useEffect, useState } from 'react'
import { BiEdit, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom';


const GeneralSettings = () => {
    return (
    <>
        <>
          <div className="flex flex-col lg:flex-row place-content-between border-1 rounded-xl p-2 border-2 w-full md:w-11/12">
            <div className="flex flex-row gap-4 p-2 w-max">
              <img src='' className='rounded-full w-32 h-32 text-3xl' />

                <div className="flex flex-col gap-3 place-self-center">
                  <h1 className="font-bold text-lg">Wasihun Ageru</h1>
                  <h2 className="text-md">Drived. Determined. </h2>
                  <h3 className="text-sm">Rajkot, Gujarat</h3>
                </div>
            </div>
            {/**Edit Button */}
            <Link className="flex flex-row gap-4 hover:text-white hover:bg-black border-2 mr-10 px-4 py-2 rounded-xl place-self-center ">
              <h3 className="">Edit</h3>
              <BiEdit className='text-xl place-self-center' />
            </Link>
          </div>

        
          <div className="flex flex-col lg:flex-row place-content-between border-1 rounded-xl p-2 border-2 w-full md:w-11/12">
            <div className="flex flex-col gap-4 p-2 w-2/3">
              <h1 className="text-md sm:text-xl font-bold">Personal Information</h1>
                <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">First Name</h2>
                    <h1 className="font-normal font-lg">Wasihun</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">Last Name</h2>
                    <h1 className="font-normal font-lg">Ageru</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">Email</h2>
                    <h1 className="font-normal font-lg">wasihunageru@gmail.com</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">Phone</h2>
                    <h1 className="font-normal font-lg">+01 234 42 12</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">Bio</h2>
                    <h1 className="font-normal font-lg">Drived. Determined.</h1>
                  </div>
                </div>
            </div>
              <Link className="flex flex-row gap-4  hover:text-white hover:bg-black border-2 mr-10 px-4 py-2 rounded-xl place-self-center lg:place-self-start">
                <h3 className="">Edit</h3>
                <BiEdit className='text-xl place-self-center' />
              </Link>
          </div>

          
          <div className="flex flex-col lg:flex-row place-content-between border-1 rounded-xl p-2 border-2 w-full md:w-11/12">
            <div className="flex flex-col gap-4 p-2 w-2/3">
              <h1 className="text-xl font-bold">Address</h1>
                <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">Country</h2>
                    <h1 className="font-normal font-lg">Ethiopia</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">City/State</h2>
                    <h1 className="font-normal font-lg">Rajkot Gujarat</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-extralight font-lg">Postal Code</h2>
                    <h1 className="font-normal font-lg">3600003</h1>
                  </div>
                </div>
            </div>
            <Link className="flex flex-row gap-4 hover:text-white hover:bg-black border-2 mr-10 px-4 py-2 rounded-xl place-self-center lg:place-self-start">
              <h3 className="">Edit</h3>
              <BiEdit className='text-xl place-self-center' />
            </Link>
          </div>
        </>
    </>
  )
}

export default GeneralSettings