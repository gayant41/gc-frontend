import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard.jsx'
import UserData from './components/UserData.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginPage.jsx'
import AdminHomePage from './pages/adminHomePage.jsx'
import { Toaster } from 'react-hot-toast'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>


      <BrowserRouter>
        <Toaster />
        <Routes path="/*">
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
          <Route path="/admin/*" element={<AdminHomePage />} />
        </Routes>
      </BrowserRouter>




    </>
  )
}

export default App
