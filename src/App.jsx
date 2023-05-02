//import { useState } from 'react'
//import './App.css'
import { Header } from './components/Header';
import { Tasklist } from './components/tasklist';



 function App() {

  const tasks = [{id:1, completed:false}, {id:2, completed:true}]
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Tasklist tasks={tasks}/> 
    </>
  )
}

export default App
