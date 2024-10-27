// pages/AllCategories.js
import React, { useContext } from 'react';
import { BiUserCircle } from 'react-icons/bi';

import QuizzesContext from '../providers/QuizzesProvider';
import { Link } from 'react-router-dom';

const AllCategories = () => {
  const [quizzes, loading] = useContext(QuizzesContext)

  console.log(quizzes);

  return (
    <div className="flex flex-col place-content-between gap-8 w-full place-self-center my-2 items-center">
      <h1 className="text-lg font-semibold">All Quizzes</h1>      
      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
        {
          quizzes.map((quiz) => (
            <div key={quiz.id} className="flex flex-col p-6 border border-gray-300 rounded-lg shadow-lg bg-white cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-row gap-4">
                <img src={quiz.quiz_image} alt='quiz image' className='h-20 w-20' />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold">{quiz.title}</h1>
                  <p className="text-md">{quiz.category.name}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex flex-row place-content-between w-full">
                  <span>Questions:</span>
                  <span>10</span>
                </div>
                <div className="flex flex-row place-content-between w-full">
                  <span>Attempts:</span>
                  <span>10</span>
                </div>
                <div className="flex flex-row place-content-between w-full">
                  <span>Score:</span>
                  <span>10</span>
                </div>
              </div>
              
              <Link 
                to={`/quizzes/quiz/${quiz.id}`} 
                className='border-2 rounded-xl p-2 px-4 text-center w-max self-center mt-4 hover:bg-black hover:text-white'>
                  Details
              </Link>
            </div>
          ))
        }        
      </div> 
    </div>
  );
};

export default AllCategories;
