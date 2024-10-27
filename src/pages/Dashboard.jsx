import React, { useContext } from 'react';
import { BiUser, BiStar, BiCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import CategoriesContext from '../providers/CategoriesProvider';
import QuizzesContext from '../providers/QuizzesProvider';

const Dashboard = () => {
  // Sample data for dashboard metrics
  let [categories, categoryLoading] = useContext(CategoriesContext);
  let [quizzes, quizzesLoading] = useContext(QuizzesContext);

  quizzes = quizzes.slice(0, 3);
  categories = categories.slice(0, 3);

  const dashboardData = {
    totalUsers: 120,
    totalCategories: 10,
    quizzesCreated: 30,
    quizzesModified: 15,
    quizzesAttempted: 200,
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Key Metrics Section */}
      <div className="flex flex-row place-content-around flex-wrap gap-10 flex-start w-full mb-8">
        {/* Quizzes Overview */}
        <div className="h-48 flex flex-col p-6 px-10 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BiStar className="text-blue-500" />
            Quizzes Overview
          </h2>
          <div className="mt-4 h-24">
            <div className="flex justify-between py-1">
              <span>Created:</span>
              <span>{dashboardData.quizzesCreated}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Attempted:</span>
              <span>{dashboardData.quizzesAttempted}</span>
            </div>
          </div>
        </div>

        {/* Total Categories */}
        <div className="h-48 flex flex-col p-6 px-10 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BiCategory className="text-blue-500" />
            Categories Overview
          </h2>
          <div className="mt-4">
            <div className="flex justify-between py-1">
              <span>Created:</span>
              <span>{dashboardData.totalCategories}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Used:</span>
              <span>2</span>
            </div>
          </div>
        </div>

        {/* Questions Overview */}
        <div className="h-48 flex flex-col p-6 px-10 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BiUser className="text-blue-500" />
            Questions Overview
          </h2>
          <div className="mt-4">
            <div className="flex justify-between py-1">
              <span>Created:</span>
              <span>{dashboardData.quizzesCreated}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Types:</span>
              <span>MCQ</span>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
           {/*  Categories Section */}
          <div className="flex flex-col gap-4 w-full">
            <div className="text-2xl font-semibold flex items-center gap-2 flex-row ">
              <BiCategory className="text-purple-500" />
              Categories
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              {categories.map((category) => (
                <div 
                  key={category.id} 
                  className="flex flex-col place-content-between h-48 p-4 px-6 border border-gray-300 cursor-pointer rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-normal text-center">{category.name}</h4>
                    <p className="mt-2 text-gray-500 text-center">Details about {category.title}...</p>
                  </div>
                  <Link 
                    to={`/categories/${category.id}`}     
                    className="text-sm p-2 px-4 border-2 rounded-xl hover:bg-black hover:text-white text-center place-self-center">
                      Details
                  </Link>
                </div>
              ))}
            </div>
            <Link 
              to={`/quizzes`}
              className="mt-8 p-2 px-4 border-2 rounded-xl hover:bg-black hover:text-white text-center place-self-center w-2/3">
                All Categories
            </Link>
          </div>

          {/* Quizzes Section */}
          <div className="flex flex-col gap-4 w-full">
            <div className="text-2xl  font-semibold flex items-center gap-2 flex-row ">
              <BiStar className="text-orange-500" />
              Quizzes
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">            
              {quizzes.map((quiz) => (
                <div 
                  key={quiz.id} 
                  className="flex flex-col place-content-between h-48 p-4 px-6 border border-gray-300 cursor-pointer rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col gap-2">                  
                    <h4 className="text-xl font-normal text-center">{quiz.title}</h4>
                    <p className="mt-2 text-gray-500 text-center">Details about {quiz.title}...</p>
                  </div>
                  <Link 
                    to={`quizzes/${quiz.id}`} 
                    className="text-sm mt-8 p-2 px-4 border-2 rounded-xl hover:bg-black hover:text-white text-center place-self-center">
                      Details
                  </Link>
                </div>
              ))}
            </div>
            <Link 
              to={`/quizzes`}
              className="mt-8 p-2 px-4 border-2 rounded-xl hover:bg-black hover:text-white text-center place-self-center w-2/3">
                All Quizzes
            </Link>
          </div>
      </div>
    </>
  );
};

export default Dashboard;
