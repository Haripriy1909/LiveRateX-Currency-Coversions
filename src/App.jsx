import React, { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Charts from './Graphs/Charts'
import Navbar from './Navsection/Navbar'
import Converter from './Currencycoverter/Converter'
import HomeBtn from './Component/Home/HomeBtn'


const App = () => {
  
  
  
  return (
    <div className='text-white'>
        
       <Navbar />



 <Routes>
  <Route path='' element={<Home/>}/>
  <Route path='/Charts' element={<Charts/>}/>
  <Route path='/About' element={<About/>}/>
   <Route path='/Converter' element={<Converter/>}/>
</Routes> 
    </div>
  )
}

export default App
