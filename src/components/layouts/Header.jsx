import React from 'react'
import HeaderButton from './HeaderButton'
import  logo from '../../assets/logo4.png'
import { Link } from 'react-router-dom';

const Header = () => {

  const arr = [
    {
      'id': 1,
      'label': 'Dashboard',
      'to': '/'
    },
    {
      'id': 3,
     'label':  'My Profile',
     'to': 'profile'
    }
  ];

  return (
    <div className='border-b-4 bg-stone-100 border-2 flex flex-col'>
      <div className='flex flex-row place-content-between gap-4 w-5/6 place-self-center md:gap-0 my-2'>
        <img src={logo} className='w-36 col-span-3 md:col-span-1 py-3' />

        {/** Links */}
        {/* <div className="col-span-2 md:col-span-1 place-self-center flex flex-row w-full">
            <div className="flex flex-row gap-1 overflow-x-auto w-full">
              {
                arr.map((obj)=> (
                  <Link 
                    key={obj.id} 
                    to={obj.to}
                    className='hover:rounded-lg hover:bg-cyan-950 hover:text-white rounded-sm \
                              transition-all duration-300 ease-in-out'
                    >
                    <HeaderButton label={obj.label}/>
                  </Link>
                ))
              }
            </div>  
        </div> */}
       
        {/** Logout Button */}
        <Link 
          to="/"
          className='place-self-end w-max my-2 hover:rounded-lg hover:bg-cyan-950 hover:text-white rounded-sm transition-all duration-300 ease-in-out'>
          <HeaderButton label="Logout"/>
        </Link>
        

      </div>
    </div>
  )
}

export default Header
