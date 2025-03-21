import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import RecipeBox from '../components/RecipeBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        {/* <Content /> */}
        <RecipeBox />
        {/* <Outlet /> */}
        <Footer />
      </div>
    </>
  )
}

export default App
