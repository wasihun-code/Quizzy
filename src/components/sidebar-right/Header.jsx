import { BiBellPlus, BiPlus, BiSolidDownArrow } from "react-icons/bi"



const Header = () => {
  

  return (
    <div className='flex flex-row place-content-evenly px-5'>
      <BiBellPlus className='text-xl place-self-center'/>
      <div className='flex flex-row gap-2  place-content-center border-2 border-red-800 p-2 px-5 rounded-lg'>
        <h1 className='text-md'>Instagram</h1>
        <BiSolidDownArrow className='text-xl'/>
      </div>
      <div className='rounded-full bg-orange-800 text-white p-1 place-self-center'>
        <BiPlus className='text-xl'/>
      </div>
    </div>
  )
}

export default Header
