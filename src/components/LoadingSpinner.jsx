import React from 'react'
import { ImSpinner } from 'react-icons/im'

export const LoadingSpinner = () => {
  return (
    <div className="flex flex-row w-full">
      <ImSpinner className='text-8xl w-full' /> 
    </div>
  )
}
