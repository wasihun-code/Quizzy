import React from 'react';
import { BiUserCircle } from 'react-icons/bi';

const AllQuiz = () => {
  const arr = [1, 2, 3];

  return (
    <div className="flex justify-center my-2 w-full">
      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 w-5/6">
        {
          arr.map((item) => (
            <div className="flex flex-col gap-4 p-4 px-6 border-2 w-max rounded-xl text-black bg-stone-300 hover:text-white hover:bg-gray-800 hover:cursor-pointer">
              <div className="flex flex-row gap-4">
                <BiUserCircle className="rounded-full w-16 h-16"/>
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg">Fundamentals Quiz</h1>
                  <p className="text-md">Python</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row place-content-between w-full">
                  <h1>Questions</h1>
                  <h2>10</h2>
                </div>
                <div className="flex flex-row place-content-between w-full">
                  <h1>Attempt</h1>
                  <h2>10</h2>
                </div>
                <div className="flex flex-row place-content-between w-full">
                  <h1>Score</h1>
                  <h2>10</h2>
                </div>
              </div>
            </div>
          ))
        }        
      </div> 
    </div>
  );
};

export default AllQuiz;
