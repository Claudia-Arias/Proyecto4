import { useState } from 'react'

import './App.css'
import Login from './views/Login'
import Home from './views/Home'
import { Route, Routes } from 'react-router'

function App() {
  

  return (
    <>

      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Home' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
