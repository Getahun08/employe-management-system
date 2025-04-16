import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './componets/Home'
import Empskill from './componets/Empskill'
import Addemploye from './componets/Addemploye'
import Departement from './componets/Departement'
import Register from './componets/Register'
import Login_page from './componets/Login_page'
import Dashbord from './componets/Dashbord'
import Skill from './componets/Skill'
import Navi from './componets/Navbar'
import React from 'react'
function App() {
  
  return (
    <>
      <div className='App'>
        <Navi/>

        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/Empskill"element={<Empskill/>}/>
          <Route path="/Addemploye"element={<Addemploye/>}/>
          <Route path="/Skill"element={<Skill/>}/>
          <Route path="/login"element={<Login_page/>}/>
          <Route path="/dashbord"element={<Dashbord/>}/>
          <Route path="/Departement"element={<Departement/>}/>
          <Route path="/Register"element={<Register/>}/>
        </Routes>
      </div>
      
      
    </>
  )
}

export default App
