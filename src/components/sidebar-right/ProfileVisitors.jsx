import React from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import socialGender from '../../assets/socialGender.png'
const ProfileVisitors = () => {
  return (
    <div className='flex flex-col gap-3 border-2 p-4 rounded-xl shadow-xl'>
      <div className='flex flex-row place-content-between px-5s'>
        <h1>Visitors</h1>
        <CiMenuKebab />
      </div>
      <img src={socialGender} alt='user-image' className='rounded-full border-solid place-self-center border-2 p-2'/>
      <div className='flex flex-row place-content-around'>
        <h1 className=''>Male 20%</h1>
        <h1>Female 43%</h1>
      </div>
    </div>
  )
}

export default ProfileVisitors
