import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className="card">

        <button onClick={() => setCount((banana) => count + 1)}>
          count is {count}
        </button> 
        
      </div>
    </div>
  )
}

export default App
