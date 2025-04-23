
import React,{useState} from "react";
import './../styles/App.css';
import WheatherDisplay from "./WheatherDisplay";

const App = () => {
  const [temp,setTemp]=useState({temperature: 18, conditions: "Sunny"})
  return (
   
   <div>
      
        <WheatherDisplay data={temp}/>

    </div>
  )
}

export default App
