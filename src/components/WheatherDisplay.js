import React, { useEffect, useState } from 'react'

function WheatherDisplay(props) {
    console.log(props)
    
  return (
    <div>
        
       { useEffect((e)=>{
 <p><span style={{color: props.data.temperature >20 ? "red" :" blue"}}>Temperature:{props.data.temperature}</span></p>
},[props.data.temperature])}
         
        
        <p>Conditions: {props.data.conditions}</p>
    </div>
  )
}

export default WheatherDisplay