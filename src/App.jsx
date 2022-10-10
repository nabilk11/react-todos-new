import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { ToDoList } from './components/ToDoList'
import data from './data/data.json'



function App() {

  // vite app counter
  const [count, setCount] = useState(0)


  // todolist state
  const [toDoList, setToDoList] = useState(data)
  
  
  
  
  
  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList}/>
      <div className="card">

        <button onClick={() => setCount((counter) => count + 1)}>
          count is {count}
        </button> 
        
      </div>
    </div>
  )
}

export default App
