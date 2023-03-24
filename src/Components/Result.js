import React from 'react'
import { useNavigate } from 'react-router-dom'

function Result({score, setScore}) {
  const history = useNavigate();
  return (
    <>
    <div className='result'>
        Final Score: {score}
        <button className='HomePage' onClick = {()=>history("/")}>Go to HomePage</button> 
    </div>
   
     </>
  )
}

export default Result