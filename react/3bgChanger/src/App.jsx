import './App.css'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className = "main" style ={{backgroundColor:color}} >
      <div className='bars'>
        <div className='bar' >
          <button onClick={()=>setColor("red")} style={{backgroundColor : "red"}}>Red</button>
        </div>
        <div className='bar' >
          <button onClick={()=>setColor("green")} style={{backgroundColor : "green"}}>Green</button>
        </div>
        <div className='bar'>
          <button onClick={()=>setColor("blue")} style={{backgroundColor : "blue"}}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
