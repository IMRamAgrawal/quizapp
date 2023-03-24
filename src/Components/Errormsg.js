import React from 'react'

function Errormsg({children}) {
  return (
    <div
    style={{
        backgroundColor:"red",
        height:"40px",
        width:"45vw",
        borderRadius: "4px",
        // textAlign: "center",
        borderColor:"red",
        textTransform: "capitalize",
        display: "flex",
        alignItems:"center",
       justifyContent:"center"
    }}>
        {children}
    </div>
  )
}

export default Errormsg 