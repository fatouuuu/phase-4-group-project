import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path='register' element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
