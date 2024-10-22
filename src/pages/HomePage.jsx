import React from 'react'

import AllQuiz from './AllQuiz'
import AttemptQuiz from './AttemptQuiz'
import CreateQuiz from './CreateQuiz'


const HomePage = () => {

  return (
    <div className='flex flex-col gap-8 place-self-center w-full my-8'>
      <AllQuiz />
      <AttemptQuiz />
      <CreateQuiz />
    </div> 
  )
}

export default HomePage
