import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from '../home'
import News from '../news'
import Register from '../register'
import Login from '../login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<News/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App;
