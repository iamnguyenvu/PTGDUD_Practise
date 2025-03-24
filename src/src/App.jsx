import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterReducer from './pages/CounterReducer'
import ListTodo from './pages/ListTodo'
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CounterReducer />
      <ListTodo />
    </div>
  )
}

export default App
