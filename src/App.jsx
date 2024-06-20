import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Top10 } from './components/home'
import { Moviedetails } from './components/details'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className=''>
    <Router>
      <Routes>
        <Route path='/' element={<Top10 />} />
        <Route path='/movies/:id' element={<Moviedetails />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App
