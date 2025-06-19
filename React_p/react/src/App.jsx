import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TravelApp from './TravelApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TravelApp/>
    </>
  )
}

export default App
