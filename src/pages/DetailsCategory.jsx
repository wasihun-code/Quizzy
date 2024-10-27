import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const DetailsCategory = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      const url = `http://localhost:9000/quiz-app/category/${categoryId}`; // Adjust the ID as needed
      
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error('Failed to fetch category');
        }
        const data = await resp.json();
        setCategory(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-7/12 place-self-center my-2">
      <h1 className='text-lg font-semibold'>{category.name}</h1>
      <hr className='my-4 w-full' />
      <div className="flex flex-col gap-4 w-full">
        <h3 className='text-md font-semibold'>Details</h3>
        <p className='text-gray-700'>Category ID: {category.id}</p>
        <p className='text-gray-700'>Created At: {new Date(Date.now()).toLocaleDateString()}</p>
        <p className='text-gray-700'>Updated At: {new Date(Date.now()).toLocaleDateString()}</p>
      </div>
      
      <Link 
        to={`/edit-category/${category.id}`}
        className="mt-8 p-2 px-4 border-2 rounded-xl hover:bg-black hover:text-white text-center place-self-center w-max">
          Dashboard
      </Link>
    </div>
  );
};

export default DetailsCategory;
