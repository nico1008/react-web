import React from 'react';
import Bar from './Bar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return(
    <>
    <Router>
      <Bar>
      <Routes>
        <Route path='/' exact />
      </Routes>
      </Bar>
    </Router>
      
    </>
  )
}

export default App;
