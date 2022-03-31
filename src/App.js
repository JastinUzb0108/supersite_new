import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainPages from './components/MainPages'

function App() {
  return (
    <Router>
      <div className='rootMain'>
        <Navbar />
        <MainPages />
        <Footer />
      </div>
    </Router>
  )
}

export default App