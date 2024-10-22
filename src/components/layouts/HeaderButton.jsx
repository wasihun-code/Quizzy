import React from 'react'
import {MdOutlineDashboard} from 'react-icons/md'
import { Link } from 'react-router-dom'

const HeaderButton = ({label}) => {
  return (
      <h3
        className='md:text-md py-1 mb-1 px-5 '>
        {label}
      </h3>
  
  )
}

export default HeaderButton
