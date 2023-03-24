import {MenuItem, TextField } from '@mui/material'
import React, {useState} from 'react'
import Categories from './Categories'
import {useNavigate} from 'react-router';
import Errormsg from './Errormsg';
// import Backgroundimages from './images/Backgroundimages';


function Home({name,setName,fetchQuestions,category,setCategory}) {
    // const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)
    const history = useNavigate();
    const handleSubmit = () =>{
      if(!category|| !difficulty || !name){
        setError(true);
        return;
      }else{
        setError(false)
        fetchQuestions(category, difficulty);
        history("/quiz");
      }
    }
    
  return (
    <>
    
    <div className='Home'>
        
         <div className='img'>
          {/* <img style={{width:"500px"}} src={require('./images/Backgroundimages.png').default} alt="loadingimage"/> */}
           <img src="./images/Backgroundimages.png" alt="loadingimage"/>
        </div>
        <h2>Quiz Setting</h2> 
        {error && <Errormsg>Please fill all the fields</Errormsg>}
        <div className='Textfield'>
        <TextField
        style={{marginBottom:25, minWidth:"200px",width:"30vw"}}         
            label="Enter your Name"
            variant="outlined"
            onChange= {(e)=>setName(e.target.value)}
        /> 
       </div>
       <div className='Textfield'>
         <TextField
           select
           style={{marginBottom:25, minWidth:"200px", width:"30vw"}} 
            label="Select Category"
            value={category}
            variant="outlined"
            onChange= {(e)=>setCategory(e.target.value)}>
            {Categories.map((e)=>(
            <MenuItem key={e.category} value={e.value}>{e.category}</MenuItem>
           
  ))}
 </TextField>
 </div>
 <div className='Textfield'>
         <TextField 
           select
            label="Select Difficulty"
            value={difficulty}
            onChange= {(e)=>setDifficulty(e.target.value)}
            variant="outlined"
            style={{marginBottom:30, minWidth:"200px", width:"30vw"}}
        >
            <MenuItem key="Easy" value="easy">Easy</MenuItem>
            <MenuItem key="Medium" value="medium">Medium</MenuItem>
            <MenuItem key="Hard" value="hard">Hard</MenuItem>
            
        </TextField>
      
        </div>
        <div>
          <button onClick={handleSubmit}>Quiz Start</button>
        </div>  
        
    </div>
    </>
  )
}

export default Home 