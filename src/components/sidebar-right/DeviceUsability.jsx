import React from 'react'
import socialGender from '../../assets/socialGender.png'


const DeviceUsability = () => {
  return (
    <div className='flex flex-col gap-8 border-2 p-4 rounded-xl shadow-xl'>
      <img src={socialGender} alt='user-image' className='rounded-full border-solid place-self-center border-2 p-2'/>
      <div className='flex flex-row place-content-around gap-8  text-sm'>
        <h1 className=''>Desktop 23%</h1>
        <h1>Laptop 23%</h1>
        <h1>Mobile 23%</h1>
      </div>
    </div>
  )
}

export default DeviceUsability
