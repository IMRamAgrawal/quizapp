import './App.css';
import React from 'react';
import {useState} from "react";
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Errormsg from './Components/Errormsg';
import Quiz from './Components/Quiz';
import axios from 'axios';
import {BrowserRouter,  Route, Routes} from 'react-router-dom';
import Result from './Components/Result';




function App() {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [questions, setQuestions] = useState("")
  const [currQues, setCurrQues] = useState(0)
  const [score, setScore] = useState(0)

  const fetchQuestions = async(category, difficulty)=>{
  const {data} = await axios.get(
    `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    // `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
  setQuestions(data.results);
  // console.log(data.results);
  }
  // const fetchQuestions =()=>{
  //      console.log("rtdyugihojpo")
  //   }
  return (
   <BrowserRouter>
    <div className='App'>
   <Header/>
   <Routes>
    <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} category={category} setCategory={setCategory}/>}/>
   
   <Route path="/quiz" 
    element={<Quiz name={name} setName={setName} questions={questions}  setQuestions={setQuestions} currQues={currQues} setCurrQues={setCurrQues} score={score} setScore={setScore}/>}/>
   <Route path="/result" element={<Result score={score} setScore={setScore}/>}/>
   </Routes>
   {/* <Footer/> */}
   </div>
   </BrowserRouter>
   
  );
}

export default App;
