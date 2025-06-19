import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[Counter,setCounter]=useState(10)
   
    const addValue=()=>{
      // console.log("value Added",Math.random)
      // Counter=Counter+1
      console.log("clicked",Counter);
      setCounter(Counter+1)
    }

 

  return (
    <>
      <h1>Felix Its Fullstack Student</h1>
        <h2>Counter value:{Counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button>Remove Value</button>
    </>
  )
}

export default App
