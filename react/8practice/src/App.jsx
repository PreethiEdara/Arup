import { useState } from 'react'
import './App.css'

function App() {
  const [email, setemail] = useState(null)
  const [pass, setpass] = useState(null)
  const [result, setresult] = useState(null)

  let regx2=/^([a-zA-Z0-9_.-])+@([aA][rR][uU][pP])\.com$/;

  const handleEmail = (e)=>{
    setemail(e.target.value)
  }

  const handlePass = (e)=>{
    setpass(e.target.value)
  }
  
  const handleSubmit = ()=>{
    if ((!regx2.test(email)) || (pass.length < 8)){
      setresult("Invalid username or password!!")
    }
    else{
      setresult(`Hey ${email}`)
    }
  }

  return (
    <div className='form'>
      <h2>Welcome to BlaBlaBla</h2>
      <p>Please sign-in to your account and start the adventure</p>

      <h3>EMAIL</h3>
      <input type="text" value={email} placeholder='Enter your email' onChange={handleEmail}></input>

      <h3>PASSWORD</h3>
      <input type='password' value={pass} onChange={handlePass}></input>

      <br></br>
      <button onClick={handleSubmit}>Sign in</button>

      <p>{result}</p>
      

    </div>
  )
}

export default App
