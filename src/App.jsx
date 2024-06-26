import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Top10 } from './components/home'
import { Moviedetails } from './components/details'
import { Search } from './components/test'
import Ex from './components/ex'
import YourComponent from './components/me'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className=''>
    <Router>
      <Routes>
        <Route path='/' element={<Top10 />} />
        <Route path='/movies/:id' element={<Moviedetails />} />
        <Route path='/search' element={<Search />} />
        <Route path='/eg' element={<YourComponent/>} />
      </Routes>
    </Router>
  </div>
  )
}

export default App
