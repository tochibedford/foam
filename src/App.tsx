import { useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.scss'

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    </div>
  )
}

export default App
