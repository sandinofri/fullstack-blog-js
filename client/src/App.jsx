import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import Blog from './component/Blog'
import Add from './component/Add'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/add' element={<Add/>}/>
     </Routes>
    </>
  )
}

export default App
