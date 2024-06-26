import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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
      <h1>Vite + React</h1>

      <div>
        <p>Hello world, it is {now.toString()}</p>
        <p>{a} plus {b} is {a+b}</p>
      </div>
    </>
  )
}

export default App
