import React from 'react';
import {useState} from "react";
import {useNavigate} from 'react-router';
import Errormsg from './Errormsg';
// import { Button } from '@mui/material';

function Questions({questions, currQues, setCurrQues,setQuestions, options,setOptions, correct, score, setScore}) {
    const[selected,setSelected] = useState()
    const[error,setError] = useState()
    // console.log(questions[currQues].question)
    const history = useNavigate();
    const handleCheck = (i) => {
        setSelected(i);
        setError();
        if(i === correct) {setScore(score+1)};
        // setError(false);
    }
    const handleSelect = (i) => {
        // setSelected(i)
        if(selected === i && selected === correct)
                // i.style.backgroundColor = "green";
                return "select";
        
        else if(selected === i && selected !== correct)
            // i.style.backgroundColor = "red";
            return "wrong";
        
        else if(i === correct)
        

            // i.style.backgroundColor = "green";
            return "select";
        // console.log("gfhgvjhbj")
    }
    const handleQuit=()=>{
     history("/")
    }
    const handleNext=()=>{
    if(currQues > 8){
           history("/result"); 
        }
        else if(!selected){
            setError("Please select an option first")
        }
        else if(selected){
            
        setCurrQues(currQues + 1);
        setSelected();
        }
    }
    // console.log(options)
  return (
    <>
    <h1>Question {currQues + 1}</h1>
    <div className='questions'>
        <h2>{questions[currQues].question}</h2>
        {error && <Errormsg>{error}</Errormsg>}
        <div className='options'>
            {options && options.map((i) =>(
                <button className= {`singleOption ${selected && handleSelect(i)}`}
            //  <button className= "singleOption"
              onClick={()=>handleCheck(i)}
             key={i}
            disabled={selected}
              >
             {i}
             </button> 
            ))}
        </div>
        <button className="Quit" onClick={()=>handleQuit()}>
            Quit
        </button>
        <button className="Next" onClick={()=>handleNext()}>
            Next
        </button>
    </div>
    </>
  )
}

export default Questions
