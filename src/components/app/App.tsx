import { Route, Routes } from 'react-router-dom'
import Home from '../home'
import News from '../news'
import Register from '../register'
import Login from '../login'

function App() {
  return (
    <div className='flex w-full h-full px-10'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<News/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App;
