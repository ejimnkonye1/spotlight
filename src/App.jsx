import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Moviedetails } from './components/details'

import Ex from './components/ex'

import { Listdet } from './components/listdet'
import GeminiMovieSearch from './components/ge'
import { HeaderSm } from './components/smheader'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='main'>

    <Router>
      
      <Routes>
        <Route path='/' element={<Ex />} />
        <Route path='/movies/:id' element={<Moviedetails />} />
        <Route path='/list/:id' element={<Listdet />} />
        <Route path='/gem/' element={<GeminiMovieSearch />} />
       
      </Routes>
    </Router>
  </div>
  )
}

export default App
