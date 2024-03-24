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
  const name = 'Costy'
  const age = 37

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
        <MultipleProps name='Maya' age={'52'}/>
        <MultipleProps name={name} age={age}/>
      </div>
    </>
  )
}


const MultipleProps= (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name} with age {props.age}'</p>
    </div>
  )
}

export default App
