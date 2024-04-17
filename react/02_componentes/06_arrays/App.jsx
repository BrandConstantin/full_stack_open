import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)

    // porque React trabaja de forma asincrona
    // actualizar datos en tiempo real
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1
        setLeft(updatedLeft)
        setTotal(updatedLeft + right)
    }
    /*
        const handleLeftClick = () => {
            setAll(allClicks.concat('L'))
            setLeft(left + 1)
    
            setTotal(left + right)
        }
    */
    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)

        setTotal(left + right)
    }

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <p>{allClicks.join(' ')}</p>

            <p>total {total}</p>
        </div>
    )
}

export default App   