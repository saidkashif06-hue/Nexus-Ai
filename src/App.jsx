import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      
    </div>
  )
}

export default App

