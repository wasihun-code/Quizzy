// pages/QuizDetail.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiCategory, BiCheckCircle, BiTime } from 'react-icons/bi';

const QuizDetail = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        const quizResponse = await fetch(`http://localhost:9000/quiz-app/quiz/${quizId}`);
        const quizData = await quizResponse.json();

        const questionsResponse = await fetch(`http://localhost:9000/quiz-app/quizzes/${quizId}/questions`);
        const questionsData = await questionsResponse.json();

        setQuiz(quizData);
        setQuestions(questionsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizDetails();
  }, [quizId]);

  if (loading) return <div className="h-screen flex flex-col gap-8 w-7/12 mx-auto my-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-white items-center justify-center">Loading...</div>;
  if (error) return <div>Error fetching quiz details.</div>;

  return (
    <>
      <h1 className="text-3xl font-bold text-center">{quiz.title}</h1>
      <div className="flex flex-col w-full border-2 rounded-xl" >
        <div className="flex flex-row gap-4 w-full place-content-around m-5">
          <div className="flex flex-col gap-2">
              {/* <div className="flex flex-row px-4 gap-2 items-center text-2xl">
                <BiCategory className="text-blue-500" />
                <h1 className='text-2xl'>Category </h1>
                </div> */}
              <h1 className="font-normal px-4">{quiz.category.name}</h1>
              {
                quiz.quiz_image && (
                <img src={quiz.quiz_image} alt={quiz.title} className="mt-4 rounded-full  w-full h-48 object-cover" />
              )}
      
          
          </div>
          <div className="flex flex-col gap-4 place-self-center mt-4 md:mt-0 border-2 p-8 rounded-md w-1/2">
            <h1 className="font-medium text-xl">Quiz Stats</h1>
            <hr />
            <div className="flex items-center gap-2">
              <BiCheckCircle className="text-green-500" />
              <span>Total Questions: {questions.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <BiTime className="text-yellow-500" />
              <span>Attempts: 10</span> {/* Placeholder for attempts */}
            </div>
            <div className="flex items-center gap-2">
              <BiTime className="text-red-500" />
              <span>Average Score: 75%</span> {/* Placeholder for average score */}
            </div>
            <Link 
              to={`/quizzes/${quiz.id}/edit`} 
              className='border-2 rounded-xl p-2 px-4 text-center  self-center mt-4 hover:bg-black hover:text-white'>
                Edit Quiz
            </Link>
          </div>
        </div>
        <div className="w-3/4 flex flex-col place-self-center">
          <h3 className="text-2xl font-semibold mb-4 text-center">Questions</h3>
          {questions.map((question) => (
            <div key={question.id} className="flex flex-col p-4 border border-gray-300 rounded-lg bg-gray-100 hover:shadow-md transition-shadow duration-300 mb-4">
              <h4 className="text-lg font-medium">{question.question_text}</h4>
            </div>
          ))}
        
        </div>
      </div>

    </>
  );
};

export default QuizDetail;
