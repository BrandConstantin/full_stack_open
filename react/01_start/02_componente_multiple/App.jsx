import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const now = new Date()
  const a = 10
  const b = 11
  console.log(now, a+b)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div>
        <Hello />
      </div>
      <div>
        <Hello />
      </div>
    </>
  )
}


const Hello = () => {
  return (
    <div>
      <p>Hello from 'Hello Component!'</p>
    </div>
  )
}

export default App
