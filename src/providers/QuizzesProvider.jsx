import React, { createContext, useEffect, useState } from 'react'

const QuizzesContext = createContext(null);

export const QuizzesProvider = ({children}) => {

  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await fetch("http://127.0.0.1:9000/quiz-app/quiz")
        
        if (!res.ok) {
          throw new Error ("Fetching Quizzes failed.")
        }

        const data = await res.json();
        setQuizzes(data);
        setLoading(false);
      } catch {
        console.log("Error Occured while fetching user account");
      }
    }
    fetchQuizzes();
  }, [])

  return (
    <QuizzesContext.Provider value={[quizzes, loading]}>
      {children}
    </QuizzesContext.Provider>
  )

}

export default QuizzesContext;