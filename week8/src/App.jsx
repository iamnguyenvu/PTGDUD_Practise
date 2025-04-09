import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Content from '../pages/Content'
import RecipeSection from '../components/RecipeSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Content />
      <RecipeSection /> 
    </div>
  )
}

export default App
