import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   const [count, SetCount] = useState(0)
  return (
    <>
      <div className="card">
        <div className='box' >
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={()=>SetCount(count+1)}>Increment</button>
        <button onClick={()=>SetCount(count-1)}>Decrement</button>
        <button onClick={()=>SetCount(0)}>Reset</button>
      </div>
      </div>

    </>
  )
}

export default App
