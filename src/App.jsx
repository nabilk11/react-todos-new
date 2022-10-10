import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { ToDoForm } from './components/ToDoForm'
import { ToDoList } from './components/ToDoList'
import data from './data/data.json'



function App() {

  // vite app counter
  const [count, setCount] = useState(0)


  // todolist state
  const [toDoList, setToDoList] = useState(data)

  // toggle complete/incomplete function
  const completeToggle = (id) => {
    let mappedTask = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task}
    })
    setToDoList(mappedTask)
  }

  // delete/filter completed tasks
  const filterComplete = ()=> {
    let filtered = toDoList.filter(task => {
      return !task.complete
    })
    setToDoList(filtered)
  }
  
  // add task
  const addTask = (newTask)=> {
    let newList = [...toDoList]
    newList.push({id: toDoList.length + 1, task: userInput, complete: false });
    setToDoList(newList)
  }
  
  
  
  return (
    <div className="App">
      <Header />
      <ToDoList filterComplete={filterComplete} completeToggle={completeToggle} toDoList={toDoList}/>
      <ToDoForm addTask={addTask}/>
      
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
        
      </div>
    </div>
  )
}

export default App
