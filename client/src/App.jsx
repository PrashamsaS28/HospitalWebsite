import React from 'react'
import Homepage from './components/Homepage';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
 

  return (
    <>
    <Router>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learnmore' element={<Homepage/>}/>
        
        
        </Routes>
      </Router>
    </>
  )
}

export default App
