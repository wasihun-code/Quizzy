import React, { useState } from 'react';

const CreateCategory = () => {
  const [notify, setNotify] = useState({ message: '', type: '' });
  const [formValues, setFormValues] = useState({
    name: '',
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

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

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

  const saveCategory = async () => {
    try {
      const resp = await fetch(`http://localhost:9000/quiz-app/category`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!resp.ok) throw new Error("Failed to Create Category");

      setNotify({ type: 'success', message: "Category Created Successfully!" });
      setFormValues({ name: '' }); // Reset form values
    } catch (error) {
      console.error("Error saving Category:", error);
      setNotify({ type: 'failure', message: "Fill all the required fields and try again." });
    }

    setTimeout(() => setNotify({ message: '', type: '' }), 5000);
  };

  return (
    <div className="flex flex-col place-content-between gap-8 w-7/12 place-self-center my-2 items-center">
      <h1 className="text-lg font-semibold">Create Category</h1>

      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-4 mb-4">
          <label>Category Name *</label>
          <input
            className="border-b-2 border-gray-400 p-2 px-4"
            placeholder="E.g General Knowledge"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touchedFields.name && errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        {notify.message && (
          <p className={`text-lg px-5 rounded-md py-1 ${notify.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            {notify.message}
          </p>
        )}

        <button
          onClick={saveCategory}
          disabled={!formValues.name || Object.keys(errors).length > 0}
          className="w-max flex gap-4 bg-black text-white border-2 px-4 py-2 rounded-xl hover:bg-white hover:text-black disabled:bg-gray-300 disabled:text-gray-500">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateCategory;
