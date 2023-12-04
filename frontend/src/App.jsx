import React from 'react'
import Navbar from './components/navbar.component'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={}/> */}
      </Routes>
    </Router>
  )
}

export default App