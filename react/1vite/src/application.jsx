import { useState } from "react";
function Operation() {
    let [counter, setCounter] = useState(10)
    let [limit, setLimit] = useState("")
    function addValue(){
        setLimit("")
        if (counter < 20){
            setCounter(counter+1);
            setCounter(counter+1);
            setCounter(counter+1);
            setCounter(counter+1);
        }else{
            setLimit("Cannot exceed 20")
        }
        
    }
    function removeValue(){
        setLimit("")
        if (counter>0){
            setCounter(counter-1)
        }else{
            setLimit("Cannot go below 0")
        }
    }
    return (
        <>
            <h1>Value is {counter}</h1>
            <button onClick={addValue}>Add {counter} {limit}</button>
        
            <br /><br />
            <button onClick={removeValue}>Subtract {counter} {limit}</button>
            
        </>
   
  )
}

export default Operation

