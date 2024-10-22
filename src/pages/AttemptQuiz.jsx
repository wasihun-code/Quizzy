import React from 'react';
import { Link } from 'react-router-dom';
import { BsClock } from 'react-icons/bs';

const AttemptQuiz = () => {
  return (
    <>
      <div className='flex flex-row place-content-between gap-4 w-5/6 place-self-center my-2'>
        <div className="flex flex-col sm:flex-row gap-4">
          <BsClock className='place-self-center text-5xl' />
          <div className="flex flex-col">
            <h3 className=''>Time Remaining</h3>
            <p>14 : 42 : 32</p>
          </div>
        </div>
        <Link className='flex flex-row sm:place-self-center h-max p-2 px-5 rounded-lg border bg-black text-white hover:text-black hover:bg-white'>
          Submit
        </Link>
      </div>
      <div className='flex flex-col md:flex-row place-content-between w-5/6 place-self-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Question 1 of 10</h1>
          <h2 className='text-2xl my-2'>Which one of the following is the first programming language developed?</h2>
          <div className='grid justify-center grid-rows-1 sm:grid-cols-2 lg:grid-cols-4 place-content-between gap-12 lg:gap-20 my-4 w-full'>
            {["B Language", "Fortran", "Cobol", "C++"].map((option, index) => (
              <div key={index} className='w-full items-center flex flex-row pl-6 border-2 md:w-2/3 lg:w-full rounded-lg hover:bg-black hover:text-white text-black bg-white'>
                <h1 className='text-xl place-self-center'>{String.fromCharCode(65 + index)}.</h1>
                <Link className='flex flex-row p-4 px-5 text-xl'>
                  {option}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-2 w-5/6 place-self-center">
        <button className="p-2 text-lg px-6 rounded-xl py-3 border-2 hover:text-white hover:bg-black w-32">Prev</button>
        <button className="p-2 text-lg px-6 rounded-xl py-3 border-2 hover:text-white hover:bg-black w-32">Next</button>
      </div>
    </>
  );
}

export default AttemptQuiz;
