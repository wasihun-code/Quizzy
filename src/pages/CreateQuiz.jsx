import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { SiSublimetext } from 'react-icons/si'
import { Link } from 'react-router-dom'

const CreateQuiz = () => {
  return (
    <div className='flex flex-col place-content-between gap-8 w-5/6 place-self-center my-2'>
      <h1 className='text-lg font-semibold'>Create Quiz</h1>
      <div className='grid grid-rows-1 grid-cols-1 lg:grid-cols-9 place-content-between gap-12 w-5/6 lg:w-full justify-center items-center'>
        <div className='lg:col-span-3 flex flex-col gap-4 w-full place-self-start'>
          <div className='flex flex-col gap-2 mb-4'>
            <h3 className='w-full'> Title </h3>
            <input placeholder='E.g Python Fundamentals' className='border-b-2 border-gray-400 p-2 px-4 ' />
          </div>
          <div className='flex flex-col gap-2 mb-4'>
            <label> Category </label>
           <select name="" id="" className='p-3 px-4 rounded-xl bg-gray-200' placeholder="Choose ">
              <option></option>
              <option className='text-xl p-2 rounded-xl'>Multiple Question</option>
            </select>
          </div>
          <div className='flex flex-col gap-2 mb-4'>                        
            <label 
              className="block mb-2" 
              for="file_input">
                Upload file
            </label>
            <input 
              className="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer  focus:outline-none " 
              aria-describedby="file_input_help" 
              id="file_input" 
              type="file" 
            />
            <p class="mt-1 text-sm" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
          </div>
        </div>
        <div className='hidden lg:block lg:col-span-1'></div>
        <div className='lg:col-span-5 flex flex-col gap-4 w-full place-self-start'>
          <div className='lg:w-2/3 flex flex-col gap-2 mb-4'>
            <h3> No Of Questions </h3>
            <input type='number' className='border-b-2 border-gray-400 p-2 px-4' min={5} max={10}/>
          </div>
          <div className='lg:w-2/3 flex flex-col gap-2 mb-4'>
            <label>Question Type</label>
            <select name="" id="" className='p-3 px-4 rounded-xl bg-gray-200' placeholder="Choose ">
              <option></option>
              <option className='text-xl p-2 rounded-xl'>Multiple Question</option>
            </select>
          </div>
          <div className='flex flex-col gap-2 mb-4'>                        
            <label 
              className="block mb-2" 
              for="file_input">
                Upload Icon
            </label>
            <textarea
              className="block w-full text-md p-2 min-h-12 border border-gray-300 rounded-lg   focus:outline-none" 
              aria-describedby="file_input_help" 
              id="file_input" 
              type="file" 
            ></textarea>
            <p class="mt-1 text-sm" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
          </div>
        
        </div>

        <button disabled={true} className="w-max disabled:bg-white disabled:text-black flex flex-row gap-4 bg-black text-white hover:text-black hover:bg-white border-2 px-4 py-2 rounded-xl ">
          Submit
        </button>
        
      </div>
    </div>
  )
}

export default CreateQuiz