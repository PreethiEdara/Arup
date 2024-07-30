import { useState, useCallback,useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let nums = "0123456789";
    let chars = "!@#$%^&*";
    if (numAllowed)  str+=nums;
    if (charAllowed) str+=chars;

    for (let i=1; i<=length;i++){
      let charIndex = Math.floor(Math.random() * str.length +1);
      pass = pass+str.charAt(charIndex)
    }
    setPassword(pass)
  },[numAllowed, charAllowed, length,setPassword]);

  useEffect(()=>{passwordGenerator()}, [length, numAllowed, charAllowed, passwordGenerator])

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])
    
    
  return (

  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-black-500">
    <h1  className='text-white text-center my-3'>Password Generator</h1>

    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder='pp'
            ref={passwordRef} 
            readOnly >
      </input>
      <button id="copy" className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>

      <div className='flex items-center gap-x-1 text-white'>
        <input type= "range" min={8} max={50} className='cursor-pointer' value={length} onChange={(e)=> {setLength(e.target.value)}}></input>
        <label> Length: {length}</label>
      </div>

      <div className='flex items-center gap-x-1 text-white'>
        <input type="checkbox" id= "num" defaultChecked={numAllowed} onChange={() => {setnumAllowed((prev)=> !prev)}}></input>
        <label htmlFor='num'>numbers</label>
      </div>

      <div className='flex items-center gap-x-1 text-white'>
        <input type="checkbox" id= "char" defaultChecked={charAllowed} onChange={() => {setcharAllowed((prev)=> !prev)}}></input>
        <label htmlFor='char'>Characters</label>
      </div>

    </div>
  </div>

  ) 
}

export default App
