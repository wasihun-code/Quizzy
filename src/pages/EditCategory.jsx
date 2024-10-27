import React, { useState, useContext, useCallback, useEffect } from 'react';
import CategoriesContext from '../providers/CategoriesProvider';
import { useParams } from 'react-router-dom';

const EditCategory = () => {
  const [formValues, setFormValues] = useState({
    name: '',
  });
  const [touchedFields, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [notify, setNotify] = useState({ message: '', type: '' });
  const [category, setCategory] = useState({ name: '' });
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const url = `http://localhost:9000/quiz-app/category/${categoryId}`; // Adjust the ID as needed

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setCategory(data);
        setFormValues({
          name: data.name || '',
        });
        console.log(data)
      } catch {
        console.log("Error loading a single category");
      }
    };
    fetchCategory();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    // Simple validation
    if (value.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: `${name} is required` }));
    } else {
      setErrors((prevErrors) => {
        const { [name]: removed, ...remainingErrors } = prevErrors;
        return remainingErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
  };

  const saveCategory = useCallback(async () => {
    const formData = new FormData();
    formData.append('name', formValues.name);

    try {
      const resp = await fetch(`http://localhost:9000/quiz-app/category/1`, {
        method: 'PUT',
        body: formData,
      });

      if (!resp.ok) throw new Error("Failed to Edit Category");

      console.log("Category edited successfully");
      setNotify({ type: 'success', message: "Category Edited Successfully!" });
      // window.location.href = "/"; 
    } catch (error) {
      console.error("Error saving Category:", error);
      setNotify({ type: 'failure', message: "Category couldn't be edited." });
    }

    setTimeout(() => setNotify({ message: '', type: '' }), 5000);
  }, [formValues]);

  return (
    <div className="flex flex-col place-content-between gap-8 w-7/12 place-self-center my-2 items-center">
      <h1 className='text-lg font-semibold'>Edit Category</h1>

      {/* Edit Form Section */}
      <div className="flex flex-col gap-2 w-full">
        {/* Name Input */}
        <div className='flex flex-col gap-2 mb-4'>
          <h3 className='w-full'> Category Name </h3>
          <input
            placeholder='E.g General Knowledge'
            className='border-b-2 border-gray-400 p-2 px-4'
            name="name"
            value={category.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touchedFields.name && errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>
      </div>

      {/* Notification and Submit Button */}
      {notify.message && (
        <p className={`text-lg px-5 rounded-md py-1 ${notify.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {notify.message}
        </p>
      )}

      <button
        onClick={saveCategory}
        className="w-max flex gap-4 bg-black text-white border-2 px-4 py-2 rounded-xl hover:bg-white hover:text-black disabled:bg-gray-300 disabled:text-gray-500"
        disabled={!formValues.name || Object.keys(errors).length > 0}
      >
        Submit
      </button>
    </div>
  );
};

export default EditCategory;
