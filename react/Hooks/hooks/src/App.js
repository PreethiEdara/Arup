import './App.css';
import { useState, useMemo } from 'react';
import {PrimaryButton} from '@fluentui/react'

function App() {
  const [count,setCount] = useState(0)
  const [number, setNumber] =useState(0)
  const [theme, setTheme] = useState(false)
  const increment = ()=> {
    setCount(prevState => prevState + 1)
  }
  const decrement = ()=> {
    setCount(prevState => prevState - 1)
  }
  const doubleNumber = useMemo(()=>{
    return slowFunction(number)
  },[number])
  function slowFunction(num){
    for (let i=0;i<=1000000000;i++){}
    return num*2
  }
  const themeStyles = {
    backgroundColor: theme? 'black' : 'white',
    color : theme? 'white' : 'black'
  }
  return (
    <>
    <h1>Hooks</h1>
    <PrimaryButton onClick={increment}>+</PrimaryButton>
    <h2>{count}</h2>
    <PrimaryButton onClick={decrement}>-</PrimaryButton>
    <br></br>
    <input type='number' onChange={e => setNumber(e.target.value)} value={number}/>
    <br></br>
    <PrimaryButton onClick={()=> setTheme(prevTheme => !prevTheme)}>Change Theme</PrimaryButton>
    <br></br>
    <div style = {themeStyles}>{doubleNumber}</div>
    </>
  );
}

export default App;
