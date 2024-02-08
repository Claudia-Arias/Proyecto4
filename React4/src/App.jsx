import { useState } from 'react'
import './App.css'
import Login from './views/Login'
import Home from './views/Home'
import { Route, Routes } from 'react-router'
import AdminList from './views/AdminList'
import Raffle from './views/Raffle'

function App() {
  

  return (
    <>

      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/AdminList' element={<AdminList/>} />
        <Route path='/Raffle' element={<Raffle/>} />
      </Routes>
    </>
  )
}

export default App
