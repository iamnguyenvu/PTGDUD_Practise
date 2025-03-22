import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div class="w3-container w3-teal flex justify-center bg-blue-500">
          <h1>My Header</h1>
        </div>

        <div class="w3-container">
          <p>A car is a wheeled, self-powered motor vehicle used for transportation.</p>
        </div>

        <div class="w3-container w3-teal">
          <p>My Footer</p>
        </div>
      </div>
    </>
  )
}

export default App
