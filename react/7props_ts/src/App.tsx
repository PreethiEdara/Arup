
import './App.css'
import Button from './components/Button'
import Greet from './components/Greet'
import Input from './components/Input'
import Obj_arr from './components/Obj_arr'
import Status from './components/Status'

function App() {
  const objapp ={
    num : 20,
    name: "Preethi",

  }
  const arr_=[
    {
      sub :"Math",
      chapters : 10,
    },
    {
      sub :"Phy",
      chapters : 18,
    },
    {
      sub :"Chem",
      chapters : 20,
    }
  ]
  

  return (
    <>
      <Greet name = "Preethi edara" age ={21} isGiven={false}/>
       <Obj_arr details = {objapp} subjects = {arr_} />
       <Status status ="loading" />\
       <Button handleclick={() => alert("Button is clicked :)")}/>
       <br></br>
       <Input handleChange={(e)=>alert(e.target.value )}/>
    </>
  )
}

export default App
