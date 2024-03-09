import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counts from './Counts'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = ()=>{
    alert('button 2 clicked')
  }
  const addFive= (num)=>{
    alert(num + 5)
  }
  return (
    <>
      <h1>React core concept part-2</h1>
      
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counts></Counts>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('third button clicked')}}>Click 3</button>
      {/* <button onClick={addFive(5)}>Click 4</button>   evabe lickche function call kora hoye jay tay evabe likha jabe na  */}
      <button onClick={()=>{addFive(3)}}>Click 5</button>
      
    </>
  )
}

export default App
