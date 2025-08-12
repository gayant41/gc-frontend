import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard.jsx'
import UserData from './components/UserData.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>


      <BrowserRouter>
        <Routes path="/*">

          <Route path="/*" element={<h1>404 Not Found</h1>} />
          <Route path="/login" element={<h1>login</h1>} />
        </Routes>
      </BrowserRouter>




    </>
  )
}

export default App
