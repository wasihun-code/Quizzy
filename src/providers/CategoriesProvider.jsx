import React, { createContext, useEffect, useState } from 'react'


const   CategoriesContext = createContext(null);

export const CategoriesProvider = ({children}) => {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true)


  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://127.0.0.1:9000/quiz-app/category")
        
        if (!res.ok) {
          throw new Error ("Fetching Categories failed.")
        }

        const data = await res.json();
        setCategories(data);
        console.log(data);
        setLoading(false);
      } catch {
        console.log("Error Occured while fetching user account");
      }
    }
    fetchCategories();
  }, [])

  return (
    <CategoriesContext.Provider value={[categories, loading]}>
      {children}
    </CategoriesContext.Provider>
  )

}

export default CategoriesContext;