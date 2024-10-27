import React, { useContext, useCallback, useState } from 'react';
import CategoriesContext from '../providers/CategoriesProvider';

// Reusable components
const TextInput = ({ label, error, touched, ...props }) => (
  <div className="flex flex-col gap-2 mb-4">
    <label>{label}</label>
    <input className="border-b-2 border-gray-400 p-2 px-4" {...props} />
    {touched && error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const SelectInput = ({ label, options, error, touched, ...props }) => (
  <div className="flex flex-col gap-2 mb-4">
    <label>{label}</label>
    <select className="p-3 px-4 rounded-xl bg-gray-200" {...props}>
      <option value="" disabled selected>Choose</option>
      {options.map(({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
    {touched && error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const FileInput = ({ label, error, touched, onChange }) => (
  <div className="flex flex-col gap-2 mb-4">
    <label>{label}</label>
    <input 
      type="file" 
      className="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer" 
      onChange={onChange} 
    />
    <p className="mt-1 text-sm">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
    {touched && error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const CreateQuiz = () => {
  const [categories, loading] = useContext(CategoriesContext);
  const [notify, setNotify] = useState({ message: '', type: '' });
  const [formValues, setFormValues] = useState({
    title: '',
    quiz_image: null,
    category: '',
    questionCount: '',
    questionType: '',
  });
  const [touchedFields, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
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
    validateField('quiz_image', file ? file.name : '');
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  
    // Simple validation
    if (typeof value === 'string' && value.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: `${name} is required` }));
    } else {
      setErrors((prevErrors) => {
        const { [name]: removed, ...remainingErrors } = prevErrors;
        return remainingErrors;
      });
    }
  };
  
  const saveQuiz = useCallback(async () => {
    const formData = new FormData();
    formData.append('title', formValues.title || '');
    formData.append('category', formValues.category || '');
    if (formValues.quiz_image) {
      formData.append('quiz_image', formValues.quiz_image);
    }
  
    try {
      const resp = await fetch(`http://localhost:9000/quiz-app/quiz`, {
        method: 'POST',
        body: formData,
      });

      console.log(formData);

      if (!resp.ok) throw new Error("Failed to Create Quiz");
  
      console.log("Quiz created successfully");
      setNotify({ type: 'success', message: "Quiz Created Successfully!" });
      window.location.href = "/quizzes";
    } catch (error) {
      console.error("Error saving Quiz:", error);
      setNotify({ type: 'failure', message: "Fill all the required fields and try again." });
    }
  
    setTimeout(() => setNotify({ message: '', type: '' }), 5000);
  }, [formValues]);
  
  return (
    <>
      <h1 className="text-lg font-semibold">Create Quiz</h1>
      
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-4">
          <TextInput
            label="Title *"
            placeholder="E.g Python Fundamentals"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touchedFields.title}
            error={errors.title}
          />
          <SelectInput 
            label="Category *"
            name="category"
            options={categories}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touchedFields.category}
            error={errors.category}
          />
          <FileInput 
            label="Upload Quiz Image *" 
            onChange={handleFileChange}
            touched={touchedFields.quiz_image}
            error={errors.quiz_image}
          />
        </div>

        <div className="flex flex-col gap-4">
          <SelectInput
            label="No of Questions"
            name="questionCount"
            options={[
              { id: '5', name: '5' },
              { id: '10', name: '10' },
              { id: '15', name: '15' },
              { id: '20', name: '20' },
            ]}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touchedFields.questionCount}
            error={errors.questionCount}
          />
          <SelectInput
            label="Question Type"
            name="questionType"
            options={[{ id: 'mcq', name: 'Multiple Choice' }]}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touchedFields.questionType}
            error={errors.questionType}
          />
        </div>

        {notify.message && (
          <p className={`text-lg px-5 rounded-md py-1 ${notify.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            {notify.message}
          </p>
        )}

        <button
          onClick={saveQuiz}
          disabled={!formValues.title || !formValues.category || !formValues.quiz_image || Object.keys(errors).length > 0}
          className="w-max flex gap-4 bg-black text-white border-2 px-4 py-2 rounded-xl hover:bg-white hover:text-black disabled:bg-gray-300 disabled:text-gray-500">
          Submit
        </button>
      </div>
    </>
  );
};

export default CreateQuiz;
