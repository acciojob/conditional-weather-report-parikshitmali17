import React, { useEffect, useState } from 'react'

function WheatherDisplay(props) {
    console.log(props)
   
  return (
    <div>
        
          <p>Temperature: <span style={{color: props.data.temperature >20 ? "red" :" blue"}}>{props.data.temperature}</span></p>
        
        <p>Conditions: {props.data.conditions}</p>
    </div>
  )
}

export default WheatherDisplay