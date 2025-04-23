import React, { useState } from 'react'

function WheatherDisplay(props) {
    console.log(props)
  return (
    <div>
        <span>
          <p style={{color: props.data.temperature >20 ? "red" :" blue"}}>Temperature:{props.data.temperature}</p>
        </span>
        <p>Conditions: {props.data.conditions}</p>
    </div>
  )
}

export default WheatherDisplay