import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import {useState} from "react";
import Questions from "./Questions";
import {useNavigate} from 'react-router';

function Quiz({name,setName, questions, setQuestions, currQues,setCurrQues,score,setScore}) {
  const[options, setOptions] = useState()
  const history = useNavigate();
  
  const handleShuffle = (options) =>{
    return options.sort(() => Math.random()-0.5);
  }
  useEffect(()=>{
    setOptions(
      questions && 
      handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers
])
);
},[currQues,questions]);
  // console.log(questions[currQues].correct_answer)
  // console.log(questions)
  // console.log(options)
  // console.log(...questions[currQues].incorrect_answers)
  return (
    <div className='quiz'>
      
      {questions ? (
     <>
     <span>Welcome , {name}</span>
     <div className='quizInfo'>
      <span>{questions[currQues].category}</span>
      <span>score : {score}</span>
     </div>
     
     <Questions currQues={currQues} setCurrQues={setCurrQues} questions={questions} setquestions={setQuestions} options={options} setOptions={setOptions} correct={questions[currQues]?.correct_answer} score={score} setScore={setScore}/>
      
      
      </>
      )
      : (<CircularProgress/>)}
    </div>
  )
}

export default Quiz