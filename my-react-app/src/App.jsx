import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register_user from '../pages/Register_user'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Register_user/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
