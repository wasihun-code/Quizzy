import React, { useState, useContext, useCallback, useEffect } from 'react';
import CategoriesContext from '../providers/CategoriesProvider';

const EditQuiz = () => {
  const [categories, loading] = useContext(CategoriesContext);
  const [formValues, setFormValues] = useState({
    title: '',
    quiz_image: null,
    category: '',
  });
  const [touchedFields, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [notify, setNotify] = useState({ message: '', type: '' });
  const [quiz, setQuiz] = useState({ title: '', quiz_image: '', category: '' });

  useEffect(() => {
    const fetchQuiz = async () => {
      const url = "http://localhost:9000/quiz-app/quiz/1"; // Adjust the ID as needed

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setQuiz(data);
        setFormValues({
          title: data.title || '',
          quiz_image: null,
          category: data.category || '',
        });
      } catch {
        console.log("Error loading a single quiz");
      }
    };
    fetchQuiz();
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormValues((prev) => ({ ...prev, quiz_image: file }));
    setTouchedFields((prev) => ({ ...prev, quiz_image: true }));

    if (!file) {
      setErrors((prevErrors) => ({ ...prevErrors, quiz_image: 'Quiz image is required' }));
    } else {
      setErrors((prevErrors) => {
        const { quiz_image, ...remainingErrors } = prevErrors;
        return remainingErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
  };

  const saveQuiz = useCallback(async () => {
    const formData = new FormData();
    formData.append('title', formValues.title);
    formData.append('category', formValues.category);
    if (formValues.quiz_image) {
      formData.append('quiz_image', formValues.quiz_image);
    }

    try {
      const resp = await fetch(`http://localhost:9000/quiz-app/quiz/1`, {
        method: 'PUT',
        body: formData,
      });
      console.log(formData)
      if (!resp.ok) throw new Error("Failed to Edit Quiz");

      console.log("Quiz edited successfully");
      setNotify({ type: 'success', message: "Quiz Edited Successfully!" });

      window.location.href =  `/quizzes/${quiz.id}`; 

    } catch (error) {
      console.error("Error saving Quiz:", error);
      setNotify({ type: 'failure', message: "Quiz couldn't be edited." });
    }

    setTimeout(() => setNotify({ message: '', type: '' }), 5000);
  }, [formValues]);

  return (
    <div className="flex flex-col place-content-between gap-8 w-7/12 place-self-center my-2 items-center">       
      <h1 className='text-lg font-semibold'>Edit Quiz</h1>
        <div className="flex flex-col gap-3 w-full">
          <h1>Quiz Image</h1>
          <hr />
          <img src={formValues.quiz_image ? URL.createObjectURL(formValues.quiz_image) : quiz.quiz_image} alt="Quiz" className='h-52 w-full border-2' />
          <div className='flex flex-col gap-2 w-full'>
            <label className="px-4 place-self-center border-2 rounded-lg bg-white hover:bg-black hover:text-white py-2 cursor-pointer" htmlFor='file'>
              Replace
              <input 
                type="file" 
                name="quiz_image" 
                id="file" 
                className='hidden' 
                onChange={handleFileChange}
              />
            </label>
            {touchedFields.quiz_image && errors.quiz_image && (
              <p className="text-red-500 text-sm">{errors.quiz_image}</p>
            )}
          </div>
        </div>

        {/* Edit Form Section */}
        <div className="flex flex-col gap-2 w-full">
          {/* Title Input */}
          <div className='flex flex-col gap-2 mb-4'>
            <h3 className='w-full'> Title </h3>
            <input 
              placeholder='E.g Python Fundamentals' 
              className='border-b-2 border-gray-400 p-2 px-4' 
              name="title"
              value={formValues.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touchedFields.title && errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          {/* Category Select */}
          <div className='flex flex-col gap-2 mb-4'>
            <label> Category </label>
            <select 
              name="category" 
              className='p-3 px-4 rounded-xl bg-gray-200' 
              value={formValues.category}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled>Choose</option>
              {loading ? (
                <option>Loading...</option>
              ) : (
                categories.map(({ id, name }) => (
                  <option key={id} value={id}>{name}</option>
                ))
              )}
            </select>
            {touchedFields.category && errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
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
        onClick={saveQuiz}
        className="w-max flex gap-4 bg-black text-white border-2 px-4 py-2 rounded-xl hover:bg-white hover:text-black disabled:bg-gray-300 disabled:text-gray-500"
        disabled={!formValues.title || !formValues.category || Object.keys(errors).length > 0}
      >
        Submit
      </button>
    </div>
  );
};

export default EditQuiz;
